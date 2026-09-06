'use client';

import { useState } from 'react';
import styles from '../../contato/page.module.css';

export default function ContactPageEn() {
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
                setErrorMessage(data.error || 'An error occurred while sending your message. Please try again.');
            }
        } catch (err) {
            console.error('Submission error:', err);
            const mailtoUrl = `mailto:contato@krconsultoria.com?subject=${encodeURIComponent(
                `[Proposal Request] ${formData.service} - ${formData.name}`
            )}&body=${encodeURIComponent(
                `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nProject Details:\n${formData.message}`
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
                        <span>TECHNICAL PROPOSAL & CONSULTING</span>
                    </div>
                    <h1 className={styles.bannerTitle}>
                        Request a Technical Proposal / Scope Analysis
                    </h1>
                    <p className={styles.bannerDescription}>
                        Count on our engineering team to assess your preliminary scope, dimension, and execute specialized protection, substation automation, and power systems solutions.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.section}>
                <div className={styles.gridContainer}>
                    {/* Left Column: Direct Info */}
                    <div className={styles.infoColumn}>
                        <div className={styles.infoCard}>
                            <h2 className={styles.infoCardTitle}>Direct Contact Channels</h2>
                            <p className={styles.infoCardSubtitle}>
                                Or contact our technical engineering team directly through our corporate channels:
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
                                        <span className={styles.contactLabel}>Official Email</span>
                                        <a href="mailto:contato@krconsultoria.com.br" className={styles.contactValue}>
                                            contato@krconsultoria.com.br
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
                                        <span className={styles.contactLabel}>Phone / WhatsApp</span>
                                        <a href="tel:+5531995666963" className={styles.contactValue}>
                                            +55 (31) 99566-6963
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className={styles.contactItem}>
                                    <div className={styles.contactIconBox}>
                                        <svg className={styles.contactIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className={styles.contactDetails}>
                                        <span className={styles.contactLabel}>Corporate Headquarters</span>
                                        <span className={styles.contactText}>
                                            Rua Rio Grande do Norte, 1436, sala 813, Funcionários<br />
                                            Belo Horizonte - MG, Brazil
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
                                <h3 className={styles.guaranteeTitle}>Fast Turnaround Guaranteed</h3>
                                <p className={styles.guaranteeDesc}>
                                    Our technical engineering team analyzes your request and responds within 24 business hours.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Form */}
                    <div className={styles.formCard}>
                        {!isSuccess ? (
                            <>
                                <h2 className={styles.formHeading}>Submit Your Preliminary Scope</h2>
                                <p className={styles.formSubheading}>
                                    Fill in the fields below with your project details to receive a personalized, no-commitment technical proposal.
                                </p>

                                {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}

                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.formRow}>
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="name" className={styles.label}>
                                                Full Name <span className={styles.required}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="e.g., Carlos Silva, Lead Engineer"
                                                className={styles.input}
                                            />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label htmlFor="company" className={styles.label}>
                                                Company / Project
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="e.g., Solar Power Grid Ltd."
                                                className={styles.input}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="email" className={styles.label}>
                                                Corporate Email <span className={styles.required}>*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="name@company.com"
                                                className={styles.input}
                                            />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label htmlFor="phone" className={styles.label}>
                                                Phone / WhatsApp <span className={styles.required}>*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                placeholder="+1 (555) 000-0000"
                                                className={styles.input}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label htmlFor="service" className={styles.label}>
                                            Service of Interest
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className={styles.select}
                                        >
                                            <option value="Estudos de Proteção & Controle">Protection & Control Studies (P&C)</option>
                                            <option value="Engenharia de Redes & SAS (IEC 61850)">Substation Automation (SAS IEC 61850)</option>
                                            <option value="Automação e SCADA Industrial">Industrial Automation & SCADA</option>
                                            <option value="Comissionamento & Ensaios em Campo">Commissioning & Field Testing</option>
                                            <option value="Integração de Renováveis (Solar / Eólica)">Renewable Integration (Solar / Wind)</option>
                                            <option value="Consultoria Técnica Geral">General Technical Consulting</option>
                                        </select>
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label htmlFor="message" className={styles.label}>
                                            Project Details / Scope Description <span className={styles.required}>*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            placeholder="Tell us briefly about the substation, voltage level, project schedule, or required scope..."
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
                                                <span>SENDING REQUEST...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>REQUEST TECHNICAL PROPOSAL / SCOPE ANALYSIS</span>
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
                                <h3 className={styles.successTitle}>Request Submitted Successfully!</h3>
                                <p className={styles.successText}>
                                    We have received your message at <strong>contato@krconsultoria.com</strong>. Our engineering specialists will contact you shortly via the email or phone provided.
                                </p>
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className={styles.resetBtn}
                                >
                                    Submit Another Message
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}

