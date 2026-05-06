

import PropertyCard from "@/components/PropertyCard";
import { getProperties } from "@/lib/api";


export default async function Properties() {
    const properties = await getProperties()

    return (
        <section id="properties" className="w-full  flex  items-center py-14 bg-section1">
            <div className="container flex flex-col   justify-center    mx-auto px-4 gap-8">

                <div className="infoArea flex flex-col   justify-center gap-4 mb-6 px-4">
                    <h1 className="text-3xl">Imóveis selecionados</h1>
                    <span>Oportunidades escolhidas para morar ou investir com segurança.</span>
                </div>

                <div className="cardsArea grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-4 xl:items-stretch justify-items-center">

                    {properties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}

                </div>

                <button className="block mx-auto px-8 py-2 w-52 text-center bg-section1 text-text2  rounded-full border-2 border-text2 hover:bg-primary hover:text-text1 transition-colors duration-300 active:scale-95 font-medium">Ver mais imóveis</button>
            </div>
        </section  >
    );
}