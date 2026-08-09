'use client';

export default function BlogPage() {
    return (
        <main className="bg-white min-h-screen">
            <section className="max-w-5xl mx-auto px-6 py-20">
                <div className="text-center mb-12">
                    <span className="inline-flex px-4 py-2 rounded-full bg-blue-900 text-white text-xs font-bold tracking-[0.18em] uppercase">
                        Blog
                    </span>
                    <h1 className="mt-6 text-4xl font-extrabold text-slate-900 sm:text-5xl">
                        Conteúdos e novidades sobre engenharia energética
                    </h1>
                    <p className="mt-6 text-lg text-slate-600 leading-8">
                        Em breve teremos posts sobre automação, proteção, energias renováveis e melhores práticas de projetos elétricos.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">A revolução das subestações digitais</h2>
                        <p className="text-slate-600 leading-7">Como a digitalização melhora a operação e a manutenção de subestações de energia.</p>
                    </article>
                    <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Integração de renováveis na rede</h2>
                        <p className="text-slate-600 leading-7">Estratégias para conectar solar e eólico com estabilidade e segurança operacional.</p>
                    </article>
                </div>
            </section>
        </main>
    );
}
