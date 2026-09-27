import Link from 'next/link';

export default function NotFound() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh',
                textAlign: 'center',
                padding: '2rem',
                backgroundColor: '#f9f9f9',
                color: '#333',
            }}
        >
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#003366' }}>
                404 - Página Não Encontrada
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '600px', color: '#666' }}>
                Ops! A página que você está procurando não existe ou foi movida.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link
                    href="/"
                    style={{
                        padding: '0.75rem 1.5rem',
                        backgroundColor: '#003366',
                        color: 'white',
                        borderRadius: '4px',
                        fontWeight: 500,
                        transition: 'background-color 0.2s',
                    }}
                >
                    Voltar ao Início
                </Link>
                <Link
                    href="/#services"
                    style={{
                        padding: '0.75rem 1.5rem',
                        backgroundColor: 'transparent',
                        color: '#003366',
                        border: '1px solid #003366',
                        borderRadius: '4px',
                        fontWeight: 500,
                        transition: 'background-color 0.2s',
                    }}
                >
                    Nossos Serviços
                </Link>
            </div>
        </div>
    );
}
