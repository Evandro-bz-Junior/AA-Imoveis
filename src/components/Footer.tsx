import Image from 'next/image';
import React from 'react';

export default function Footer() {
    return (
        <footer className='bg-background text-text2 container flex flex-col justify-center mx-auto gap-8 py-6 px-14'>
            <div className='flex flex-col md:flex-row gap-6 justify-between   '>
                <div className='flex flex-col gap-1 w-md'>
                    <Image src="/images/logo2.png" alt="AA Imóveis" width={100} height={100} />
                    <span className='text-sm  '>Consultoria imobiliária de alto padrão focada em discrição, excelência e resultados para clientes exigentes.</span>
                </div>

                <div className='navigation flex flex-col w-40  gap-4 mt-2'>
                    <h6 className='font-semibold'>Navegação</h6>
                    <ul className=" flex flex-col gap-2 text-sm">
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
                </div>

                <div className='adress flex flex-col w-64  gap-4 mt-2'>
                    <h6 className='font-semibold'>Contato</h6>
                    <div className='flex flex-col gap-2 text-sm'>
                    <span>Local de atendimento: Rua Duodécimo Rosado, Doze Anos, Mossoró - RN, 59603-020.</span>
                    <span>Telefone: (84) 99999-9999</span>
                    <span>Email: 5TtQ8@example.com</span>
                    </div>
                </div>
            </div>
            <span className="text-xs text-gray-500 italic">
                        © 2026 Almeida & Co. Todos os direitos reservados.
                    </span>
        </footer>
    );
}