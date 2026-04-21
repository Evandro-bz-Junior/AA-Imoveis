import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className="w-full  flex items-center py-14 ">
            <div className="container flex   justify-center mx-auto px-4 gap-10">

                <div className="w-[580] flex flex-col   justify-center gap-6 mb-6">
                    <h1 className="text-6xl  font-medium ">
                        Encontre o lar que combina com a sua próxima <span className="text-accent italic">conquista</span>
                    </h1>
                    <span className="w-[450]">Imóveis selecionados com curadoria estratégica e
                        atendimento personalizado do início ao fim da negociação.
                    </span>
                    <div className="links-area w-full flex gap-4  ">
                        <a
                            className="px-4 bg-primary text-text1 py-2 rounded-xl text-center border hover:bg-background hover:text-primary transition-colors duration-300 "
                            href="https://wa.me/5584999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Falar no WhatsApp
                        </a>
                        <a
                            className="px-4 bg-background text-text2 py-2 rounded-xl text-center border  hover:bg-primary hover:text-text1 transition-colors duration-300"
                            href="https://wa.me/5584999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver imóveis disponíveis <svg xmlns="/images/svgarrow.svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block ml-1"> <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /> </svg>
                        </a>
                    </div>
                </div>

                <div className=" rounded-2xl overflow-hidden max-h-[550] shadow-md">
                    <Image
                        src="/images/heroImage.png" alt="hero image"
                        width={480} height={550}
                    />
                </div>

            </div>
        </section>
    );
}