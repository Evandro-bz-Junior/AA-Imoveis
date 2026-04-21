import Image from 'next/image';
import React from 'react';

export default function Footer() {
    return (
        <footer className='bg-background text-text2 container flex justify-center  mx-auto gap-14 py-8'>
            <div className='flex flex-col gap-5 w-sm'>
                <Image src="/images/logo2.png" alt="AA Imóveis" width={100} height={100} />
                <span className='text-sm max-w-80'>Consultoria imobiliária de alto padrão focada em discrição, excelência e resultados para clientes exigentes.</span>
            </div>

            <div className='navigation flex flex-col w-40  gap-4 mt-2'>
                <h6>Navegação</h6>
                <ul className="grid grid-cols-2 gap-6 text-sm">
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

            <div className='adress flex flex-col w-64 text-sm gap-2 mt-2'>
            <span>Local de atendimento: Rua Duodécimo Rosado, Doze Anos, Mossoró - RN, 59603-020.</span>
            <span>Telefone: (84) 99999-9999</span>
            <span>Email: 5TtQ8@example.com</span>
            </div>
        </footer>
    );
}