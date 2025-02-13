export default function Contact() {

    const event = document.getElementById('bnt');

    function Done() {
        event.addEventListener('click', function () {
            
            alert('Mensagem enviada com sucesso!' + name + email + message);
            // Realizar chamada de API para envio de dados
        });
    }

    


    return (
        <div className="h-screen">
            <div className="bg-zinc-200 py-10 rounded-xl sm:max-w-1/2 sm:mx-auto">
                <h1 className="text-center text-2xl sm:text-3xl font-bold">Quer entrar em contato conosco?</h1>
                <p className="text-center text-lg sm:text-xl border-b mb-10 pb-5">Nos envie uma mensagem.</p>

                <form action="" className="px-10 sm:w-1/2 mx-auto flex flex-col items-center justify-center gap-3">
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" className="bg-white rounded border px-2 py-1" required />
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email" className="bg-white rounded border px-2 py-1" required />
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="message">Mensagem:</label>
                        <textarea id="message" name="message" className="bg-white rounded border px-2 py-1" required></textarea>
                    </div>
                    <div>
                        <button id="bnt" type="submit" onClick={Done} className="bg-sky-500 px-3 py-1 rounded-lg border-r border-b focus:bg-sky-300 transition-all cursor-pointer hover:scale-110 hover:bg-sky-400">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}