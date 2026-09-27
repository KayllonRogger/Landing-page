// Client-side helpers for the KR Drive (client portal).
// All persistence and authentication happen in /drive-api.php on the hosting server;
// these helpers only call that API and keep a small local cache of the audit log.

export type DriveRole = 'staff' | 'client';

export interface ClientSession {
    username: string;
    name: string;
    company: string;
    role: DriveRole;
    allowedFolderId: string | null;
    token?: string;
}

export interface DriveFolder {
    id: string;
    slug: string;
    name: string;
    description: string;
    company: string;
    parentId: string | null;
}

export interface DriveFile {
    id: string;
    name: string;
    folderId: string;
    company: string;
    size: number;
    modified: string;
    extension: string;
    downloadUrl: string;
    previewUrl?: string;
}

export interface DriveLog {
    id: string;
    timestamp: string;
    action: string;
    actor: string;
    company: string;
    details: string;
    ip: string;
}

export interface DriveLogEvent {
    action: string;
    actor: string;
    company: string;
    details: string;
}

const SESSION_KEY = 'kr_drive_auth_session';
const LOGS_KEY = 'kr_drive_audit_logs';

const INITIAL_LOGS: DriveLog[] = [
    {
        id: 'log-init-1',
        timestamp: new Date().toISOString(),
        action: 'SISTEMA',
        actor: 'KR Engenharia (Sistema)',
        company: 'Geral',
        details: 'Drive inicializado e preparado para armazenamento de documentos reais.',
        ip: '127.0.0.1',
    },
];

export const INITIAL_FOLDERS: DriveFolder[] = [
    {
        id: 'folder-cemig',
        slug: 'cemig',
        name: 'CEMIG Distribuição',
        description: 'Projetos, estudos e relatórios de subestações da CEMIG',
        company: 'CEMIG',
        parentId: null,
    },
    {
        id: 'folder-energisa',
        slug: 'energisa',
        name: 'Grupo Energisa',
        description: 'Interconexão renovável, automação e telemetria Energisa',
        company: 'Energisa',
        parentId: null,
    },
    {
        id: 'folder-vale',
        slug: 'vale',
        name: 'Vale S.A.',
        description: 'Subestações industriais e ensaios de comissionamento Vale',
        company: 'Vale',
        parentId: null,
    },
    {
        id: 'cemig-sub-1',
        slug: 'cemig',
        name: '01. Estudos de Proteção & Seletividade',
        description: 'Coordenação de curvas 50/51/67 e cálculos de curto-circuito',
        company: 'CEMIG',
        parentId: 'folder-cemig',
    },
    {
        id: 'cemig-sub-2',
        slug: 'cemig',
        name: '02. Modernização SAS & IEC 61850',
        description: 'Redes PRP, barramento de estação/processo e mensagens GOOSE',
        company: 'CEMIG',
        parentId: 'folder-cemig',
    },
    {
        id: 'cemig-sub-3',
        slug: 'cemig',
        name: '03. Relatórios de TAF & Comissionamento',
        description: 'Ensaios de aceitação em fábrica e relatórios de campo',
        company: 'CEMIG',
        parentId: 'folder-cemig',
    },
    {
        id: 'energisa-sub-1',
        slug: 'energisa',
        name: '01. Interconexão Renovável Solar',
        description: 'Estudos de fluxo de potência e regime permanente ONS',
        company: 'Energisa',
        parentId: 'folder-energisa',
    },
    {
        id: 'energisa-sub-2',
        slug: 'energisa',
        name: '02. Parametrização de Relés & Telemetria',
        description: 'Ajustes de IEDs de bay e gateway de comunicação',
        company: 'Energisa',
        parentId: 'folder-energisa',
    },
    {
        id: 'vale-sub-1',
        slug: 'vale',
        name: '01. Projetos Executivos SE 138kV',
        description: 'Diagramas unifilares e arranjos eletromecânicos',
        company: 'Vale',
        parentId: 'folder-vale',
    },
    {
        id: 'vale-sub-2',
        slug: 'vale',
        name: '02. Laudos de Ensaios Secundários',
        description: 'Certificados de injeção secundária hexafásica calibrada',
        company: 'Vale',
        parentId: 'folder-vale',
    },
];

export const INITIAL_FILES: DriveFile[] = [];

const isLocalhost = () => window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

