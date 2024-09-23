import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import QueEsElDeporte from "./QueEsElDeporte"
import { ClubIcon } from "lucide-react"
import ArticulosDeporte from "./ArticulosDeporte"
import Deportistas from "./Deportistas"


const Deporte = () => {
    return (
        <div className="flex  mt-6">

            <Tabs defaultValue="account" className="w-screen ">
                <TabsList className="flex  justify-end ">
                    <div className="">

                        <TabsTrigger value="deportistas">Deportistas</TabsTrigger>
                        <TabsTrigger value="articulos">Artículos</TabsTrigger>
                        <TabsTrigger value="queEsElDeporte">¿Qué es el deporte?</TabsTrigger>
                        <TabsTrigger value="legal">Fundamento Legal</TabsTrigger>
                        {/* <TabsTrigger value="instituciones">Instituciones Panameñas</TabsTrigger> */}
                    </div>
                </TabsList>
                <TabsContent value="deportistas">
                    <Deportistas />
                </TabsContent>
                <TabsContent value="articulos">
                    <ArticulosDeporte />
                </TabsContent>
                <TabsContent value="queEsElDeporte">
                    <section id="what-is-sport" className="py-12 px-6 md:py-12">
                        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">¿Qué es el deporte?</h2>
                                <p className="text-muted-foreground">
                                    El deporte es una herramienta esencial para el desarrollo integral de la sociedad, ya que fomenta la salud, la inclusión y el espíritu comunitario. Más allá de ser una actividad física, el deporte impulsa valores como la disciplina, el respeto y el trabajo en equipo, contribuyendo a la formación de ciudadanos responsables y comprometidos. Los panameños, con su ADN de campeones, han demostrado su capacidad para destacar en diversas disciplinas, llevando en alto el nombre de nuestro país. Por ello, es fundamental impulsar el deporte a nivel nacional.
                                </p>
                            </div>
                            <div className="flex justify-center ">
                                <ClubIcon className="h-24 w-24 text-primary" />
                            </div>
                        </div>
                    </section>
                    {/* <QueEsElDeporte /> */}
                </TabsContent>
                <TabsContent value="legal">
                    <section id="legal-basis" className="py-12 px-6 md:py-12">
                        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="flex justify-center  ">
                                <ClubIcon className="h-24 w-24 text-primary" />
                            </div>
                            <div className="">
                                <h2 className="text-3xl font-bold mb-4">Fundamento Legal</h2>
                                <div className="flex flex-col gap-2">

                                    {/* <p className="text-muted-foreground">
                                    El deporte en Panamá se rige por un marco legal que incluye la Ley General de Deporte y la Ley del
                                    Instituto Panameño de Deportes. Estas leyes establecen los principios, derechos y deberes de los
                                    atletas, entrenadores y organizaciones deportivas.
                                    </p> */}
                                    <p className="text-muted-foreground">
                                        El deporte en Panamá está regulado por la Ley General de Deporte y la Ley del Instituto Panameño de Deportes (Pandeportes), que establecen los principios, derechos y deberes de atletas, entrenadores y organizaciones deportivas. Estas leyes promueven la actividad física en todos los niveles, garantizando el acceso equitativo a instalaciones deportivas y programas de apoyo.
                                    </p>
                                    <p className="text-muted-foreground">
                                        Pandeportes es la entidad responsable de supervisar el desarrollo del deporte a nivel nacional, apoyando a las federaciones y gestionando recursos para mejorar infraestructuras y programas deportivos.
                                    </p>
                                    <p className="text-muted-foreground">
                                        Las leyes también protegen los derechos de los deportistas, asegurando condiciones justas de entrenamiento y acceso a oportunidades de desarrollo. Asimismo, promueven la inclusión del deporte en la educación y destacan su papel en la salud pública.
                                    </p>
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