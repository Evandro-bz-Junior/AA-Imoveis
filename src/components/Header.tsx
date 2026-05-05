"use client";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    // Se a URL começar com /admin ou /login, não renderiza o Header
    if (pathname.startsWith("/dashboard") || pathname === "/login") {
        return null;
    }

    return (
        <header
            aria-label="Menu principal"
            className="w-full h-fit   shadow-md"
        >
            <div className="container  flex items-center justify-between  gap-16  px-4 mx-auto">

                <Image
                    src="/images/logo1.png"
                    alt="Logo da empresa"
                    width={120}
                    height={40}
                />

                <nav className="hidden md:flex items-center gap-6" >
                    <ul className="flex items-center gap-6">
                        <li>
                            <Link href="/" className="text-text2">Home</Link>
                        </li>
                        <li>
                            <Link href="#propertys" className="text-text2">Imoveis</Link>
                        </li>
                        <li>
                            <Link href="#about" className="text-text2">Sobre</Link>
                        </li>
                        <li>
                            <Link href="#contact" className="text-text2">Contato</Link>
                        </li>
                    </ul>
                </nav>

                <a
                    className="hidden md:block px-4 bg-primary text-text1 py-2 rounded-xl text-center"
                    href="https://wa.me/5584999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Falar no WhatsApp
                </a>

                {/* MENU MOBILE COM SHADCN */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="p-2">
                                <Menu className="w-8 h-8" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full! max-w-full! px-4">
                            <nav className="flex flex-col gap-6 mt-10">
                                <SheetClose asChild>
                                    <Link href="/" className="text-xl">Home</Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link href="/imoveis" className="text-xl">Imoveis</Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link href="/sobre" className="text-xl">Sobre</Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link href="/contato" className="text-xl">Contato</Link>
                                </SheetClose>
                                <a className="px-6 bg-primary text-text1 py-3 rounded-xl w-fit text-center mt-4" href="#">
                                    Falar no WhatsApp
                                </a>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}