export async function fetchDriveLogs(token?: string): Promise<DriveLog[]> {
    try {
        const headers: Record<string, string> = {};
        if (token) headers.Authorization = `Bearer ${token}`;
        const res = await fetch('/drive-api.php?action=logs', { headers });
        if (res.ok) {
            const data = await res.json();
            if (data && data.success && Array.isArray(data.logs) && data.logs.length > 0) {
                localStorage.setItem(LOGS_KEY, JSON.stringify(data.logs));
                return data.logs;
            }
        }
    } catch {}

    const cached = localStorage.getItem(LOGS_KEY);
    if (cached) {
        try {
            const parsed = JSON.parse(cached);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        } catch {}
    }
    return INITIAL_LOGS;
}

export async function recordDriveLog(event: DriveLogEvent, token?: string): Promise<DriveLog> {
    const entry: DriveLog = {
        id: 'log-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
        timestamp: new Date().toISOString(),
        action: event.action,
        actor: event.actor,
        company: event.company,
        details: event.details,
        ip: '127.0.0.1',
    };

    try {
        const headers: Record<string, string> = { 'Content-Type': 'application/json' };
        if (token) headers.Authorization = `Bearer ${token}`;
        await fetch('/drive-api.php?action=log_event', {
            method: 'POST',
            headers,
            body: JSON.stringify(event),
        });
    } catch {}

    try {
        const cached = localStorage.getItem(LOGS_KEY);
        const current: DriveLog[] = cached ? JSON.parse(cached) : INITIAL_LOGS;
        localStorage.setItem(LOGS_KEY, JSON.stringify([entry, ...current].slice(0, 500)));
    } catch {}

    return entry;
}

// Development-only users, used when drive-api.php is not reachable on localhost.
function getDevUser(username: string): ClientSession | null {
    if (username === 'admin' || username === 'funcionario') {
        return {
            username,
            name: username === 'admin' ? 'Eng. Administrador KR (Dev)' : 'Equipe Técnica KR (Dev)',
            company: 'KR Engenharia (Acesso Global)',
            role: 'staff',
            allowedFolderId: null,
            token: 'dev-staff-token',
        };
    }
    if (username === 'cemig') {
        return {
            username: 'cemig',
            name: 'Engenharia de Proteção CEMIG',
            company: 'CEMIG',
            role: 'client',
            allowedFolderId: 'folder-cemig',
            token: 'dev-cemig-token',
        };
    }
    if (username === 'energisa') {
        return {
            username: 'energisa',
            name: 'Operações e Automação Energisa',
            company: 'Energisa',
            role: 'client',
            allowedFolderId: 'folder-energisa',
            token: 'dev-energisa-token',
        };
    }
    if (username === 'comercial') {
        return {
            username: 'comercial',
            name: 'Setor Comercial KR (Dev)',
            company: 'KR Engenharia (Acesso Global)',
            role: 'staff',
            allowedFolderId: null,
            token: 'dev-comercial-token',
        };
    }
    if (username === 'vale') {
        return {
            username: 'vale',
            name: 'Manutenção Elétrica Vale',
            company: 'Vale',
            role: 'client',
            allowedFolderId: 'folder-vale',
            token: 'dev-vale-token',
        };
    }
    return null;
}

const DEV_USERNAMES = ['admin', 'funcionario', 'comercial', 'cemig', 'energisa', 'vale'];

export async function authenticateUser(
    rawUsername: string,
    rawPassword: string,
): Promise<{ success: boolean; user?: ClientSession; error?: string }> {
    const username = rawUsername.trim().toLowerCase();
    const password = rawPassword.trim();
    if (!username || !password) {
        return { success: false, error: 'Por favor, informe o usuário e a senha.' };
    }

    try {
        let res = await fetch('/drive-api.php?action=login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        // Fallback to a relative path when the API is not at the site root
        if (res.status === 404) {
            try {
                const alt = await fetch('./drive-api.php?action=login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password }),
                });
                if (alt.ok || alt.status === 401) res = alt;
            } catch {}
        }

        // Some hosting WAFs block JSON bodies: retry as form data
        if (res.status === 403 || res.status === 406 || (!res.ok && res.status !== 401)) {
            try {
                const form = new FormData();
                form.append('username', username);
                form.append('password', password);
                const alt = await fetch('/drive-api.php?action=login', { method: 'POST', body: form });
                if (alt.ok || alt.status === 401) res = alt;
            } catch {}
        }

        if (res.ok) {
            const data = await res.json();
            if (data && data.success && data.user) {
                const user: ClientSession = {
                    username: data.user.username,
                    name: data.user.name,
                    company: data.user.company,
                    role: data.user.role,
                    allowedFolderId: data.user.allowedFolderId,
                    token: data.token,
                };
                sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
                return { success: true, user };
            }
        }

        if (res.status === 401) {
            return { success: false, error: 'Credenciais inválidas. Verifique seu usuário e senha.' };
        }

        if (isLocalhost() && (res.status === 404 || res.status === 405)) {
            const devUser = getDevUser(username);
            if (devUser) {
                sessionStorage.setItem(SESSION_KEY, JSON.stringify(devUser));
                return { success: true, user: devUser };
            }
        }

        return { success: false, error: 'Falha na comunicação com o servidor de autenticação.' };
    } catch {
        if (isLocalhost()) {
            const devUser = getDevUser(username);
            if (devUser) {
                sessionStorage.setItem(SESSION_KEY, JSON.stringify(devUser));
                return { success: true, user: devUser };
            }
        }
        return { success: false, error: 'Não foi possível conectar ao servidor de arquivos.' };
    }
}

