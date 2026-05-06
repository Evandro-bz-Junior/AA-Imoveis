"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage() {
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin(e: React.FormEvent) {
        e.preventDefault()

        // MOCK LOGIN
        if (email === "admin@aa.com" && password === "123456") {
            localStorage.setItem("isAdmin", "true")
            router.push("/admin/dashboard")
        } else {
            alert("Credenciais inválidas")
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-section">
            <form
                onSubmit={handleLogin}
                className="text-text2 p-8 rounded-2xl shadow-md w-full max-w-md flex flex-col gap-4"
            >
                <Image
                    src="/images/logo2.png"
                    alt="Logo"
                    width={150}
                    height={150}
                    className="mx-auto mb-4"
                />
                <h1 className="text-2xl font-bold text-text2 ">
                    Login do Administrador
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="border p-3 rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    className="border p-3 rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="bg-primary text-white py-3 rounded-xl font-medium hover:opacity-90">
                    Entrar
                </button>
            </form>
        </main>
    )
}