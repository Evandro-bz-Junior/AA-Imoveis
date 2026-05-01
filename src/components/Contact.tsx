import Image from 'next/image';
import React from 'react';

export default function Contact() {
    return (
        <section className='bg-section2 w-full flex items-center py-14  '>
            <div className='container flex flex-col items-center mx-auto px-4 gap-4'>
                <h2 className=' font-serif font-medium text-center mb-6 text-text1 md:w-lg'>Estou à disposição para entender suas necessidades e apresentar as propriedades mais adequadas ao seu perfil.</h2>
                <a className="px-4 bg-background text-text2 py-2 rounded-xl text-center border  hover:bg-primary hover:text-text1 hover:scale-105 transition-colors duration-300"
                    href="https://wa.me/5584999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                >Falar no WhatsApp
                    <svg xmlns="/images/svgarrow.svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block ml-1"> <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /> </svg>
                </a>
            </div>
        </section>
    );
}