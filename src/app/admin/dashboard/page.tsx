"use client"


import { properties } from "@/data/properties"
import Image from "next/image"
import Link from "next/link"

export default function Dashboard() {


    return (
        <main className="min-h-screen bg-section p-8">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <h1 className="text-3xl font-bold">Dashboard</h1>

                    <Link
                        href="/admin/new-property"
                        className="bg-primary text-white px-6 py-2 rounded-xl"
                    >
                        + Novo Imóvel
                    </Link>
                </div>

                <div className="grid gap-4">
                    {properties.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-4 rounded-xl shadow flex flex-col sm:flex-row justify-between items-center gap-4"
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
                                        {item.neighborhood}, {item.city}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button className="text-blue-600">Editar</button>
                                <button className="text-red-600">Excluir</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    )
}