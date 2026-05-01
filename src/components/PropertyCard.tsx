import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
    image: string;
    price: string;
    title: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    parking: number;
    link?: string;
}

export default function PropertyCard({
    image,
    price,
    title,
    location,
    bedrooms,
    bathrooms,
    parking,
    link = "#"
}: PropertyCardProps) {
    return (
        <div className="card w-full lg:w-[400] h-full bg-background rounded-2xl overflow-hidden shadow-md">
            <div className="imageArea relative">
                <Image src={image} alt={title} width={400} height={300} className="w-full h-full object-cover" />
                <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                    <img src="/images/MapPin.svg" alt="Localização" className="w-3 h-3" />
                    <span>{location}</span>
                </div>
            </div>
            <div className="infoArea p-6 flex flex-col justify-between gap-4 h-[200]">
                <h6 className="text-2xl font-medium">{price}</h6>
                <span className="text-text2 line-clamp-2 flex-1">{title}</span>
                <div className="details flex justify-between items-center gap-4 border-t border-gray-300 pt-4 mt-auto">
                    <div className="flex gap-3">
                        <div className="group relative flex items-center gap-1 cursor-help">
                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 scale-0 transition-all duration-200 group-hover:scale-100 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                                Quartos
                            </span>
                            <img src="/images/BedroomsIcon.svg" alt="Quartos" className="w-4 h-4" />
                            <span className="text-sm text-text2">{bedrooms}</span>
                        </div>
                        <div className="group relative flex items-center gap-1 cursor-help">
                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 scale-0 transition-all duration-200 group-hover:scale-100 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                                Banheiros
                            </span>
                            <img src="/images/BathroomIcon.svg" alt="Banheiros" className="w-4 h-4" />
                            <span className="text-sm text-text2">{bathrooms}</span>
                        </div>
                        <div className="group relative flex items-center gap-1 cursor-help">
                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 scale-0 transition-all duration-200 group-hover:scale-100 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                                Vagas
                            </span>
                            <img src="/images/CarIcon.svg" alt="Garagem" className="w-4 h-4" />
                            <span className="text-sm text-text2">{parking} </span>
                        </div>
                    </div>
                    <Link href={link}>Ver detalhes</Link>
                </div>
            </div>
        </div>
    );
}