"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import vamosApi from '@/app/api/vamosApi';
import { AxiosError } from 'axios';
interface Props {
    link: string

}
const CreateTagCategory = ({ link }: Props) => {
    const [error, setError] = useState<string>()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get('name')
        if (!name) return
        if (name.length < 3) return setError('El nombre debe tener al menos 3 caracteres')
        setError(undefined)
        try {
            const res = await vamosApi.post(`/${link}`, {
                name
            })
            if (res.status === 200) return alert('Creada exitosamente')
        } catch (error) {
            if (error instanceof AxiosError) {
                setError(error.response?.data.message)
            }
        }
    }



    return (
        <div className=' '>
            <form onSubmit={handleSubmit} className='space-y-4 mt-10 ms-2  items-center flex-col flex'>
                <div className="h-4 mb-2">
                    {error && <p className="bg-red-500 text-sm text-white p-1 rounded-sm px-2">{error}</p>}
                </div>
                <Input
                    id="name"
                    name="name"
                    placeholder="Nombre"
                    type="text"
                    autoCapitalize="none"
                    autoCorrect="off"

                    required
                    className="bg-zinc-200 px-4 py-2 block mb-2 w-auto"
                />
                <Button arial-label='Crear'>Crear</Button>
            </form>
        </div>
    )
}

export default CreateTagCategory