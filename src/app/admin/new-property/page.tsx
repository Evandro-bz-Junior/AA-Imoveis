"use client"

import { supabase } from "@/lib/supabase";
import { uploadImage } from "@/lib/storage";
import Link from "next/link"
import { useState } from "react"
import UploadImages from "@/components/admin/UploadImages";


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

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        try {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (!user) {
                alert("Usuário não autenticado");
                return;
            }

            const { data, error } = await supabase
                .from("properties")
                .insert({
                    title: form.title,
                    description: form.description,

                    price: Number(form.price),

                    city: form.city,
                    neighborhood: form.neighborhood,
                    state: form.state,

                    bedrooms: Number(form.bedrooms),
                    bathrooms: Number(form.bathrooms),
                    parking: Number(form.parking),

                    created_by: user.id,
                    created_by_email: user.email,
                })
                .select()
                .single();

            if (error) {
                console.error(error);
                alert("Erro ao criar imóvel");
                return;
            }
            const imageUrls = await Promise.all(
                files
                    .filter((file): file is File => file instanceof File)
                    .map((file) =>
                        uploadImage(file, data.id)
                    )
            )

            const { error: updateError } = await supabase
                .from("properties")
                .update({
                    images: imageUrls,
                })
                .eq("id", data.id);

            if (updateError) {
                console.error(updateError);
                alert("Erro ao salvar imagens");
                return;
            }

            alert("Imóvel criado com sucesso!");
        } catch (error) {
            console.error(error);
        }
    }

    const [files, setFiles] = useState<(File | string)[]>([])



    return (
        <main className="min-h-screen bg-section2 p-8  ">
            <Link
                href="/admin/dashboard"
                className="bg-primary text-white px-6 py-2 rounded-xl mb-8 "
            >
                Voltar para Dashboard
            </Link>
            <form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow flex flex-col gap-4 mt-4"
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
                    maxLength={400}
                    onChange={handleChange}
                    className="border p-3 rounded-lg  "
                />

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    <input name="bedrooms" type="number" placeholder="Quartos" onChange={handleChange} className="border p-3 rounded-lg" />
                    <input name="bathrooms" type="number" placeholder="Banheiros" onChange={handleChange} className="border p-3 rounded-lg" />
                    <input name="parking" type="number" placeholder="Vagas" onChange={handleChange} className="border p-3 rounded-lg" />
                </div>

                <UploadImages
                    files={files}
                    setFiles={setFiles}
                /><p>{files.length} imagens selecionadas</p>

                <button className="bg-primary text-white py-3 rounded-xl font-medium hover:opacity-90">
                    Salvar imóvel
                </button>
            </form>
        </main>
    )
}