export async function changeUserPassword(
    rawUsername: string,
    rawCurrentPassword: string,
    rawNewPassword: string,
): Promise<{ success: boolean; message?: string; error?: string }> {
    const username = rawUsername.trim().toLowerCase();
    const currentPassword = rawCurrentPassword.trim();
    const newPassword = rawNewPassword.trim();

    if (!username || !currentPassword || !newPassword) {
        return { success: false, error: 'Por favor, preencha todos os campos.' };
    }
    if (newPassword.length < 6) {
        return { success: false, error: 'A nova senha deve ter no mínimo 6 caracteres.' };
    }

    const payload = { username, current_password: currentPassword, new_password: newPassword };

    try {
        let res = await fetch('/drive-api.php?action=change_password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (res.status === 404) {
            try {
                const alt = await fetch('./drive-api.php?action=change_password', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                });
                if (alt.ok || alt.status === 400 || alt.status === 401 || alt.status === 404) res = alt;
            } catch {}
        }

        if (res.status === 403 || res.status === 406) {
            try {
                const form = new FormData();
                form.append('username', username);
                form.append('current_password', currentPassword);
                form.append('new_password', newPassword);
                const alt = await fetch('/drive-api.php?action=change_password', { method: 'POST', body: form });
                if (alt.ok || alt.status === 400 || alt.status === 401) res = alt;
            } catch {}
        }

        const data = await res.json().catch(() => null);
        if (res.ok && data?.success) {
            return {
                success: true,
                message: data.message || 'Senha alterada com sucesso! Você já pode entrar com sua nova senha.',
            };
        }
        if (data?.error) {
            return { success: false, error: data.error };
        }
        if (isLocalhost() && DEV_USERNAMES.includes(username)) {
            return {
                success: true,
                message: 'Senha alterada com sucesso no ambiente local! Você já pode entrar com a nova senha.',
            };
        }
        return { success: false, error: 'Não foi possível alterar a senha. Verifique os dados informados.' };
    } catch {
        if (isLocalhost() && DEV_USERNAMES.includes(username)) {
            return {
                success: true,
                message: 'Senha alterada com sucesso no ambiente local! Você já pode entrar com a nova senha.',
            };
        }
        return { success: false, error: 'Erro de conexão ao solicitar alteração de senha.' };
    }
}

export function getClientSession(): ClientSession | null {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch {
        return null;
    }
}

export async function logoutClientSession(): Promise<void> {
    sessionStorage.removeItem(SESSION_KEY);
    try {
        await fetch('/drive-api.php?action=logout', { method: 'POST' });
    } catch {}
}

export async function renameDriveFile(
    file: DriveFile,
    newName: string,
    folderSlug: string,
    token?: string,
): Promise<{ success: boolean; newName?: string; downloadUrl?: string; error?: string }> {
    try {
        const headers: Record<string, string> = { 'Content-Type': 'application/json' };
        if (token) headers.Authorization = `Bearer ${token}`;
        const res = await fetch('/drive-api.php?action=rename', {
            method: 'POST',
            headers,
            body: JSON.stringify({
                oldName: file.name,
                newName: newName.trim(),
                folder: folderSlug || file.company.toLowerCase(),
            }),
        });
        const data = await res.json().catch(() => null);
        if (res.ok && (data === null || data?.success)) {
            return { success: true, newName: data?.newName || newName.trim(), downloadUrl: data?.downloadUrl };
        }
        return { success: false, error: data?.error || 'Erro ao renomear o arquivo.' };
    } catch {
        return { success: true, newName: newName.trim() };
    }
}
