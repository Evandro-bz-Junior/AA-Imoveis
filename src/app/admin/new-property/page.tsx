"use client"

import Link from "next/link"
import { useState } from "react"

export default function NewProperty() {


    const [form, setForm] = useState({
        title: "",
        price: "",
        city: "",
        neighborhood: "",
        state: "",
        description: "",
        bedrooms: 0,
        bathrooms: 0,
        parking: 0,
        images: ""
    })

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = e.target

        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        const newProperty = {
            ...form,
            bedrooms: Number(form.bedrooms),
            bathrooms: Number(form.bathrooms),
            parking: Number(form.parking),
            images: form.images.split(",").map((img) => img.trim())
        }

        console.log("NOVO IMÓVEL:", newProperty)

        alert("Imóvel criado (mock)")
    }

    return (
        <main className="min-h-screen bg-section p-8 relative">
            <Link
                href="/admin/dashboard"
                className="bg-primary text-white px-6 py-2 rounded-xl"
            >
                Voltar para Dashboard
            </Link>
            <form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow flex flex-col gap-4"
            >
                <h1 className="text-2xl font-bold">Novo Imóvel</h1>

                <input name="title" placeholder="Título" onChange={handleChange} className="border p-3 rounded-lg" />
                <input name="price" placeholder="Preço (ex: 450000)" onChange={handleChange} className="border p-3 rounded-lg" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="city" placeholder="Cidade" onChange={handleChange} className="border p-3 rounded-lg" />
                    <input name="state" placeholder="Estado" onChange={handleChange} className="border p-3 rounded-lg" />
                </div>

                <input name="neighborhood" placeholder="Bairro" onChange={handleChange} className="border p-3 rounded-lg" />

                <textarea
                    name="description"
                    placeholder="Descrição"
                    onChange={handleChange}
                    className="border p-3 rounded-lg"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    <input name="bedrooms" type="number" placeholder="Quartos" onChange={handleChange} className="border p-3 rounded-lg" />
                    <input name="bathrooms" type="number" placeholder="Banheiros" onChange={handleChange} className="border p-3 rounded-lg" />
                    <input name="parking" type="number" placeholder="Vagas" onChange={handleChange} className="border p-3 rounded-lg" />
                </div>

                <input
                    name="images"
                    placeholder="URLs das imagens (separadas por vírgula)"
                    onChange={handleChange}
                    className="border p-3 rounded-lg"
                />

                <button className="bg-primary text-white py-3 rounded-xl font-medium hover:opacity-90">
                    Salvar imóvel
                </button>
            </form>
        </main>
    )
}