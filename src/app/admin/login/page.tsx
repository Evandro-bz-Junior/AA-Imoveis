"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault()

        setLoading(true)

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        setLoading(false)

        if (error) {
            alert("Email ou senha inválidos")
            return
        }

        router.push("/admin/dashboard")
    }

    return (
        <main className="min-h-screen flex flex-col gap-8 items-center justify-center bg-section2">
            <form
                onSubmit={handleLogin}
                className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md flex flex-col gap-4"
            >
                <Image
                    src="/images/logo2.png"
                    alt="Logo"
                    width={130} height={100}
                    className="  mx-auto"
                />

                <h1 className="text-2xl font-bold text-text2">
                    Login Administrativo
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="border p-3 rounded-lg border-green-700"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    className="border p-3 rounded-lg border-green-700"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="bg-section2 text-white py-3 rounded-xl cursor-pointer hover:opacity-90 transition duration-300 ease-in-out">
                    {loading ? "Entrando..." : "Entrar"}
                </button>
            </form>

            <Link
                href="/"
                className="bg-primary text-white px-6 py-2 rounded-xl cursor-pointer hover:opacity-90 transition duration-300 ease-in-out"
            >
                Voltar para o site
            </Link>
        </main>
    )
}