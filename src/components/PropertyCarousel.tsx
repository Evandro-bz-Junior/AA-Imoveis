"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

type PropertyCarouselProps = {
    images: string[]
}

export default function PropertyCarousel({
    images,
}: PropertyCarouselProps) {

    return (
        <div className="w-full">
            <div className=" relative w-full h-[350px] md:h-[500px]">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    className="rounded-2xl overflow-hidden"
                    loop={true}
                >

                    {images.map((image, index) => (
                        <SwiperSlide key={index}>

                            <img
                                src={image}
                                alt={`Imagem ${index + 1}`}
                                className="w-full h-[350px] md:h-[500px] object-cover"
                            />

                        </SwiperSlide>
                    ))}

                </Swiper>

                <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gray-400/20 backdrop-blur-md flex items-center justify-center hover:bg-gray-600 transition-all">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>

                </button>

                <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gray-400/20 backdrop-blur-md flex items-center justify-center hover:bg-gray-600 transition-all">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>

                </button>
            </div>
        </div>
    )
}