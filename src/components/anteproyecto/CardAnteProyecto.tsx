'use client'

import { IAnteProyecto } from '@/app/api/data/anteproyectos';
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import { CustomDialog } from './EmergenteProyecto';
import { SlBookOpen } from 'react-icons/sl';
import { MdOutlineSportsSoccer } from 'react-icons/md';
import { IconType } from 'react-icons';

// Define un objeto de mapeo de iconos
const iconMap: { [key: string]: IconType } = {
    SlBookOpen: SlBookOpen,
    MdOutlineSportsSoccer: MdOutlineSportsSoccer,
    // Añade aquí otros íconos según sea necesario
};

const CardAnteProyecto = ({ categoria, descripcion, fecha, icon, id, proponente, titulo, link, estado }: IAnteProyecto) => {
    const formattedDate = new Date(fecha).toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' });
    const [isOpen, setIsOpen] = useState(false);

    // Obtén el componente de ícono basado en el nombre proporcionado
    const IconComponent = iconMap[icon];

    return (
        <div className='flex shadow-lg rounded-3xl'>
            <article className='relative flex w-full flex-col shadow-sm rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-teal-50 sm:p-6 justify-between'>
                <div>
                    <div>
                        {IconComponent ? (
                            <IconComponent className='h-12 w-12' width='100px' height='100px' color='#183c6b' />
                        ) : (
                            <span>Ícono no disponible</span>
                        )}
                    </div>
                    <p className='mt-6 flex gap-x-2 text-neutral-800 items-end'>
                        <time className='text-sm tracking-tighter'>{formattedDate}</time>
                        <span className='text-neutral-300'>/</span>
                        <span className='tracking-tighter text-base font-medium'>{proponente}</span>
                    </p>
                    <p className='mt-6 font-display text-xl font-semibold text-neutral-850'>
                        {titulo}
                    </p>
                    <p className='mt-4 text-base font-light text-gray-600'>{descripcion}</p>
                </div>
                <div className='flex w-full justify-between items-center mt-3'>
                    <div className='flex flex-col items-start gap-1'>
                        <button
                            className='flex items-center justify-center'
                            onClick={() => setIsOpen(true)}
                        >
                            <p className='flex items-center text-xs cursor-pointer text-blue-400'>
                                Anteproyecto
                            </p>
                            <ArrowRight className='w-3 h-3 relative mt-0.5 ml-1 z-10 cursor-pointer text-blue-400 hover:to-blue-600' />
                        </button>
                    </div>
                    <p className='border border-gray-100 bg-white rounded-sm p-1 px-2 mt-1 text-xs text-teal-500'>{estado}</p>
                </div>
            </article>

            <CustomDialog
                title={titulo}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                pdfFile={link} // URL completa del archivo PDF
            />
        </div>
    );
};

export default CardAnteProyecto;
