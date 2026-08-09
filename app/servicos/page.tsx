'use client';

import Services from '../components/Services/Services';

export default function ServicosPage() {
    return (
        <main className="bg-white min-h-screen">
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="mb-12 max-w-3xl">
                    <span className="inline-flex px-4 py-2 rounded-full bg-blue-900 text-white text-xs font-bold tracking-[0.18em] uppercase">
                        Serviços
                    </span>
                    <h1 className="mt-6 text-4xl font-extrabold text-slate-900 sm:text-5xl">
                        Soluções de engenharia para subestações e sistemas de energia
                    </h1>
                    <p className="mt-6 text-lg text-slate-600 leading-8">
                        Nossos serviços combinam automação, proteção e integração para entregar projetos com segurança e eficiência.
                    </p>
                </div>

                <Services />
            </section>
        </main>
    );
}
