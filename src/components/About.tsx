import Image from 'next/image';
import React from 'react';

export default function About() {
    return (
        <section id="about" className="w-full  flex flex-col items-center py-14 ">
            <div className="container flex justify-center mx-auto px-4 gap-6 w-4xl">
                <div className='img-area relative px-20'>
                    <div className="absolute -bottom-5 right-5 w-28 h-28 bg-[#EAE8DB] rounded-full -z-10"></div>
                    <img src="/images/Corretor.png" alt="Imagem corretor"
                        className='relative z-10 w-80 h-auto rounded-2xl shadow-xl' />
                </div>

                <div className="infoArea flex flex-col w-1/2  justify-center gap-6 ">
                    <h4 className='text-2xl font-serif font-medium leading-[1.1]'>Atendimento direto com quem
                        <span className='text-accent italic '> entende do mercado</span></h4>
                    <p className='text-text2 font-light'>Especialista no mercado imobiliário, Meu foco é garantir que você faça o melhor negócio, seja comprando a casa dos seus sonhos ou vendendo seu imóvel com máxima rentabilidade.</p>


                    <div className=" flex flex-col gap-3">

                        <div className="flex items-center gap-3">

                            <div className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#EAE8DB]">
                                <svg className="w-3.5 h-3.5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>

                            <span className="text-text2 font-medium text-sm">
                                Atendimento personalizado e exclusivo
                            </span>
                        </div>


                        <div className="flex items-center gap-3">
                            <div className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#EAE8DB]">
                                <svg className="w-3.5 h-3.5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-text2 font-medium text-sm">
                                Avaliação estratégica de mercado
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#EAE8DB]">
                                <svg className="w-3.5 h-3.5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-text2 font-medium text-sm">
                                Suporte documental completo e rigoroso
                            </span>
                        </div>
                    </div>

                    <a
                        className="p-2 w-48 bg-primary text-text1 rounded-full text-center hover:shadow-lg active:scale-95"
                        href="https://wa.me/5584999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Agendar conversa
                    </a>

                </div>
            </div>
            <div className="container flex flex-col justify-center items-center mx-auto px-4 gap-12 w-4xl py-14">
                <div className='flex flex-col justify-center items-center gap-4 text-center'>
                    <h4 className='text-2xl font-medium w-96'>Por que escolher meu atendimento?</h4>
                    <span className='text-text2 w-lg'>Uma abordagem consultiva que prioriza os seus interesses em cada etapa da jornada imobiliária.</span>
                </div>
                <div className="cards-area flex gap-8 ">
                    <div className="card w-96 h-64 flex flex-col items-center gap-8 p-8 rounded-xl shadow-lg">
                        <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#EAE8DB] shadow-lg">
                            <Image
                                src="/images/Vector-star.png"
                                alt="Simbolo de estrela"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="info flex flex-col items-center text-center gap-4">
                            <h5 className='text-lg font-medium'>Curadoria estratégica</h5>
                            <p className='text-sm text-text2'>Apresento apenas propriedades que passaram por um rigoroso crivo de
                                qualidade e que se alinham perfeitamente aos seus objetivos.</p>
                        </div>
                    </div>

                    <div className="card w-96 h-64 flex flex-col items-center gap-8 p-8 rounded-xl shadow-lg">
                        <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#EAE8DB] shadow-lg">
                            <Image
                                src="/images/vetor$.png"
                                alt="Simbolo de $"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="info flex flex-col items-center text-center gap-4">
                            <h5 className='text-lg font-medium'>Avaliação precisa</h5>
                            <p className='text-sm text-text2'>Precificação embasada em dados reais e atualizados do mercado para garantir a melhor negociação possível.</p>
                        </div>
                    </div>

                    <div className="card w-96 h-64 flex flex-col items-center gap-8 p-8 rounded-xl shadow-lg">
                        <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#EAE8DB] shadow-lg">
                            <Image
                                src="/images/Vector-shield.png"
                                alt="Simbolo de escudo"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="info flex flex-col items-center text-center gap-4">
                            <h5 className='text-lg font-medium'>Negociação transparente</h5>
                            <p className='text-sm text-text2'>Condução ética de todos os trâmites, oferecendo clareza e segurança jurídica em cada documento assinado.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}