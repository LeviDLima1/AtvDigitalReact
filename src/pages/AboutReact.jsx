import Breadcrumbs from '../layaout/BreadCrumbs';
import Componentes from '../assets/Carbon/Componentes.png';
import Effect from '../assets/Carbon/Effect.png';
import Estado from '../assets/Carbon/Estado.png';
import Sintaxe from '../assets/Carbon/Sintaxe.png';

export default function AboutReact() {



    return (
        <>
            <Breadcrumbs />
            <div className="w-full mx-auto sm:p-6 flex flex-col gap-4 text-zinc-100 items-center" >
                <h1 className="text-3xl font-bold text-cyan-600 mb-4 text-center">O que é React?</h1>
                <p className="mb-4 text-lg">
                    React é uma biblioteca JavaScript para construir interfaces de usuário interativas e reutilizáveis.
                    Ele permite criar <strong>Single Page Applications (SPA)</strong> de forma eficiente.
                </p>
                <div className='max-w-3xl grid grid-cols-1 gap-10'>
                    <section className="">
                        <h2 className="text-2xl font-semibold text-cyan-600">📌 Componentes</h2>
                        <p className="mb-2">
                            No React, a interface é dividida em <strong>componentes reutilizáveis</strong>, como botões, cards e menus.
                        </p>
                        <div className="">
                            <img src={Componentes} alt="" className='rounded-xl' />
                        </div>
                    </section>

                    {/* Seção de JSX */}
                    <section className="">
                        <h2 className="text-2xl font-semibold text-cyan-600">⚡ JSX</h2>
                        <p className="mb-2">
                            JSX é uma sintaxe que mistura <strong>HTML com JavaScript</strong>, tornando o código mais legível e intuitivo.
                        </p>
                        <div className="">
                            <img src={Sintaxe} alt="" className='rounded-xl' />
                        </div>
                    </section>

                    {/* Seção de Estado e Props */}
                    <section className="">
                        <h2 className="text-2xl font-semibold text-cyan-600">🔄 Estado e Props</h2>
                        <p className="mb-2">
                            O estado (`useState`) guarda informações que podem mudar ao longo do tempo.
                        </p>
                        <div className="p-4 rounded-md">
                            <img src={Estado} alt="" />
                        </div>
                    </section>

                    {/* Seção de useEffect */}
                    <section className="">
                        <h2 className="text-2xl font-semibold text-cyan-600">⚙️ useEffect</h2>
                        <p className="mb-2">
                            `useEffect` executa efeitos colaterais, como buscar dados de APIs.
                        </p>
                        <div className="">
                            <img src={Effect} alt="" className='rounded-xl' />
                        </div>

                    </section>


                </div>
                {/* Seção de Virtual DOM */}
                <div className='max-w-3xl flex flex-col sm:flex-row items-center justify-center gap-10'>
                    <section className="">
                        <h2 className="text-2xl font-semibold text-cyan-600">🏎 Virtual DOM</h2>
                        <p className="mb-2">
                            O Virtual DOM melhora a performance, atualizando apenas as partes necessárias da interface.
                        </p>
                    </section>

                    {/* Conclusão */}
                    <section className="">
                        <h2 className="text-2xl font-semibold text-cyan-600">🚀 Conclusão</h2>
                        <p>
                            React é uma ferramenta poderosa para criar interfaces modernas. Seu ecossistema inclui bibliotecas como **React Router, Redux e Next.js**.
                        </p>
                    </section>
                </div>

                {/* Seção de Componentes */}

            </div>


        </>
    );
}