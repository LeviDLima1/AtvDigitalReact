
import Slider from '../layaout/Slide'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <>
            <section>
                <div>
                    <Slider />

                    <div className="p-6 max-w-7xl mx-auto bg-white shadow-lg rounded-2xl">
                        <h1 className="text-2xl font-bold text-center mb-4">Resumo: React e Vite</h1>
                        <div className='flex flex-col sm:flex-row items-center justify-center gap-16'>

                            <section className="flex flex-col p-6 bg-zinc-200 rounded-3xl gap-3">
                                <h2 className="text-3xl font-bold">🚀 React</h2>
                                <p className='font-semibold text-justify'>React é uma biblioteca JavaScript para construção de interfaces de usuário, criada pelo Facebook. Ele permite criar aplicações web de forma declarativa e eficiente, usando um conceito chamado Componentes, que são blocos reutilizáveis de código.</p>
                                <ul className="list-disc list-inside mt-2">
                                    <li><strong>Biblioteca JavaScript</strong> para criar interfaces de usuário.</li>
                                    <li>Usa <strong>Componentes</strong> reutilizáveis.</li>
                                    <li><strong>Virtual DOM</strong> melhora a performance.</li>
                                    <li><strong>JSX</strong>: Sintaxe que mistura HTML com JS.</li>
                                    <li>Utiliza <strong>Hooks</strong> como <code>useState</code> e <code>useEffect</code>.</li>
                                </ul>
                                <div className='flex items-center justify-end'>
                                    <Link to={'/aboutreact'} className='bg-blue-500 p-3 rounded-xl cursor-pointer text-white font-semibold hover:bg-blue-400 '>Saber Mais</Link>
                                </div>
                            </section>

                            <section className='flex flex-col p-7 bg-zinc-200 rounded-3xl gap-3'>
                                <h2 className="text-3xl font-bold">⚡ Vite</h2>
                                <p className='font-semibold text-justify'>Vite é um build tool moderno para projetos front-end que substitui o Webpack em muitas aplicações. Ele foi criado para ser rápido e eficiente no desenvolvimento de apps com frameworks como React, Vue e Svelte.</p>
                                <ul className="list-disc list-inside mt-2">
                                    <li>Ferramenta de build <strong>rápida</strong> para projetos front-end.</li>
                                    <li>Usa <strong>ES Modules</strong> para carregamento instantâneo.</li>
                                    <li><strong>HMR</strong>: Atualiza sem recarregar a página inteira.</li>
                                    <li>Build eficiente com <strong>esbuild</strong>.</li>
                                    <li><strong>Configuração simples</strong>, melhor que Create React App.</li>
                                </ul>
                                <div className='flex items-center justify-end'>
                                    <Link to={'/aboutvite'} className='bg-blue-500 p-3 rounded-xl cursor-pointer text-white font-semibold hover:bg-blue-400 '>Saber Mais</Link>
                                </div>
                            </section>
                        </div>

                    </div>
                </div>

            </section>
        </>
    );
}