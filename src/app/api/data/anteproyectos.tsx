import { Category } from "@/interface/category"
import { LawProposalState } from "@/interface/states"

export interface IAnteProyecto {
    id: number
    titulo: string
    descripcion: string
    fecha: string
    categoria: string
    proponente: string,
    icon: string,
    link: string
    estado?: LawProposalState
}

export const Anteproyectos: IAnteProyecto[] = [
    {
        id: 1,
        titulo: 'Transparencia y Equidad en Auxilios Económicos',
        // titulo: 'Reforma Integral para la Transparencia y Equidad en la Asignación de Auxilios Económicos',
        // titulo:'Que modifica la Ley 1 del 11 de enero de 1965 y prohíbe el acceso a Auxilios Económicos a funcionarios de Alto Mando y Jurisdicción ya sus familiares con parentesco hasta el cuarto grado de consanguinidad y segundo de afinidad',

        descripcion: 'La propuesta prohíbe el acceso a auxilios económicos a funcionarios de alto mando y sus familiares, promoviendo la transparencia y equidad en la distribución de recursos educativos.',
        fecha: 'Tue Jul 02 2024 22:12:41 GMT-0500 (hora estándar oriental)',
        categoria: Category.Educacion,
        proponente: 'H.D. Miguel Ángel Campos Lima',
        icon: 'fa fa-graduation-cap',
        link: 'pdfs/ReformaparalaTransparenciayEquidadenAuxiliosEconomicos.pdf',
        estado: LawProposalState.Presentado
    },


]