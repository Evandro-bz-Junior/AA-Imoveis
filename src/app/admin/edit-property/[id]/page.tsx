"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"

import UploadImages from "@/components/admin/UploadImages"

import { supabase } from "@/lib/supabase"
import { uploadImage } from "@/lib/storage"

export default function EditPropertyPage() {

    const params = useParams()
    const router = useRouter()

    const [loading, setLoading] = useState(true)

    const [files, setFiles] = useState<File[]>([])

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
    })

    useEffect(() => {

        async function loadProperty() {

            const { data, error } = await supabase
                .from("properties")
                .select("*")
                .eq("id", params.id)
                .single()

            if (error || !data) {
                alert("Imóvel não encontrado")
                router.push("/admin/dashboard")
                return
            }

            setForm({
                title: data.title,
                price: data.price,
                city: data.city,
                neighborhood: data.neighborhood,
                state: data.state,
                description: data.description,
                bedrooms: data.bedrooms,
                bathrooms: data.bathrooms,
                parking: data.parking,
            })

            setFiles(data.images || [])

            setLoading(false)
        }

        loadProperty()

    }, [params.id, router])

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {

        const { name, value } = e.target

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    async function handleSubmit(
        e: React.FormEvent
    ) {

        e.preventDefault()

        try {

            const finalImages: string[] = []

            for (const item of files) {

                // imagem já existente
                if (typeof item === "string") {

                    finalImages.push(item)

                } else {

                    // nova imagem
                    const imageUrl = await uploadImage(
                        item,
                        Number(params.id)
                    )

                    finalImages.push(imageUrl)
                }
            }

            const { error } = await supabase
                .from("properties")
                .update({
                    ...form,

                    images: finalImages,

                    bedrooms: Number(form.bedrooms),
                    bathrooms: Number(form.bathrooms),
                    parking: Number(form.parking),
                })
                .eq("id", params.id)

            if (error) {
                console.error(error)
                alert("Erro ao atualizar imóvel")
                return
            }

            alert("Imóvel atualizado")

            router.push("/admin/dashboard")

        } catch (error) {

            console.error(error)

            alert("Erro ao salvar imóvel")
        }
    }

    if (loading) {
        return (
            <main className="p-8">
                Carregando...
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-section2 p-8">

            <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">

                <h1 className="text-3xl font-bold mb-8">
                    Editar Imóvel
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >

                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Título"
                        className="border p-3 rounded-lg"
                    />

                    <input
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        placeholder="Preço"
                        className="border p-3 rounded-lg"
                    />

                    <div className="grid grid-cols-2 gap-4">

                        <input
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            placeholder="Cidade"
                            className="border p-3 rounded-lg"
                        />

                        <input
                            name="state"
                            value={form.state}
                            onChange={handleChange}
                            placeholder="Estado"
                            className="border p-3 rounded-lg"
                        />

                    </div>

                    <input
                        name="neighborhood"
                        value={form.neighborhood}
                        onChange={handleChange}
                        placeholder="Bairro"
                        className="border p-3 rounded-lg"
                    />

                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Descrição"
                        className="border p-3 rounded-lg"
                    />

                    <div className="grid grid-cols-3 gap-4">

                        <input
                            type="number"
                            name="bedrooms"
                            value={form.bedrooms}
                            onChange={handleChange}
                            placeholder="Quartos"
                            className="border p-3 rounded-lg"
                        />

                        <input
                            type="number"
                            name="bathrooms"
                            value={form.bathrooms}
                            onChange={handleChange}
                            placeholder="Banheiros"
                            className="border p-3 rounded-lg"
                        />

                        <input
                            type="number"
                            name="parking"
                            value={form.parking}
                            onChange={handleChange}
                            placeholder="Vagas"
                            className="border p-3 rounded-lg"
                        />

                    </div>

                    <UploadImages
                        files={files}
                        setFiles={setFiles}
                    />

                    <button
                        type="submit"
                        className="bg-primary text-white py-3 rounded-xl font-medium"
                    >
                        Salvar alterações
                    </button>

                </form>

            </div>

        </main>
    )
}