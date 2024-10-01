
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { ClubIcon } from "lucide-react"
import ArticulosDeporte from "./ArticulosDeporte"
import Deportistas from "./Deportistas"

import LeyesList from "./LeyesList";
const leyes = [
    {
        title: "Constitución de la República de Panamá, Artículo 86",
        pdfFile: "https://pandeportes.gob.pa/PDF/Ley_16_de_1995.pdf"
    },
    {
        title: "Ley 16 de 1995",
        pdfFile: "https://pandeportes.gob.pa/PDF/Ley_16_de_1995.pdf"
    },
    {
        title: "Ley 50 de 2007",
        pdfFile: "https://pandeportes.gob.pa/PDF/Ley_50_de_2007.pdf"
    },
    {
        title: "Ley 9 de 2011",
        pdfFile: "https://pandeportes.gob.pa/PDF/Ley_9_de_2011.pdf"
    },
    {
        title: "Decreto Ejecutivo 599 de 2008",
        pdfFile: "https://pandeportes.gob.pa/PDF/Decreto_Ejecutivo_599_de_2008.pdf"
    },
    {
        title: "Texto Único Ley 16 y Ley 50",
        pdfFile: "https://pandeportes.gob.pa/PDF/Texto_Unico_Ley_16_y_Ley_50.pdf"
    }
];


const Deporte = () => {


    return (
        <div className="flex  mt-6 h-full">
            <Tabs defaultValue="deportistas" className="w-screen ">
                <TabsList className="flex  justify-between bg-white  rounded-none py-2  ">
                    <h2 className='block px-3 font-display tracking-tight [text-wrap:balance] text-3xl font-semibold sm:text-4xl text-azulv'>
                        Deporte en Panamá
                    </h2>
                    <div className="flex sm:flex-row flex-col justify-end gap-1 sm:gap-6">
                        <TabsTrigger className="text-base data-[state=active]:shadow-none p-0" value="deportistas">Deportistas</TabsTrigger>
                        <TabsTrigger className="text-base data-[state=active]:shadow-none p-0" value="articulos">Artículos</TabsTrigger>
                        <TabsTrigger className="text-base data-[state=active]:shadow-none p-0" value="queEsElDeporte">¿Qué es el deporte?</TabsTrigger>
                        <TabsTrigger className="text-base data-[state=active]:shadow-none p-0" value="legal">Marco Normativo</TabsTrigger>
                    </div>
                </TabsList>
                <TabsContent value="deportistas">
                    <Deportistas />
                </TabsContent>
                <TabsContent value="articulos">
                    <ArticulosDeporte />
                </TabsContent>
                <TabsContent value="queEsElDeporte">
                    <section id="what-is-sport" className="py-16 px-6 md:py-8 ">
                        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-4xl font-medium mb-6">¿Qué es el deporte?</h2>
                                <p className="text-muted-foreground">
                                    El deporte es una herramienta esencial para el desarrollo integral de la sociedad, ya que fomenta la salud, la inclusión y el espíritu comunitario. Más allá de ser una actividad física, el deporte impulsa valores como la disciplina, el respeto y el trabajo en equipo, contribuyendo a la formación de ciudadanos responsables y comprometidos. Los panameños, con su ADN de campeones, han demostrado su capacidad para destacar en diversas disciplinas, llevando en alto el nombre de nuestro país. Por ello, es fundamental impulsar el deporte a nivel nacional.
                                </p>
                            </div>
                            <div className="flex justify-center ">
                                {/* <ClubIcon className="h-24 w-24 text-primary" /> */}
                                <img src="/images/deporte/deporte.webp" alt="Deporte"
                                    className="h-[440px] w-[480px] object-cover rounded-sm" />
                            </div>
                        </div>
                    </section>
                    {/* <QueEsElDeporte /> */}
                </TabsContent>
                <TabsContent value="legal">
                    <section id="legal-basis" className="py-16 px-6 md:py-8">
                        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="flex justify-center  ">
                                <ClubIcon className="h-24 w-24 text-primary" />
                            </div>
                            <div className="">
                                <h2 className="text-2xl font-medium mb-4">Legislación Deportiva</h2>
                                <div className="flex flex-col gap-2">
                                    <p className="text-muted-foreground text-justify">
                                        El acceso al deporte es un derecho cultural universal que el Estado está obligado a garantizar para todos los ciudadanos, tal como lo establece la Constitución de la República de Panamá: "Artículo 86.
                                        <span className="italic ml-1 text-sm">El Estado fomentará el desarrollo de la cultura física mediante instituciones deportivas, de enseñanza y de recreación que serán reglamentadas por la Ley.</span>"
                                    </p>
                                    <p className="text-muted-foreground  text-justify">
                                        En varios países, como Colombia, Perú y México, este derecho está reconocido como fundamental, inherente a la dignidad humana, y contempla el acceso de todas las personas a la cultura física y a la práctica deportiva. De manera similar, en Chile se reconoce el derecho de cada persona a la educación física y al deporte, esenciales para el desarrollo integral de su personalidad.
                                    </p>
                                    <p className="text-muted-foreground  text-justify">
                                        Nuestros instrumentos legales establecen los principios, derechos y deberes de atletas, entrenadores y organizaciones deportivas. Además, regulan la creación de federaciones, la organización de eventos deportivos y la promoción de la actividad física en la población.                                    </p>
                                    <p className="text-muted-foreground  text-justify">
                                        Pandeportes es la entidad responsable de supervisar el desarrollo del deporte a nivel nacional, apoyando a las federaciones y gestionando recursos para mejorar infraestructuras y programas deportivos.                                    </p>

                                    <h3 className="text-3xl font-medium mt-6">Fundamento Legal</h3>

                                    {leyes.map((ley, index) => (
                                        <LeyesList key={index} title={ley.title} pdfFile={ley.pdfFile} />
                                    )
                                    )}
                                </div>
                            </div>

                            {/* <div className="order-1 md:order-2 flex justify-center bg-red-200">
                                <img
                                    className=""
                                    src="/placeholder.svg"
                                    width="200"
                                    height="200"
                                    alt="Legal Basis"
                                    style={{ aspectRatio: "200/200", objectFit: "cover" }}
                                />
                            </div> */}
                        </div>
                    </section>
                </TabsContent>
                {/* <TabsContent value="instituciones">Change your password here.</TabsContent> */}
            </Tabs>
        </div>
    )
}

export default Deporte