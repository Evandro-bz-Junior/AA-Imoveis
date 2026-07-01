"use client"
export const dynamic = "force-dynamic"
import { getProperties } from "@/lib/api"
import { supabase } from "@/lib/supabase"
import { deleteProperty } from "@/lib/deleteProperty"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default function Dashboard() {
    const router = useRouter()
    const [properties, setProperties] = useState<any[]>([])

    useEffect(() => {
        async function checkUser() {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (!session) {
                router.push("/admin/login");
            }
            const data = await getProperties();

            setProperties(data);
        }

        checkUser();
    }, [router]);

    async function handleLogout() {
        await supabase.auth.signOut();

        router.push("/admin/login");
    }

    async function handleDeleteProperty(
        propertyId: number,
        images: string[]
    ) {

        const confirmDelete = confirm(
            "Deseja realmente excluir este imóvel?"
        )

        if (!confirmDelete) return

        try {

            await deleteProperty(propertyId, images)

            const { data } = await supabase
                .from("properties")
                .select("*")
                .order("id", { ascending: false })

            setProperties(data || [])

            alert("Imóvel excluído")

        } catch (error) {

            console.error(error)

            alert("Erro ao excluir imóvel")
        }
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

                <div className="grid gap-4 ">
                    {properties.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white w-full overflow-hidden p-4 rounded-xl shadow flex flex-col sm:flex-row justify-between md:items-center gap-4 min-h-56"
                        >
                            <div className="flex flex-col md:flex-row gap-4 flex-1 min-w-0">
                                <img
                                    src={item.images?.[0] || "/images/placeholder.png"}
                                    alt={item.title}
                                    className=" w-60 h-40 object-cover shrink-0 rounded-lg shadow-lg mx-auto"
                                />

                                <div className="flex flex-col gap-2 flex-1 min-w-0">
                                    <h2 className="font-semibold">{item.title}</h2>
                                    <p className="text-sm text-gray-500">
                                        {item.neighborhood}, {item.city}, {item.state}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-5 wrap-break-word md:line-clamp-3 ">
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

                                        <img src="/images/CarIcon.svg" alt="Vagas de Garagem" className="w-4 h-4" />
                                        <span className="text-sm text-gray-500  "> {item.parking}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center   gap-2">
                                <Link
                                    href={`/admin/edit-property/${item.id}`}
                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center"
                                    title="Editar imóvel"
                                >
                                    <img src="/images/square-pen.svg" alt="Editar" className="w-5 h-5 min-w-5" />
                                </Link>

                               <button
                                    onClick={() => handleDeleteProperty(item.id, item.images)}
                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center justify-center cursor-pointer"
                                    title="Excluir imóvel"
                                >
                                    <img src="/images/trash-2.svg" alt="Excluir" className="w-5 h-5 min-w-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    )
}