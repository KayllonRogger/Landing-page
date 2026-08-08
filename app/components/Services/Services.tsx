'use client';

import styles from './Services.module.css';

export default function Services() {
    const services = [
        {
            id: 1,
            icon: '🛡️',
            title: 'ESTUDOS DE PROTEÇÃO & CONTROLE',
            description: 'Análise completa e projetos de proteção para sistemas elétricos',
        },
        {
            id: 2,
            icon: '🔌',
            title: 'ENGENHARIA DE REDES & SAS',
            description: 'Soluções avançadas para sistemas de automação de subestações',
        },
        {
            id: 3,
            icon: '⚙️',
            title: 'AUTOMAÇÃO E SCADA',
            description: 'Implementação de sistemas SCADA e automação industrial integrada',
        },
    ];

    return (
        <section id="servicos" className={styles.services}>
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>NOSSOS SERVIÇOS</h2>
                    <div className={styles.divider}></div>
                </div>

                {/* Services Grid */}
                <div className={styles.grid}>
                    {services.map((service) => (
                        <div key={service.id} className={styles.serviceCard}>
                            <div className={styles.icon}>{service.icon}</div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDescription}>{service.description}</p>
                            <button className={styles.serviceLink}>
                                Saiba Mais →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
