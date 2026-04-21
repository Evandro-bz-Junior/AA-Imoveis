import Image from "next/image";

export default function Header() {
    return (
        <header
            aria-label="Menu principal"
            className="w-full h-fit   shadow-md"
        >
            <div className="container  flex items-center justify-between w-full gap-16  px-20 mx-auto">

                <Image
                    src="/images/logo1.png"
                    alt="Logo da empresa"
                    width={120}
                    height={40}
                />

                <nav  >
                    <ul className="flex items-center gap-6">
                        <li>
                            <a href="#" className="hover:underline text-text2">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline text-text2">Imoveis</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline text-text2">Sobre</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline text-text2">Contato</a>
                        </li>
                    </ul>
                </nav>

                <a
                    className="px-4 bg-primary text-text1 py-2 rounded-xl text-center"
                    href="https://wa.me/5584999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Falar no WhatsApp
                </a>
            </div>
        </header>
    );
}