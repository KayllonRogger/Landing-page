'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function ContatoPage() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: 'Estudos de Proteção & Controle',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setIsSuccess(true);
            } else {
                setErrorMessage(data.error || 'Ocorreu um erro ao enviar sua mensagem.');
            }
        } catch (err) {
            console.error('Erro de submissão:', err);
            // Fallback: direct mailto trigger if offline/network failure
            const mailtoUrl = `mailto:contato@krconsultoria.com?subject=${encodeURIComponent(
                `[Orçamento] ${formData.service} - ${formData.name}`
            )}&body=${encodeURIComponent(
                `Nome: ${formData.name}\nEmpresa: ${formData.company}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\nServiço: ${formData.service}\n\nMensagem:\n${formData.message}`
            )}`;
            window.location.href = mailtoUrl;
            setIsSuccess(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            service: 'Estudos de Proteção & Controle',
            message: '',
        });
        setIsSuccess(false);
        setErrorMessage('');
    };

    return (
        <main className={styles.page}>
            {/* Hero Banner */}
            <section className={styles.heroBanner}>
                <div className={styles.bannerPattern}></div>
                <div className={styles.bannerContainer}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>ORÇAMENTO & ATENDIMENTO</span>
                    </div>
                    <h1 className={styles.bannerTitle}>
                        Solicite um Orçamento ou Fale com um Especialista
                    </h1>
                    <p className={styles.bannerDescription}>
                        Conte com nossa equipe de engenharia para dimensionar e executar soluções de proteção, automação de subestações e sistemas de energia.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.section}>
                <div className={styles.gridContainer}>
                    {/* Left Column: Direct Info */}
                    <div className={styles.infoColumn}>
                        <div className={styles.infoCard}>
                            <h2 className={styles.infoCardTitle}>Canais de Atendimento Direto</h2>
                            <p className={styles.infoCardSubtitle}>
                                Se preferir, fale diretamente com nossa equipe técnica através dos nossos canais corporativos:
                            </p>

                            <div className={styles.contactList}>
                                {/* Email */}
                                <div className={styles.contactItem}>
                                    <div className={styles.contactIconBox}>
                                        <svg className={styles.contactIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className={styles.contactDetails}>
                                        <span className={styles.contactLabel}>E-mail Oficial</span>
                                        <a href="mailto:contato@krconsultoria.com" className={styles.contactValue}>
                                            contato@krconsultoria.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone / WhatsApp */}
                                <div className={styles.contactItem}>
                                    <div className={styles.contactIconBox}>
                                        <svg className={styles.contactIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className={styles.contactDetails}>
                                        <span className={styles.contactLabel}>Telefone / WhatsApp</span>
                                        <a href="tel:+5531995666963" className={styles.contactValue}>
                                            +55 (31) 99566-6963
                                        </a>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className={styles.contactItem}>
                                    <div className={styles.contactIconBox}>
                                        <svg className={styles.contactIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className={styles.contactDetails}>
                                        <span className={styles.contactLabel}>Endereço Comercial</span>
                                        <span className={styles.contactText}>
                                            Rua Rio Grande do Norte, 1436, sala 813, Funcionários<br />
                                            Belo Horizonte - MG, Brasil
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Guarantee / Response SLA */}
                        <div className={styles.guaranteeBox}>
                            <div className={styles.guaranteeIconWrapper}>
                                <svg className={styles.contactIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className={styles.guaranteeTitle}>Retorno Rápido Garantido</h3>
                                <p className={styles.guaranteeDesc}>
                                    Nossa equipe técnica analisa sua solicitação e responde em até 24 horas úteis.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Form */}
                    <div className={styles.formCard}>
                        {!isSuccess ? (
                            <>
                                <h2 className={styles.formHeading}>Envie sua Mensagem</h2>
                                <p className={styles.formSubheading}>
                                    Preencha os campos abaixo com os detalhes da sua demanda para gerarmos uma proposta técnica.
                                </p>

                                {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}

                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.formRow}>
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="name" className={styles.label}>
                                                Nome Completo <span className={styles.required}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Ex: Engenheiro Carlos Silva"
                                                className={styles.input}
                                            />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label htmlFor="company" className={styles.label}>
                                                Empresa / Empreendimento
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Ex: Companhia Energética do Sul"
                                                className={styles.input}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="email" className={styles.label}>
                                                E-mail Corporativo <span className={styles.required}>*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="carlos@empresa.com.br"
                                                className={styles.input}
                                            />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label htmlFor="phone" className={styles.label}>
                                                Telefone / WhatsApp <span className={styles.required}>*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                placeholder="(31) 99999-9999"
                                                className={styles.input}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label htmlFor="service" className={styles.label}>
                                            Serviço de Interesse
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className={styles.select}
                                        >
                                            <option value="Estudos de Proteção & Controle">Estudos de Proteção & Controle</option>
                                            <option value="Engenharia de Redes & SAS (IEC 61850)">Engenharia de Redes & SAS (IEC 61850)</option>
                                            <option value="Automação e SCADA Industrial">Automação e SCADA Industrial</option>
                                            <option value="Comissionamento & Ensaios em Campo">Comissionamento & Ensaios em Campo</option>
                                            <option value="Integração de Renováveis (Solar / Eólica)">Integração de Renováveis (Solar / Eólica)</option>
                                            <option value="Consultoria Técnica Geral">Consultoria Técnica Geral</option>
                                        </select>
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label htmlFor="message" className={styles.label}>
                                            Descrição do Projeto ou Demanda <span className={styles.required}>*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            placeholder="Conte-nos brevemente sobre a subestação, nível de tensão, prazos ou escopo desejado..."
                                            className={styles.textarea}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={styles.submitBtn}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className={styles.spinner}></div>
                                                <span>ENVIANDO SOLICITAÇÃO...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>ENVIAR SOLICITAÇÃO DE ORÇAMENTO</span>
                                                <svg className={styles.btnArrow} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className={styles.successCard}>
                                <div className={styles.successIconBox}>
                                    <svg className={styles.successIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className={styles.successTitle}>Solicitação Enviada com Sucesso!</h3>
                                <p className={styles.successText}>
                                    Recebemos sua mensagem em <strong>contato@krconsultoria.com</strong>. Nossos engenheiros especialistas entrarão em contato em breve através do e-mail ou telefone informado.
                                </p>
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className={styles.resetBtn}
                                >
                                    Enviar Outra Mensagem
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}

