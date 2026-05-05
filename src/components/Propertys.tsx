 

import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";


export default function Propertys() {
    return (
        <section id="propertys" className="w-full  flex  items-center py-14 bg-section1">
            <div className="container flex flex-col   justify-center    mx-auto px-4 gap-8">

                <div className="infoArea flex flex-col   justify-center gap-4 mb-6 px-4">
                    <h1 className="text-3xl">Imóveis selecionados</h1>
                    <span>Oportunidades escolhidas para morar ou investir com segurança.</span>
                </div>

                <div className="cardsArea grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-4 xl:items-stretch justify-items-center">

                    {/* <div className="card w-[400] h-[460] bg-background rounded-2xl overflow-hidden shadow-md">
                        <div className="imageArea relative">
                            <Image
                                src="/images/Apartamento Luxo.png" alt="Property image"
                                width={400} height={300}
                            />
                            <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                                <img src="/images/MapPin.svg" alt="Localização" className="w-3 h-3" />                                <span>Jardim Europa, SP</span>
                            </div>
                        </div>

                        <div className="infoArea p-6 flex flex-col gap-4">
                            <h6 className="text-2xl font-medium">R$ 4.500.000</h6>
                            <span className="text-text2">Residência de Alto Padrão com vista</span>
                            <div className="details flex justify-between items-center gap-4">
                                <div className="flex  gap-2">
                                    <div className="flex items-center gap-1">
                                        <img src="/images/BedroomsIcon.svg" alt="Quarto" className="w-4 h-4" />
                                        <span className="text-sm text-text2">4</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <img src="/images/BathroomIcon.svg" alt="Banheiro" className="w-4 h-4" />
                                        <span className="text-sm text-text2">3</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <img src="/images/CarIcon.svg" alt="Garagem" className="w-4 h-4" />
                                        <span className="text-sm text-text2">2 vagas</span>
                                    </div>
                                </div>
                                <Link href="#">Ver detalhes</Link>
                            </div>
                        </div>
                    </div> */}

                    {properties.map((property, index) => (
                        <PropertyCard key={index} {...property} />
                    ))}

                </div>

                    <button className="block mx-auto px-8 py-2 w-52 text-center bg-section1 text-text2  rounded-full border-2 border-text2 hover:bg-primary hover:text-text1 transition-colors duration-300 active:scale-95 font-medium">Ver mais imóveis</button>
            </div>
        </section  >
    );
}