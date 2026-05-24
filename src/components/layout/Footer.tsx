"use client";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Footer() {
    const pathname = usePathname();

    // Se a URL começar com /admin ou /login, não renderiza o Header
    if (pathname.startsWith("/admin") || pathname === "/login") {
        return null;
    }
    return (
        <footer className='w-full bg-section1 text-text2 text-xs  '>
            <div className="max-w-7xl mx-auto">
                <div className='flex flex-col md:flex-row gap-6 justify-center md:justify-between   py-10 px-8 md:px-14  '>
                    <div className='flex flex-col gap-1 md:w-1/3'>
                        <Image src="/images/logo2.png" alt="AA Imóveis" width={100} height={100} />
                        <span className='text-xs  '>Consultoria imobiliária de alto padrão focada em discrição, excelência e resultados para clientes exigentes.</span>
                    </div>

                    <div className='navigation flex flex-col w-40  gap-4 mt-2'>
                        <h6 className='font-semibold'>Navegação</h6>
                        <ul className=" grid grid-cols-2 gap-2  ">
                            <li>
                                <a href="/" className="hover:underline text-text2">Home</a>
                            </li>
                            <li>
                                <a href="/#properties" className="hover:underline text-text2">Imoveis</a>
                            </li>
                            <li>
                                <a href="/#about" className="hover:underline text-text2">Sobre</a>
                            </li>
                            <li>
                                <a href="/#contact" className="hover:underline text-text2">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className='adress flex flex-col w-64  gap-4 mt-2'>
                        <h6 className='font-semibold'>Contato</h6>
                        <div className='flex flex-col gap-4 '>
                            <span>Local de atendimento:<br /> Rua Duodécimo Rosado, Doze Anos, Mossoró - RN, 59603-020.</span>
                            <span>Telefone: (84) 99999-9999</span>
                            <span>Email: 5TtQ8@example.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10 py-4 px-6 md:px-12 text-end">
                <span className="text-gray-500 italic text-[11px]">
                    © 2026 AA. Todos os direitos reservados.
                </span>
            </div>
        </footer>
    );
}