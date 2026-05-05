import { properties } from "@/data/properties";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function DetalhesImovel({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const property = properties.find((item) => item.id === Number(id));

    if (!property) {
        notFound();
    }

    return (
        <main className="container mx-auto py-20 px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">

                <div className="relative h-75 md:h-100   rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="flex flex-col gap-6  w-full">
                    <div className="  w-full">
                        <h1 className="text-4xl font-bold text-text2 md:w-full">{property.title}</h1>
                        <span className="text-primary font-bold text-sm uppercase tracking-wider ">{property.location}</span>
                    </div>

                    <p className="text-3xl font-medium text-text2">{property.price}</p>

                    <p className="text-gray-600 leading-relaxed border-t pt-6">
                        {property.description}
                    </p>

                    <div className="flex gap-8 border-y py-4 my-2">
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-400 uppercase">Quartos</span>
                            <span className="font-bold text-lg text-center">{property.bedrooms}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-400 uppercase">Banheiros</span>
                            <span className="font-bold text-lg text-center">{property.bathrooms}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-400 uppercase">Vagas</span>
                            <span className="font-bold text-lg text-center">{property.parking}</span>
                        </div>
                    </div>

                    <a
                        href={`https://wa.me/5584999999999?text=Olá, vi o imóvel "${property.title}" no site e gostaria de mais informações.`}
                        target="_blank"
                        className="bg-primary text-text1 text-center p-4 rounded-xl font-bold w-fit hover:opacity-90 transition-all active:scale-95"
                    >
                        Falar com Consultor no WhatsApp
                    </a>
                </div>
            </div>
        </main>
    );
}