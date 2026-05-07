"use client"

import { properties } from "@/data/properties"
import { supabase } from "@/lib/supabase"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


export default function Dashboard() {
    const router = useRouter()

    useEffect(() => {
        async function checkUser() {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (!session) {
                router.push("/admin/login");
            }
        }

        checkUser();
    }, [router]);

    async function handleLogout() {
        await supabase.auth.signOut();

        router.push("/admin/login");
    }

    return (
        <main className="min-h-screen bg-section1 p-8">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">

                <div className="flex flex-col md:flex-row justify-between items-center gap-2 bg-green-700 p-4  rounded-2xl shadow">
                    <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                    <div className="flex gap-4">
                        <Link
                            href="/admin/new-property"
                            className="bg-primary text-white px-6 py-2 rounded-xl"
                        >
                            + Novo Imóvel
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="bg-red-700 text-white px-4 py-2 rounded-xl hover:opacity-90 transition cursor-pointer"
                        >
                            Sair
                        </button>
                    </div>
                </div>

                <div className="grid gap-4">
                    {properties.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-4 rounded-xl shadow flex flex-col sm:flex-row justify-between md:items-center gap-4"
                        >
                            <div className="flex flex-col md:flex-row gap-4">
                                <Image
                                    src={item.images[0]}
                                    alt={item.title}
                                    width={300}
                                    height={300}
                                    className="  h-40 object-cover"
                                />

                                <div>
                                    <h2 className="font-semibold">{item.title}</h2>
                                    <p className="text-sm text-gray-500">
                                        {item.neighborhood}, {item.city}, {item.state}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-5 md:w-3/4">
                                        {item.description}
                                    </p>
                                    <div className="mt-5 flex items-center gap-4">
                                        <img src="/images/BathroomIcon.svg" alt="Banheiros" className="w-4 h-4" />
                                        <span className="text-sm text-gray-500 ">
                                            {item.bedrooms}
                                        </span>

                                        <img src="/images/BathroomIcon.svg" alt="Banheiros" className="w-4 h-4" />
                                        <span className="text-sm text-gray-500  ">{item.bathrooms}
                                        </span>

                                        <img src="/images/carIcon.svg" alt="Vagas de Garagem" className="w-4 h-4" />
                                        <span className="text-sm text-gray-500  "> {item.parking}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button className="text-blue-600 cursor-pointer">
                                    <img src="/images/square-pen.svg" alt="Editar" className="w-9 h-9 sm:w-14 sm:h-14" />
                                </button>
                                <button className="text-red-600 cursor-pointer">
                                    <img src="/images/trash-2.svg" alt="Excluir" className="w-9 h-9 sm:w-14 sm:h-14" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    )
}