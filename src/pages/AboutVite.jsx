import Breadcrumbs from '../layaout/BreadCrumbs';
import React from "react";

export default function AboutVite() {
    return (
        <div>
            <Breadcrumbs />

            <div className="max-w-4xl mx-auto p-6 text-gray-100">
                <h1 className="text-3xl font-bold text-purple-600 mb-4 text-center">O que é Vite? 🚀</h1>
                <p className="mb-4 text-justify">
                    Vite é uma **ferramenta de build moderna** para projetos frontend. Criado para ser **rápido e eficiente**, ele
                    melhora a experiência de desenvolvimento e reduz drasticamente o tempo de build comparado a ferramentas como Webpack.
                </p>

                {/* Seção de Inicialização */}
                <section className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-purple-500">🔥 Inicialização Instantânea</h2>
                    <p className="mb-2">O Vite usa **ES Modules**, permitindo que o navegador carregue os arquivos rapidamente.</p>
                    <div className="bg-gray-300 p-4 rounded-md">
                        <code className='text-gray-800'>{`npx create-vite@latest my-app --template react
cd my-app
npm install
npm run dev`}</code>
                    </div>
                </section>

                {/* Seção de HMR */}
                <section className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-purple-500">⚡ Hot Module Replacement (HMR) ultra rápido</h2>
                    <p className="mb-2">O Vite permite que você veja mudanças no código **sem recarregar a página inteira**.</p>
                    <div className="bg-gray-300 p-4 rounded-md">
                        <code className='text-gray-800'>{`function App() {
  return <h1>Olá, mundo! 🚀</h1>;
}

export default App;`}</code>
                    </div>
                </section>

                {/* Seção de Build */}
                <section className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-purple-500">📦 Build super otimizado</h2>
                    <p className="mb-2">Usando **esbuild**, o Vite compila código **muito mais rápido** que Webpack.</p>
                    <div className="bg-gray-300 p-4 rounded-md">
                        <code className='text-gray-800'>{`npm run build`}</code>
                    </div>
                </section>

                {/* Seção de Configuração */}
                <section className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-purple-500">🔧 Configuração simples e poderosa</h2>
                    <p className="mb-2">O Vite tem um arquivo de configuração minimalista, mas altamente personalizável.</p>
                    <div className="bg-gray-300 p-4 rounded-md">
                        <code className='text-gray-800'>{`import { defineConfig } from "vite";`}
                        </code>
                        <br />
                        <code className='text-gray-800'>
                            {` import react from "@vitejs/plugin-react";`}
                        </code>
                        <br />
                        <code className='text-gray-800'>
                            {`export default defineConfig({plugins: [react()],});`}
                        </code>
                    </div>
                </section>

                {/* Seção de Suporte a Frameworks */}
                <section className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-purple-500">🏗 Suporte para várias tecnologias</h2>
                    <p className="mb-2">Vite suporta frameworks como **React, Vue e Svelte**, além de projetos vanilla JS.</p>
                    <div className="bg-gray-300 p-4 rounded-md">
                        <code className='text-gray-800'>{`npx create-vite@latest my-vue-app --template vue`}</code>
                    </div>
                </section>

                {/* Comparação entre Vite e Webpack */}
                <section className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-purple-500">⚖️ Comparação: Vite vs Webpack</h2>
                    <div className="overflow-x-auto rounded-xl">
                        <table className="w-full text-left border bg-gray-200 text-gray-800">
                            <thead>
                                <tr className="bg-purple-200">
                                    <th className="px-4 py-2">Recurso</th>
                                    <th className="px-4 py-2">Vite ⚡</th>
                                    <th className="px-4 py-2">Webpack 🏗</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="px-4 py-2">Inicialização</td>
                                    <td className="px-4 py-2">Instantânea</td>
                                    <td className="px-4 py-2">Demorada</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="px-4 py-2">HMR</td>
                                    <td className="px-4 py-2">Muito rápido</td>
                                    <td className="px-4 py-2">Médio/lento</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="px-4 py-2">Build</td>
                                    <td className="px-4 py-2">Super otimizado</td>
                                    <td className="px-4 py-2">Mais pesado</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="px-4 py-2">Configuração</td>
                                    <td className="px-4 py-2">Simples</td>
                                    <td className="px-4 py-2">Complexa</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Suporte a frameworks</td>
                                    <td className="px-4 py-2">React, Vue, Svelte, etc.</td>
                                    <td className="px-4 py-2">React, Vue, Angular, etc.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Conclusão */}
                <section className="mb-8">
                    <h2 className="text-xl sm:text-2xl text-center font-semibold text-purple-500">🚀 Conclusão</h2>
                    <p className='text-justify'>
                        Vite é uma ferramenta poderosa para quem quer um ambiente de desenvolvimento **mais rápido e eficiente**.
                        Ele melhora a experiência do desenvolvedor e reduz drasticamente os tempos de build.
                    </p>
                </section>
            </div>
        </div>
    );
}