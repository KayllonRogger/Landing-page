'use client';

import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import styles from '../../drive/page.module.css';
import {
    INITIAL_FILES,
    INITIAL_FOLDERS,
    authenticateUser,
    changeUserPassword,
    fetchDriveLogs,
    getClientSession,
    logoutClientSession,
    recordDriveLog,
    renameDriveFile,
} from '@/lib/drive';
import type { ClientSession, DriveFile, DriveFolder, DriveLog } from '@/lib/drive';

export default function DrivePageEn() {
    const [session, setSession] = useState<ClientSession | null>(null),
        [isLoading, setIsLoading] = useState(true),
        [username, setUsername] = useState(''),
        [password, setPassword] = useState(''),
        [loginError, setLoginError] = useState(''),
        [isLoggingIn, setIsLoggingIn] = useState(false),
        [showChangePassword, setShowChangePassword] = useState(false),
        [cpUsername, setCpUsername] = useState(''),
        [cpCurrentPassword, setCpCurrentPassword] = useState(''),
        [cpNewPassword, setCpNewPassword] = useState(''),
        [cpConfirmPassword, setCpConfirmPassword] = useState(''),
        [cpError, setCpError] = useState(''),
        [cpSuccess, setCpSuccess] = useState(''),
        [isChangingPassword, setIsChangingPassword] = useState(false),
        [currentFolderId, setCurrentFolderId] = useState<string | null>(null),
        [folders, setFolders] = useState(INITIAL_FOLDERS),
        [files, setFiles] = useState(INITIAL_FILES),
        [searchQuery, setSearchQuery] = useState(''),
        [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
        [showUploadModal, setShowUploadModal] = useState(false),
        [showNewFolderModal, setShowNewFolderModal] = useState(false),
        [showLogsModal, setShowLogsModal] = useState(false),
        [showRenameModal, setShowRenameModal] = useState(false),
        [renameTarget, setRenameTarget] = useState<DriveFile | null>(null),
        [renameValue, setRenameValue] = useState(''),
        [isRenaming, setIsRenaming] = useState(false),
        [renameError, setRenameError] = useState(''),
        [logs, setLogs] = useState<DriveLog[]>([]),
        [logsLoading, setLogsLoading] = useState(false),
        [logSearch, setLogSearch] = useState(''),
        [logActionFilter, setLogActionFilter] = useState('ALL'),
        [uploadFile, setUploadFile] = useState<File | null>(null),
        [newFolderName, setNewFolderName] = useState(''),
        [isUploading, setIsUploading] = useState(false),
        [modalError, setModalError] = useState('');
    useEffect(() => {
        let e = getClientSession();
        setSession(e);
        if (e && e.allowedFolderId) {
            setCurrentFolderId(e.allowedFolderId);
        }
        setIsLoading(false);
    }, []);
    const handleLogin = async (e: FormEvent) => {
            e.preventDefault();
            setLoginError('');
            setIsLoggingIn(true);
            let a = await authenticateUser(username, password);
            if (a.success && a.user) {
                setSession(a.user);
                setPassword('');
                if (a.user.allowedFolderId) {
                    setCurrentFolderId(a.user.allowedFolderId);
                } else {
                    setCurrentFolderId(null);
                }
            } else {
                setLoginError(a.error || 'Invalid credentials. Please verify your username and password.');
            }
            setIsLoggingIn(false);
        },
        handleChangePassword = async (e: FormEvent) => {
            e.preventDefault();
            setCpError('');
            setCpSuccess('');
            if (!cpUsername.trim()) {
                setCpError('Please enter your username.');
                return;
            }
            if (cpNewPassword.length < 6) {
                setCpError('New password must be at least 6 characters long.');
                return;
            }
            if (cpNewPassword !== cpConfirmPassword) {
                setCpError('The password confirmation does not match.');
                return;
            }
            setIsChangingPassword(true);
            try {
                let e = await changeUserPassword(cpUsername.trim().toLowerCase(), cpCurrentPassword, cpNewPassword);
                if (e.success) {
                    setCpSuccess(e.message || 'Password updated successfully! You can now log in with your new password.');
                    setUsername(cpUsername.trim().toLowerCase());
                    setPassword('');
                    setCpCurrentPassword('');
                    setCpNewPassword('');
                    setCpConfirmPassword('');
                } else {
                    setCpError(e.error || 'Failed to update password. Please check your current credentials.');
                }
            } catch (e) {
                setCpError(e instanceof Error ? e.message : 'Connection error while attempting to update password.');
            } finally {
                setIsChangingPassword(false);
            }
        },
        handleUpload = async (a: FormEvent) => {
            a.preventDefault();
            if (uploadFile && session && session.role === 'staff') {
                setIsUploading(true);
                setModalError('');
                try {
                    let a = folders.find((e) => e.id === currentFolderId),
                        t = new FormData();
                    t.append('file', uploadFile);
                    t.append('folder', a ? a.slug : '');
                    try {
                        await fetch('/drive-api.php?action=upload', {
                            method: 'POST',
                            body: t,
                        });
                    } catch {}
                    let l = uploadFile.name.split('.').pop() || '',
                        n = {
                            id: 'file-' + Date.now(),
                            name: uploadFile.name,
                            folderId: currentFolderId || 'folder-cemig',
                            company: a ? a.company : 'General',
                            size: uploadFile.size,
                            modified: new Date().toISOString(),
                            extension: l.toLowerCase(),
                            downloadUrl: URL.createObjectURL(uploadFile),
                        };
                    setFiles((e) => [n, ...e]);
                    setShowUploadModal(false);
                    setUploadFile(null);
                    recordDriveLog(
                        {
                            action: 'UPLOAD',
                            actor: session.name,
                            company: a ? a.company : 'General',
                            details: `Uploaded file "${uploadFile.name}" (${formatSize(uploadFile.size)}) to folder "${a ? a.name : 'Root Folder'}"`,
                        },
                        session.token,
                    ).then((e) => {
                        setLogs((a) => [e, ...a]);
                    });
                } catch {
                    setModalError('Failed to upload file.');
                } finally {
                    setIsUploading(false);
                }
            }
        },
        openLogs = async () => {
            setShowLogsModal(true);
            setLogsLoading(true);
            setLogs(await fetchDriveLogs(session?.token));
            setLogsLoading(false);
        },
        openRename = (e: DriveFile) => {
            setRenameTarget(e);
            setRenameValue(e.name);
            setRenameError('');
            setShowRenameModal(true);
        },
        handleRename = async (a: FormEvent) => {
            a.preventDefault();
            if (!renameTarget || !renameValue.trim() || !session || session.role !== 'staff') {
                return;
            }
            setIsRenaming(true);
            setRenameError('');
            let t = folders.find((e) => e.id === renameTarget.folderId),
                l = t ? t.slug : renameTarget.company.toLowerCase(),
                n = renameValue.trim(),
                i = await renameDriveFile(renameTarget, n, l, session.token);
            if (i.success && i.newName) {
                let a = i.newName,
                    n = a.split('.').pop() || renameTarget.extension,
                    r = i.downloadUrl || `/drive-api.php?action=download&folder=${l}&file=${encodeURIComponent(a)}`;
                setFiles((e) =>
                    e.map((e) =>
                        e.id === renameTarget.id
                            ? {
                                  ...e,
                                  name: a,
                                  extension: n,
                                  downloadUrl: r,
                                  previewUrl:
                                      n.toLowerCase() === 'pdf'
                                          ? `/drive-api.php?action=view&folder=${l}&file=${encodeURIComponent(a)}`
                                          : undefined,
                                  modified: new Date().toISOString().split('T')[0],
                              }
                            : e,
                    ),
                );
                recordDriveLog(
                    {
                        action: 'RENOMEAR',
                        actor: session.name,
                        company: renameTarget.company,
                        details: `Renamed: "${renameTarget.name}" to "${a}" in folder "${t ? t.name : renameTarget.company}"`,
                    },
                    session.token,
                ).then((e) => {
                    setLogs((a) => [e, ...a]);
                });
                setShowRenameModal(false);
                setRenameTarget(null);
            } else {
                setRenameError(i.error || 'Failed to rename file.');
            }
            setIsRenaming(false);
        },
        formatSize = (e: number) => {
            if (e === 0) {
                return '0 B';
            }
            let a = Math.floor(Math.log(e) / Math.log(1024));
            return parseFloat((e / Math.pow(1024, a)).toFixed(1)) + ' ' + ['B', 'KB', 'MB', 'GB'][a];
        },
        formatDate = (e: string) => {
            try {
                return new Date(e).toLocaleDateString('en-US', {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                });
            } catch {
                return '-';
            }
        },
        getFileIcon = (e: string) => {
            let a = e.toLowerCase();
            return a === 'pdf'
                ? {
                      class: styles.iconPdf,
                      label: 'PDF',
                  }
                : ['xlsx', 'xls', 'csv'].includes(a)
                  ? {
                        class: styles.iconExcel,
                        label: 'XLS',
                    }
                  : ['dwg', 'dxf'].includes(a)
                    ? {
                          class: styles.iconCad,
                          label: 'CAD',
                      }
                    : ['doc', 'docx', 'txt'].includes(a)
                      ? {
                            class: styles.iconDoc,
                            label: 'DOC',
                        }
                      : ['zip', 'rar', '7z'].includes(a)
                        ? {
                              class: styles.iconZip,
                              label: 'ZIP',
                          }
                        : {
                              class: styles.iconGeneric,
                              label: e.toUpperCase() || 'FILE',
                          };
        },
        withToken = (a: string) => {
            if (!session?.token) {
                return a;
            }
            let t = a.includes('?') ? '&' : '?';
            return `${a}${t}token=${encodeURIComponent(session.token)}`;
        },
        currentFolder = useMemo(() => folders.find((e) => e.id === currentFolderId) || null, [folders, currentFolderId]),
        allowedCompany = session?.allowedFolderId ? folders.find((a) => a.id === session.allowedFolderId)?.company : null,
        visibleFolders = useMemo(() => {
            if (!session) {
                return [];
            }
            let a = [];
            return ((a =
                session.role === 'staff'
                    ? currentFolderId === null
                        ? folders.filter((e) => e.parentId === null)
                        : folders.filter((e) => e.parentId === currentFolderId)
                    : currentFolderId === session.allowedFolderId
                      ? folders.filter((a) => a.parentId === session.allowedFolderId)
                      : folders.filter((e) => e.parentId === currentFolderId)),
            searchQuery.trim())
                ? a.filter((e) => e.name.toLowerCase().includes(searchQuery.toLowerCase()))
                : a;
        }, [folders, currentFolderId, session, searchQuery]),
        visibleFiles = useMemo(() => {
            if (!session) {
                return [];
            }
            let a = files;
            if (session.role === 'client' && allowedCompany) {
                a = a.filter((e) => e.company === allowedCompany);
            }
            if (currentFolderId) {
                a = a.filter((e) => e.folderId === currentFolderId);
            } else {
                if (session.role === 'client' && session.allowedFolderId) {
                    a = a.filter((a) => a.folderId === session.allowedFolderId);
                }
            }
            if (searchQuery.trim()) {
                a = a.filter((e) => e.name.toLowerCase().includes(searchQuery.toLowerCase()));
            }
            return a;
        }, [files, currentFolderId, session, allowedCompany, searchQuery]),
        breadcrumbPath = useMemo(() => {
            if (!currentFolderId) {
                return [];
            }
            let e: DriveFolder[] = [],
                a: string | null = currentFolderId,
                t = new Set<string>();
            for (; a && !t.has(a);) {
                t.add(a);
                let l = folders.find((e) => e.id === a);
                if (!l) {
                    break;
                }
                e.unshift(l);
                a = l.parentId;
            }
            return e;
        }, [currentFolderId, folders]);
    return (
        <main className={styles.page}>
            <section className={styles.heroBanner}>
                <div className={styles.bannerPattern} />
                <div className={styles.bannerContainer}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot} />
                        <span>CORPORATE PORTAL & SECURE DRIVE</span>
                    </div>
                    <h1 className={styles.bannerTitle}>Technical Documents & Engineering Cloud</h1>
                    <p className={styles.bannerDescription}>
                        Secure corporate workspace with multi-tenant company isolation: clients access exclusively their facility reports
                        and substation studies.
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                {isLoading ? (
                    <div
                        style={{
                            textAlign: 'center',
                            padding: '60px 0',
                            color: '#64748b',
                        }}
                    >
                        Loading secure environment...
                    </div>
                ) : session ? (
                    <div className={styles.driveWrapper}>
                        <div className={styles.topBar}>
                            <div className={styles.userInfo}>
                                <div className={styles.userAvatar}>{session.name.charAt(0).toUpperCase()}</div>
                                <div className={styles.userDetails}>
                                    <span className={styles.userName}>{session.name}</span>
                                    <span className={styles.userRoleBadge}>
                                        <span
                                            className={styles.roleDot}
                                            style={{
                                                backgroundColor: session.role === 'staff' ? '#b8834c' : '#22c55e',
                                            }}
                                        />
                                        {session.role === 'staff' ? (
                                            <strong>KR Staff • Global Access (Full Edit)</strong>
                                        ) : (
                                            <span>
                                                {'Authorized Client • '}
                                                {session.company}
                                            </span>
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className={styles.topActions}>
                                {session.role === 'staff' && (
                                    <>
                                        <button
                                            type="button"
                                            onClick={() => setShowUploadModal(true)}
                                            className={`${styles.actionBtn} ${styles.actionBtnPrimary}`}
                                            title="Upload new document to current folder"
                                        >
                                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                                />
                                            </svg>
                                            <span>Upload File</span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowNewFolderModal(true)}
                                            className={`${styles.actionBtn} ${styles.actionBtnSecondary}`}
                                            title="Create new subfolder"
                                        >
                                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                                                />
                                            </svg>
                                            <span>New Folder</span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={openLogs}
                                            className={`${styles.actionBtn} ${styles.actionBtnSecondary}`}
                                            style={{
                                                borderColor: 'rgba(184, 131, 76, 0.5)',
                                                color: '#b8834c',
                                            }}
                                            title="View Drive modifications and audit history"
                                        >
                                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                                />
                                            </svg>
                                            <span>Modification Log</span>
                                        </button>
                                    </>
                                )}
                                <button
                                    type="button"
                                    onClick={() => {
                                        logoutClientSession();
                                        setSession(null);
                                        setCurrentFolderId(null);
                                        setSearchQuery('');
                                    }}
                                    className={styles.logoutBtn}
                                    title="Sign out of Drive"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                        <div className={styles.explorerBar}>
                            <div className={styles.breadcrumbs}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (session?.role === 'staff') {
                                            setCurrentFolderId(null);
                                        } else {
                                            if (session?.allowedFolderId) {
                                                setCurrentFolderId(session.allowedFolderId);
                                            }
                                        }
                                    }}
                                    className={styles.breadcrumbRoot}
                                    title="Go to Drive root"
                                >
                                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                        />
                                    </svg>
                                    <span>Drive KR</span>
                                </button>
                                {breadcrumbPath.map((e, t) => {
                                    let s = t === breadcrumbPath.length - 1;
                                    return (
                                        <span
                                            key={e.id}
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: 6,
                                            }}
                                        >
                                            <span className={styles.breadcrumbSeparator}>/</span>
                                            {s ? (
                                                <span className={styles.breadcrumbCurrent}>{e.name}</span>
                                            ) : (
                                                <button
                                                    type="button"
                                                    onClick={() => setCurrentFolderId(e.id)}
                                                    className={styles.breadcrumbItem}
                                                    title={`Go to folder ${e.name}`}
                                                >
                                                    {e.name}
                                                </button>
                                            )}
                                        </span>
                                    );
                                })}
                            </div>
                            <div className={styles.filterGroup}>
                                <div className={styles.searchInputWrapper}>
                                    <svg className={styles.searchIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Search files..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className={styles.searchInput}
                                    />
                                </div>
                                <div className={styles.viewToggle}>
                                    <button
                                        type="button"
                                        onClick={() => setViewMode('grid')}
                                        className={`${styles.toggleBtn} ${viewMode === 'grid' ? styles.toggleBtnActive : ''}`}
                                        title="Grid View"
                                    >
                                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setViewMode('list')}
                                        className={`${styles.toggleBtn} ${viewMode === 'list' ? styles.toggleBtnActive : ''}`}
                                        title="List View"
                                    >
                                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            {visibleFolders.length > 0 && (
                                <div>
                                    <div className={styles.sectionTitleGroup}>
                                        <h3 className={styles.subHeading}>
                                            <span>
                                                {currentFolderId === null && session.role === 'staff'
                                                    ? 'Client Companies'
                                                    : 'Project Folders'}
                                            </span>
                                            <span className={styles.itemCountBadge}>{visibleFolders.length}</span>
                                        </h3>
                                    </div>
                                    <div className={styles.folderGrid}>
                                        {visibleFolders.map((e) => {
                                            let t = files.filter((a) => a.folderId === e.id).length;
                                            return (
                                                <div
                                                    key={e.id}
                                                    onClick={() => setCurrentFolderId(e.id)}
                                                    className={styles.folderCard}
                                                    role="button"
                                                    tabIndex={0}
                                                    onKeyDown={(a) => {
                                                        if (a.key === 'Enter' || a.key === ' ') {
                                                            a.preventDefault();
                                                            setCurrentFolderId(e.id);
                                                        }
                                                    }}
                                                >
                                                    <div className={styles.folderIconBox}>
                                                        <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className={styles.folderInfo}>
                                                        <span className={styles.folderName} title={e.name}>
                                                            {e.name}
                                                        </span>
                                                        <span className={styles.folderSub}>
                                                            {e.parentId === null ? `Company: ${e.company}` : `${t} document(s)`}
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                            <div>
                                <div className={styles.sectionTitleGroup}>
                                    <h3 className={styles.subHeading}>
                                        <span>
                                            {currentFolder
                                                ? currentFolder.name
                                                : session.role === 'staff'
                                                  ? 'Select a company folder above to view documents'
                                                  : `${session.company} Documents`}
                                        </span>
                                        {visibleFiles.length > 0 && <span className={styles.itemCountBadge}>{visibleFiles.length}</span>}
                                    </h3>
                                </div>
                                {visibleFiles.length === 0 ? (
                                    <div className={styles.emptyState}>
                                        <svg className={styles.emptyIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                        <p>
                                            {currentFolderId === null && session.role === 'staff'
                                                ? 'Click on one of the company folders above to access technical engineering reports.'
                                                : 'No documents found in this folder.'}
                                        </p>
                                    </div>
                                ) : viewMode === 'grid' ? (
                                    <div className={styles.filesGrid}>
                                        {visibleFiles.map((t) => {
                                            let s = getFileIcon(t.extension);
                                            return (
                                                <div key={t.id} className={styles.fileCard}>
                                                    <div className={styles.fileTop}>
                                                        <div className={`${styles.fileIconBox} ${s.class}`}>{s.label}</div>
                                                        <div className={styles.fileMeta}>
                                                            <span className={styles.fileName} title={t.name}>
                                                                {t.name}
                                                            </span>
                                                            <div className={styles.fileDetails}>
                                                                <span>{formatSize(t.size)}</span>
                                                                <span>•</span>
                                                                <span>{formatDate(t.modified)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.fileActions}>
                                                        <div className={styles.filePrimaryActions}>
                                                            <a
                                                                href={withToken(t.downloadUrl)}
                                                                className={styles.downloadBtn}
                                                                download={t.name}
                                                                title="Download file"
                                                            >
                                                                <svg
                                                                    width="14"
                                                                    height="14"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                                                    />
                                                                </svg>
                                                                <span>Download</span>
                                                            </a>
                                                            {t.extension.toLowerCase() === 'pdf' && (
                                                                <a
                                                                    href={withToken(t.previewUrl || t.downloadUrl)}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className={styles.previewBtn}
                                                                    title="View in new tab"
                                                                >
                                                                    <svg
                                                                        width="14"
                                                                        height="14"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth={2}
                                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                                        />
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth={2}
                                                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                                        />
                                                                    </svg>
                                                                    <span>View</span>
                                                                </a>
                                                            )}
                                                        </div>
                                                        {session?.role === 'staff' && (
                                                            <div className={styles.fileStaffActions}>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => openRename(t)}
                                                                    className={styles.renameBtn}
                                                                    title="Rename file"
                                                                >
                                                                    <svg
                                                                        width="13"
                                                                        height="13"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth={2}
                                                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                        />
                                                                    </svg>
                                                                    <span>Rename</span>
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <table className={styles.filesListTable}>
                                        <thead>
                                            <tr>
                                                <th className={styles.tableTh}>File Name</th>
                                                <th className={styles.tableTh}>Company</th>
                                                <th className={styles.tableTh}>Format</th>
                                                <th className={styles.tableTh}>Size</th>
                                                <th className={styles.tableTh}>Date</th>
                                                <th
                                                    className={styles.tableTh}
                                                    style={{
                                                        textAlign: 'right',
                                                    }}
                                                >
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {visibleFiles.map((t) => {
                                                let s = getFileIcon(t.extension);
                                                return (
                                                    <tr key={t.id} className={styles.tableTr}>
                                                        <td className={styles.tableTd}>
                                                            <div className={styles.tableTdName}>
                                                                <div
                                                                    className={`${styles.fileIconBox} ${s.class}`}
                                                                    style={{
                                                                        width: 32,
                                                                        height: 32,
                                                                    }}
                                                                >
                                                                    {s.label}
                                                                </div>
                                                                <span title={t.name}>{t.name}</span>
                                                            </div>
                                                        </td>
                                                        <td className={styles.tableTd}>
                                                            <span
                                                                style={{
                                                                    fontSize: 11,
                                                                    fontWeight: 700,
                                                                    padding: '2px 8px',
                                                                    borderRadius: 4,
                                                                    background: '#f1f5f9',
                                                                    color: '#0d3b66',
                                                                }}
                                                            >
                                                                {t.company}
                                                            </span>
                                                        </td>
                                                        <td className={styles.tableTd}>{t.extension.toUpperCase()}</td>
                                                        <td className={styles.tableTd}>{formatSize(t.size)}</td>
                                                        <td className={styles.tableTd}>{formatDate(t.modified)}</td>
                                                        <td
                                                            className={styles.tableTd}
                                                            style={{
                                                                textAlign: 'right',
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: 'inline-flex',
                                                                    alignItems: 'center',
                                                                    gap: 8,
                                                                    justifyContent: 'flex-end',
                                                                }}
                                                            >
                                                                <a
                                                                    href={withToken(t.downloadUrl)}
                                                                    className={styles.actionBtnPrimary}
                                                                    style={{
                                                                        textDecoration: 'none',
                                                                        display: 'inline-flex',
                                                                        padding: '6px 14px',
                                                                        borderRadius: 6,
                                                                        fontSize: 12,
                                                                    }}
                                                                    download={t.name}
                                                                >
                                                                    Download
                                                                </a>
                                                                {session?.role === 'staff' && (
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => openRename(t)}
                                                                        className={styles.renameBtn}
                                                                        style={{
                                                                            padding: '6px 10px',
                                                                            fontSize: 12,
                                                                        }}
                                                                        title="Rename file"
                                                                    >
                                                                        <svg
                                                                            width="13"
                                                                            height="13"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            viewBox="0 0 24 24"
                                                                        >
                                                                            <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth={2}
                                                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                            />
                                                                        </svg>
                                                                        <span>Rename</span>
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.loginContainer}>
                        <div className={styles.loginCard}>
                            <div className={styles.loginIconBox}>
                                <svg className={styles.loginIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </div>
                            <h2 className={styles.loginTitle}>KR Drive Access</h2>
                            <p className={styles.loginSubtitle}>
                                Sign in with your corporate credentials to access authorized technical folders for your company.
                            </p>
                            {loginError && <div className={styles.errorBox}>{loginError}</div>}
                            <form onSubmit={handleLogin} className={styles.loginForm}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="drive-username" className={styles.label}>
                                        Username or Identifier
                                    </label>
                                    <input
                                        id="drive-username"
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                        placeholder="e.g.: cemig, energisa or funcionario"
                                        className={styles.input}
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="drive-password" className={styles.label}>
                                        Password
                                    </label>
                                    <input
                                        id="drive-password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        placeholder="••••••••••••"
                                        className={styles.input}
                                    />
                                </div>
                                <button type="submit" disabled={isLoggingIn} className={styles.loginBtn}>
                                    {isLoggingIn ? (
                                        <>
                                            <div className={styles.spinner} />
                                            <span>AUTHENTICATING...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>ACCESS FILES</span>
                                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                />
                                            </svg>
                                        </>
                                    )}
                                </button>
                                <div
                                    style={{
                                        textAlign: 'center',
                                        marginTop: 14,
                                    }}
                                >
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setCpUsername(username || '');
                                            setCpCurrentPassword('');
                                            setCpNewPassword('');
                                            setCpConfirmPassword('');
                                            setCpError('');
                                            setCpSuccess('');
                                            setShowChangePassword(true);
                                        }}
                                        className={styles.changePasswordLink}
                                    >
                                        <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                                            />
                                        </svg>
                                        <span>Want to change your password? Click here</span>
                                    </button>
                                </div>
                            </form>
                            <div
                                style={{
                                    marginTop: 24,
                                    textAlign: 'center',
                                    fontSize: 13,
                                    color: '#64748b',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 8,
                                }}
                            >
                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                                <span>Encrypted environment with server-side authentication and tenant isolation.</span>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            {showUploadModal && (
                <div className={styles.modalOverlay} onClick={() => setShowUploadModal(false)}>
                    <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
                        <button type="button" className={styles.modalClose} onClick={() => setShowUploadModal(false)}>
                            ✕
                        </button>
                        <h3 className={styles.modalTitle}>Upload Technical Document</h3>
                        <p
                            style={{
                                fontSize: 13,
                                color: '#64748b',
                                marginTop: -8,
                            }}
                        >
                            {'Destination Folder: '}
                            <strong>{currentFolder ? currentFolder.name : 'Select a folder'}</strong>
                        </p>
                        {modalError && <div className={styles.errorBox}>{modalError}</div>}
                        <form
                            onSubmit={handleUpload}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 16,
                            }}
                        >
                            <input
                                type="file"
                                required
                                onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
                                className={styles.input}
                            />
                            <button
                                type="submit"
                                disabled={isUploading || !uploadFile}
                                className={styles.actionBtnPrimary}
                                style={{
                                    padding: '12px 20px',
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    display: 'flex',
                                }}
                            >
                                {isUploading ? 'Uploading document...' : 'Confirm Upload'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
            {showNewFolderModal && (
                <div className={styles.modalOverlay} onClick={() => setShowNewFolderModal(false)}>
                    <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
                        <button type="button" className={styles.modalClose} onClick={() => setShowNewFolderModal(false)}>
                            ✕
                        </button>
                        <h3 className={styles.modalTitle}>Create New Folder</h3>
                        <p
                            style={{
                                fontSize: 13,
                                color: '#64748b',
                                marginTop: -8,
                            }}
                        >
                            {'Inside: '}
                            <strong>{currentFolder ? currentFolder.name : 'Root Folder'}</strong>
                        </p>
                        {modalError && <div className={styles.errorBox}>{modalError}</div>}
                        <form
                            onSubmit={(a) => {
                                a.preventDefault();
                                if (!newFolderName.trim() || !session || session.role !== 'staff') {
                                    return;
                                }
                                setIsUploading(true);
                                let t = folders.find((e) => e.id === currentFolderId),
                                    l = newFolderName.toLowerCase().replace(/[^a-z0-9]/g, '-'),
                                    n = {
                                        id: 'folder-' + Date.now(),
                                        slug: l,
                                        name: newFolderName.trim(),
                                        description: 'Custom folder created by KR staff',
                                        company: t ? t.company : 'General',
                                        parentId: currentFolderId,
                                    };
                                setFolders((e) => [...e, n]);
                                setShowNewFolderModal(false);
                                setNewFolderName('');
                                setIsUploading(false);
                                recordDriveLog(
                                    {
                                        action: 'NOVA_PASTA',
                                        actor: session.name,
                                        company: t ? t.company : 'General',
                                        details: `Created folder "${newFolderName.trim()}" inside "${t ? t.name : 'Root Folder'}"`,
                                    },
                                    session.token,
                                ).then((e) => {
                                    setLogs((a) => [e, ...a]);
                                });
                            }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 16,
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Folder name (e.g. 04. Manuals & Schematics)"
                                value={newFolderName}
                                onChange={(e) => setNewFolderName(e.target.value)}
                                required
                                className={styles.input}
                            />
                            <button
                                type="submit"
                                disabled={isUploading || !newFolderName.trim()}
                                className={styles.actionBtnPrimary}
                                style={{
                                    padding: '12px 20px',
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    display: 'flex',
                                }}
                            >
                                {isUploading ? 'Creating folder...' : 'Create Folder'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
            {showRenameModal && renameTarget && session?.role === 'staff' && (
                <div className={styles.modalOverlay} onClick={() => !isRenaming && setShowRenameModal(false)}>
                    <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
                        <button type="button" className={styles.modalClose} onClick={() => !isRenaming && setShowRenameModal(false)}>
                            ✕
                        </button>
                        <h3 className={styles.modalTitle}>Rename File</h3>
                        <p
                            style={{
                                fontSize: 13,
                                color: '#64748b',
                                marginTop: -8,
                            }}
                        >
                            {'Current file: '}
                            <strong>{renameTarget.name}</strong>
                        </p>
                        {renameError && <div className={styles.errorBox}>{renameError}</div>}
                        <form
                            onSubmit={handleRename}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 16,
                            }}
                        >
                            <div>
                                <label
                                    style={{
                                        display: 'block',
                                        fontSize: 13,
                                        fontWeight: 700,
                                        color: '#334155',
                                        marginBottom: 6,
                                    }}
                                >
                                    New file name:
                                </label>
                                <input
                                    type="text"
                                    value={renameValue}
                                    onChange={(e) => setRenameValue(e.target.value)}
                                    required
                                    className={styles.input}
                                    autoFocus
                                />
                                <span
                                    style={{
                                        display: 'block',
                                        fontSize: 11,
                                        color: '#64748b',
                                        marginTop: 4,
                                    }}
                                >
                                    Tip: If you omit the file extension, the original extension is preserved automatically.
                                </span>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    gap: 10,
                                    justifyContent: 'flex-end',
                                    marginTop: 8,
                                }}
                            >
                                <button
                                    type="button"
                                    onClick={() => setShowRenameModal(false)}
                                    disabled={isRenaming}
                                    className={styles.actionBtnSecondary}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isRenaming || !renameValue.trim()}
                                    className={styles.actionBtnPrimary}
                                    style={{
                                        padding: '10px 18px',
                                        borderRadius: 8,
                                    }}
                                >
                                    {isRenaming ? 'Saving...' : 'Save Changes'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {showLogsModal && session?.role === 'staff' && (
                <div className={styles.modalOverlay} onClick={() => setShowLogsModal(false)}>
                    <div className={styles.modalCardWide} onClick={(e) => e.stopPropagation()}>
                        <button type="button" className={styles.modalClose} onClick={() => setShowLogsModal(false)}>
                            ✕
                        </button>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12,
                            }}
                        >
                            <div
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 10,
                                    background: '#fef3c7',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#b8834c',
                                }}
                            >
                                <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3
                                    className={styles.modalTitle}
                                    style={{
                                        margin: 0,
                                    }}
                                >
                                    Modification & Audit History
                                </h3>
                                <p
                                    style={{
                                        fontSize: 13,
                                        color: '#64748b',
                                        margin: 0,
                                    }}
                                >
                                    Restricted to KR Staff. Full traceability of uploads, folder management, and operations.
                                </p>
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                gap: 12,
                                flexWrap: 'wrap',
                                marginTop: 8,
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Filter by name, user or details..."
                                value={logSearch}
                                onChange={(e) => setLogSearch(e.target.value)}
                                className={styles.input}
                                style={{
                                    flex: 1,
                                    minWidth: 220,
                                }}
                            />
                            <select
                                value={logActionFilter}
                                onChange={(e) => setLogActionFilter(e.target.value)}
                                className={styles.input}
                                style={{
                                    width: 'auto',
                                    minWidth: 160,
                                }}
                            >
                                <option value="ALL">All Actions</option>
                                <option value="UPLOAD">Uploads only</option>
                                <option value="RENOMEAR">Rename Files</option>
                                <option value="LIXEIRA_ENVIAR">Move to Trash</option>
                                <option value="LIXEIRA_RESTAURAR">Restore from Trash</option>
                                <option value="EXCLUSAO_DEFINITIVA">Permanent Deletions</option>
                                <option value="LIXEIRA_ESVAZIAR">Empty Trash</option>
                                <option value="EXCLUSAO">Old File Deletions</option>
                                <option value="EXCLUSAO_PASTA">Folder Deletions</option>
                                <option value="NOVA_PASTA">New Folders</option>
                                <option value="DOWNLOAD">Downloads</option>
                                <option value="LOGIN">Logins / Access</option>
                            </select>
                            <button
                                type="button"
                                onClick={() => {
                                    setLogsLoading(true);
                                    fetchDriveLogs(session?.token).then((e) => {
                                        setLogs(e);
                                        setLogsLoading(false);
                                    });
                                }}
                                className={styles.actionBtnSecondary}
                                title="Refresh audit log"
                            >
                                🔄 Refresh
                            </button>
                        </div>
                        <div className={styles.logModalBody}>
                            {logsLoading ? (
                                <div
                                    style={{
                                        textAlign: 'center',
                                        padding: '40px 0',
                                        color: '#64748b',
                                    }}
                                >
                                    Loading audit history from secure server...
                                </div>
                            ) : logs.length === 0 ? (
                                <div
                                    style={{
                                        textAlign: 'center',
                                        padding: '40px 0',
                                        color: '#64748b',
                                    }}
                                >
                                    No modification logs found.
                                </div>
                            ) : (
                                <table className={styles.logTable}>
                                    <thead>
                                        <tr>
                                            <th className={styles.logTableTh}>Date & Time</th>
                                            <th className={styles.logTableTh}>Action</th>
                                            <th className={styles.logTableTh}>User / Author</th>
                                            <th className={styles.logTableTh}>Company</th>
                                            <th className={styles.logTableTh}>Operation Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {logs
                                            .filter((e) => {
                                                if (logActionFilter !== 'ALL' && e.action !== logActionFilter) {
                                                    return false;
                                                }
                                                if (!logSearch.trim()) {
                                                    return true;
                                                }
                                                let a = logSearch.toLowerCase();
                                                return (
                                                    e.details.toLowerCase().includes(a) ||
                                                    e.actor.toLowerCase().includes(a) ||
                                                    e.company.toLowerCase().includes(a)
                                                );
                                            })
                                            .map((e) => {
                                                let t = styles.badgeLogSystem;
                                                if (e.action === 'UPLOAD') {
                                                    t = styles.badgeLogUpload;
                                                } else {
                                                    if (e.action === 'RENOMEAR') {
                                                        t = styles.badgeLogRename;
                                                    } else {
                                                        if (
                                                            e.action === 'EXCLUSAO' ||
                                                            e.action === 'EXCLUSAO_PASTA' ||
                                                            e.action === 'EXCLUSAO_DEFINITIVA'
                                                        ) {
                                                            t = styles.badgeLogDelete;
                                                        } else {
                                                            if (
                                                                e.action === 'LIXEIRA_ENVIAR' ||
                                                                e.action === 'LIXEIRA_RESTAURAR' ||
                                                                e.action === 'LIXEIRA_ESVAZIAR'
                                                            ) {
                                                                t = styles.badgeRetention;
                                                            } else {
                                                                if (e.action === 'NOVA_PASTA') {
                                                                    t = styles.badgeLogFolder;
                                                                } else {
                                                                    if (e.action === 'DOWNLOAD') {
                                                                        t = styles.badgeLogDownload;
                                                                    } else {
                                                                        if (e.action === 'LOGIN') {
                                                                            t = styles.badgeLogLogin;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                let s = new Date(e.timestamp).toLocaleString('en-US', {
                                                    month: 'short',
                                                    day: '2-digit',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                    second: '2-digit',
                                                });
                                                return (
                                                    <tr key={e.id} className={styles.logTableTr}>
                                                        <td
                                                            className={styles.logTableTd}
                                                            style={{
                                                                whiteSpace: 'nowrap',
                                                                fontSize: 12,
                                                                color: '#64748b',
                                                            }}
                                                        >
                                                            {s}
                                                        </td>
                                                        <td className={styles.logTableTd}>
                                                            <span className={`${styles.badgeLogAction} ${t}`}>{e.action}</span>
                                                        </td>
                                                        <td
                                                            className={styles.logTableTd}
                                                            style={{
                                                                fontWeight: 600,
                                                            }}
                                                        >
                                                            {e.actor}
                                                        </td>
                                                        <td className={styles.logTableTd}>
                                                            <span
                                                                style={{
                                                                    fontSize: 11,
                                                                    fontWeight: 700,
                                                                    padding: '2px 6px',
                                                                    background: '#f1f5f9',
                                                                    borderRadius: 4,
                                                                }}
                                                            >
                                                                {e.company}
                                                            </span>
                                                        </td>
                                                        <td
                                                            className={styles.logTableTd}
                                                            style={{
                                                                fontSize: 12,
                                                                color: '#334155',
                                                            }}
                                                        >
                                                            {e.details}
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {showChangePassword && (
                <div className={styles.modalOverlay} onClick={() => setShowChangePassword(false)}>
                    <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
                        <button type="button" className={styles.modalClose} onClick={() => setShowChangePassword(false)} title="Close">
                            ✕
                        </button>
                        <h3 className={styles.modalTitle}>Change Access Password</h3>
                        <p
                            style={{
                                fontSize: 13,
                                color: '#64748b',
                                marginTop: -8,
                            }}
                        >
                            Update your corporate account credentials securely.
                        </p>
                        {cpError && <div className={styles.errorBox}>{cpError}</div>}
                        {cpSuccess && (
                            <div className={styles.successBox}>
                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{cpSuccess}</span>
                            </div>
                        )}
                        <form
                            onSubmit={handleChangePassword}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 14,
                            }}
                        >
                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel}>Username</label>
                                <input
                                    type="text"
                                    placeholder="e.g. comercial, eng, client..."
                                    value={cpUsername}
                                    onChange={(e) => setCpUsername(e.target.value)}
                                    required
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel}>Current Password</label>
                                <input
                                    type="password"
                                    placeholder="Your current password"
                                    value={cpCurrentPassword}
                                    onChange={(e) => setCpCurrentPassword(e.target.value)}
                                    required
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel}>New Password (min. 6 characters)</label>
                                <input
                                    type="password"
                                    placeholder="New secure password"
                                    value={cpNewPassword}
                                    onChange={(e) => setCpNewPassword(e.target.value)}
                                    required
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel}>Confirm New Password</label>
                                <input
                                    type="password"
                                    placeholder="Repeat new password"
                                    value={cpConfirmPassword}
                                    onChange={(e) => setCpConfirmPassword(e.target.value)}
                                    required
                                    className={styles.input}
                                />
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    gap: 10,
                                    marginTop: 6,
                                }}
                            >
                                <button
                                    type="button"
                                    onClick={() => setShowChangePassword(false)}
                                    className={styles.cancelBtn}
                                    style={{
                                        flex: 1,
                                        padding: '12px 16px',
                                        borderRadius: 10,
                                        border: '1px solid #cbd5e1',
                                        background: 'white',
                                        color: '#475569',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                    }}
                                >
                                    {cpSuccess ? 'Close' : 'Cancel'}
                                </button>
                                <button
                                    type="submit"
                                    disabled={isChangingPassword}
                                    className={styles.actionBtnPrimary}
                                    style={{
                                        flex: 1.5,
                                        padding: '12px 20px',
                                        borderRadius: 10,
                                        justifyContent: 'center',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 8,
                                    }}
                                >
                                    {isChangingPassword ? (
                                        <>
                                            <div
                                                className={styles.spinner}
                                                style={{
                                                    width: 16,
                                                    height: 16,
                                                    borderTopColor: 'white',
                                                }}
                                            />
                                            <span>Saving...</span>
                                        </>
                                    ) : (
                                        'Save New Password'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}
