"use client"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import axios, { AxiosError } from "axios"
import { useRouter } from "next/navigation"

import { signIn } from "next-auth/react"
import { EyeClosedIcon, EyeOpenIcon, IconJarLogoIcon } from "@radix-ui/react-icons";
import { FormEvent, useState } from 'react';
import vamosApi from "@/app/api/vamosApi";

const RegisterPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState()
    const router = useRouter()


    const [showPassword, setShowPassword] = useState(false)
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        try {

            const signunpResponse = await vamosApi.post('/auth/signup', {
                email: formData.get('email'),
                password: formData.get('password'),
                name: formData.get('name'),
            })
            const res = await signIn('credentials', {
                email: signunpResponse.data.email,
                password: formData.get('password'),
                redirect: false
            })
            if (res?.ok) return router.push('/')
        } catch (error) {


            if (error instanceof AxiosError) {
                console.log(error.response?.data.message)
                setError(error.response?.data.message)
            }

        }
    }

    return (
        <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
            <form onSubmit={handleSubmit} className="mx-auto lg:w-3/12 shadow-xl p-6 transition hover:bg-neutral-50 ">
                <h1>Registro</h1>
                <div className="h-4 ">
                    {error && <p className="bg-red-500 text-sm text-white ">{error}</p>}
                </div>
                <div className="grid gap-2">
                    <div>
                        <Label className="" htmlFor="name">
                            Nombre
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Nombre"
                            type="text"
                            autoCapitalize="none"
                            autoCorrect="off"
                            disabled={isLoading}
                            required
                            className="bg-zinc-200 px-4 py-2 block mb-2 w-full"
                        />
                    </div>
                    <div>
                        <Label className="" htmlFor="email">
                            Correo electrónico
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="nombre@ejemplo.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                            required
                            className="bg-zinc-200 px-4 py-2 block mb-2 w-full"
                        />
                    </div>
                    <div >
                        <Label className="" htmlFor="password">
                            Contraseña
                        </Label>
                        <div className="relative">
                            <Input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                autoCapitalize="none"
                                autoComplete="off"
                                autoCorrect="off"
                                disabled={isLoading}
                                required
                                className="bg-zinc-200 px-4 py-2 block mb-2 w-full"
                            />

                            <button arial-label='Ver' type="button" className="absolute cursor-pointer right-3 top-2"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {
                                    showPassword ? <EyeClosedIcon className="h-6 w-6 text-gray-500" /> : <EyeOpenIcon className="h-6 w-6 text-gray-500" />
                                }

                            </button>
                        </div>
                    </div>
                    <Button arial-label='Crear cuenta' disabled={isLoading} className="mt-4">
                        {isLoading && (
                            <IconJarLogoIcon className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Crear cuenta
                    </Button>
                </div>
            </form>


        </div>
    )
}

export default RegisterPage