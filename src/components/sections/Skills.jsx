import { Database, GitFork, Flag, Layers, Hammer, Languages, Plus } from "lucide-react";

import { SalesforceIcon, NodeJsIcon, JavascriptIcon, ReactIcon, DockerIcon, TailwindIcon, BootstrapIcon, UbuntuIcon, ManageAccountIcon } from "../icons/index.jsx";


function Skills() {
    return (
        <section id="skills" className="relative  z-10  min-h-screen pt-32 pb-10">
            <div className="container px-4 max-w-7xl mx-auto">
                <div
                className="text-center">
                    <div
                    data-aos="fade-up"
                        className="flex items-center justify-center mb-6">
                        <h3
                            className="text-4xl font-bold ">Habilidades</h3>
                    </div>
                    <div
                    data-aos="fade-up" className="max-w-4xl mx-auto mb-16 space-y-2">
                        <p
                            className="text-sm md:text-lg text-text/50">
                            Mi enfoque de desarrollo se apoya en
                            JavaScript y su ecosistema para el front
                            y backend, complementado con
                            herramientas de gestión que facilitan la
                            colaboración y el seguimiento de
                            proyectos.
                        </p>
                        <p
                            className="text-sm md:text-lg  text-text/50">
                            Cada tecnología cumple un
                            propósito específico en el ciclo de vida
                            del software.
                            Acá están las herramientas que domino y
                            las que estoy incorporando activamente.
                        </p>
                    </div>
                    <div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div
                        data-aos="fade-right" className="md:col-span-3"
                            >
                            <div className="backdrop-blur-sm flex flex-col space-y-2 border border-accent p-4 rounded-lg bg-bg-secondary/40  hover:scale-105  transition-all duration-200">
                                <div
                                    className="flex flex-row items-center mb-1">
                                    <div
                                        className="p-1 md:p-2 bg-primary/10 rounded-lg mr-2 md:mr-3 shrink-0">
                                        <Layers className="text-primary h-5 w-5" />
                                    </div>
                                    <div
                                        className="flex-1 text-left items-center">
                                        <h4
                                            className="text-xl font-semibold mb-1">Stack actual</h4>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col  md:flex-row max-md:space-y-3 md:space-x-3 ">
                                
                                    <div className="group px-2 py-1 w-full bg-primary/10 hover:bg-primary/20 rounded-md border border-primary/20 transition-all duration-300 cursor-pointer">
                                        <div className="flex items-center justify-center gap-2">
                                            <JavascriptIcon className="h-4 w-4 text-primary" />
                                            <span className="text-primary text-sm">Javascript</span>
                                            <span className=" inline-block max-w-0 overflow-hidden group-hover:max-w-[100px] whitespace-nowrap text-xs font-semibold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ease-out ">
                                                • Intermedio
                                            </span>
                                        </div>
                                    </div>
                                    <div className="group px-2 py-1 w-full bg-primary/10 hover:bg-primary/20 rounded-md border border-primary/20 transition-all duration-300 cursor-pointer">
                                        <div className="flex items-center justify-center gap-2">
                                            <ReactIcon className="h-4 w-4 text-primary" />
                                            <span className="text-primary text-sm">React.js</span>
                                            <span className=" inline-block max-w-0 overflow-hidden group-hover:max-w-[100px] whitespace-nowrap text-xs font-semibold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ease-out ">
                                                • Intermedio
                                            </span>
                                        </div>
                                    </div>
                                    <div className="group px-2 py-1 w-full bg-primary/10 hover:bg-primary/20 rounded-md border border-primary/20 transition-all duration-300 cursor-pointer">
                                        <div className="flex items-center justify-center gap-2">
                                            <NodeJsIcon className="h-4 w-4 text-primary" />
                                            <span className="text-primary text-sm">Node.js</span>
                                            <span className=" inline-block max-w-0 overflow-hidden group-hover:max-w-[100px] whitespace-nowrap text-xs font-semibold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ease-out ">
                                                • Intermedio
                                            </span>
                                        </div>
                                    </div>
                                    <div className="group px-2 py-1 w-full bg-primary/10 hover:bg-primary/20 rounded-md border border-primary/20 transition-all duration-300 cursor-pointer">
                                        <div className="flex items-center justify-center gap-2">
                                            <Database className="h-4 w-4 text-primary" />
                                            <span className="text-primary text-sm">MySQL</span>
                                            <span className=" inline-block max-w-0 overflow-hidden group-hover:max-w-[100px] whitespace-nowrap text-xs font-semibold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ease-out ">
                                                • Intermedio
                                            </span>
                                        </div>
                                    </div>
                                    <div className="group px-2 py-1 w-full bg-primary/10 hover:bg-primary/20 rounded-md border border-primary/20 transition-all duration-300 cursor-pointer">
                                        <div className="flex items-center justify-center gap-2">
                                            <Database className="h-4 w-4 text-primary" />
                                            <span className="text-primary text-sm">MongoDB</span>
                                            <span className=" inline-block max-w-0 overflow-hidden group-hover:max-w-[100px] whitespace-nowrap text-xs font-semibold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ease-out ">
                                                • Intermedio
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div
                        data-aos="fade-up" >
                            <div className="flex flex-col hover:scale-105 backdrop-blur-sm space-y-2 border border-secondary p-4 rounded-lg bg-bg-secondary/40 hover:border-primary transition-all duration-200">
                                <div
                                    className="flex flex-row items-center mb-1">
                                    <div
                                        className="p-1 md:p-2 bg-primary/10 rounded-lg mr-2 md:mr-3 shrink-0">
                                        <Hammer className="text-primary h-5 w-5" />
                                    </div>
                                    <div
                                        className="flex text-left items-center">
                                        <h4
                                            className="text-lg font-semibold mb-1">Herramientas de desarrollo</h4>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col w-full space-y-3 ">
                                    <div className="group px-2 py-1  bg-primary/10 hover:bg-primary/20 rounded-md border border-primary/20 transition-all duration-300 cursor-pointer">
                                        <div className="flex items-center justify-center gap-2">
                                            <BootstrapIcon className="h-4 w-4 text-primary" />
                                            <span className="text-primary text-sm">Bootstrap</span>
                                            <span className=" inline-block max-w-0 overflow-hidden group-hover:max-w-[100px] whitespace-nowrap text-xs font-semibold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ease-out ">
                                                • Intermedio
                                            </span>
                                        </div>
                                    </div>
                                    <div className="group px-2 py-1  bg-primary/10 hover:bg-primary/20 rounded-md border border-primary/20 transition-all duration-300 cursor-pointer">
                                        <div className="flex items-center justify-center gap-2">
                                            <TailwindIcon className="h-4 w-4 text-primary" />
                                            <span className="text-primary text-sm">Tailwind</span>
                                            <span className=" inline-block max-w-0 overflow-hidden group-hover:max-w-[100px] whitespace-nowrap text-xs font-semibold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ease-out ">
                                                • Intermedio
                                            </span>
                                        </div>
                                    </div>
                                    <div className="group px-2 py-1  bg-primary/10 hover:bg-primary/20 rounded-md border border-primary/20 transition-all duration-300 cursor-pointer">
                                        <div className="flex items-center justify-center gap-2">
                                            <DockerIcon className="h-4 w-4 text-primary" />
                                            <span className="text-primary text-sm">Docker</span>
                                            <span className=" inline-block max-w-0 overflow-hidden group-hover:max-w-[100px] whitespace-nowrap text-xs font-semibold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ease-out ">
                                                • Básico
                                            </span>
                                        </div>
                                    </div>
                                    <div className="group px-2 py-1  bg-primary/10 hover:bg-primary/20 rounded-md border border-primary/20 transition-all duration-300 cursor-pointer">
                                        <div className="flex items-center justify-center gap-2">
                                            <GitFork className="h-4 w-4 text-primary" />
                                            <span className="text-primary text-sm">Git/GitHub</span>
                                            <span className=" inline-block max-w-0 overflow-hidden group-hover:max-w-[100px] whitespace-nowrap text-xs font-semibold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ease-out ">
                                                • Intermedio
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div
                        data-aos="fade-up"
                            >
                            <div className="flex flex-col hover:scale-105 backdrop-blur-sm space-y-2 border border-secondary p-4 rounded-lg bg-bg-secondary/40 hover:border-primary transition-all duration-200">
                                <div
                                    className="flex flex-row items-center mb-1">
                                    <div
                                        className="p-1 md:p-2 bg-primary/10 rounded-lg mr-2 md:mr-3 shrink-0">
                                        <Plus className="text-primary h-5 w-5" />
                                    </div>
                                    <div
                                        className="flex text-left items-center">
                                        <h4
                                            className="text-lg font-semibold mb-1">Otras tecnologías</h4>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col w-full space-y-3">
                                    <div className="group px-2 py-1  bg-primary/10 hover:bg-primary/20 rounded-md border border-primary/20 transition-all duration-300 cursor-pointer">
                                        <div className="flex items-center justify-center gap-2">
                                            <SalesforceIcon className="h-4 w-4 text-primary" />
                                            <span className="text-primary text-sm">Salesforce</span>
                                            <span className=" inline-block max-w-0 overflow-hidden group-hover:max-w-[100px] whitespace-nowrap text-xs font-semibold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ease-out ">
                                                • Básico
                                            </span>
                                        </div>
                                    </div>
                                    <div className="group px-2 py-1  bg-primary/10 hover:bg-primary/20 rounded-md border border-primary/20 transition-all duration-300 cursor-pointer">
                                        <div className="flex items-center justify-center gap-2">
                                            <UbuntuIcon className="h-4 w-4 text-primary" />
                                            <span className="text-primary text-sm">Ubuntu Linux</span>
                                            <span className=" inline-block max-w-0 overflow-hidden group-hover:max-w-[100px] whitespace-nowrap text-xs font-semibold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ease-out ">
                                                • Básico
                                            </span>
                                        </div>
                                    </div>
                                    <div className="group px-2 py-1  bg-primary/10 hover:bg-primary/20 rounded-md border border-primary/20 transition-all duration-300 cursor-pointer">
                                        <div className="flex items-center justify-center gap-2">
                                            <Database className="h-4 w-4 text-primary" />
                                            <span className="text-primary text-sm">Oracle SQL</span>
                                            <span className=" inline-block max-w-0 overflow-hidden group-hover:max-w-[100px] whitespace-nowrap text-xs font-semibold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ease-out ">
                                                • Básico
                                            </span>
                                        </div>
                                    </div>
                                    <div className="group px-2 py-1  bg-primary/10 hover:bg-primary/20 rounded-md border border-primary/20 transition-all duration-300 cursor-pointer">
                                        <div className="flex items-center justify-center gap-2">
                                            <ManageAccountIcon className="h-4 w-4 text-primary" />
                                            <span className="text-primary text-sm">Jira/Trello</span>
                                            <span className=" inline-block max-w-0 overflow-hidden group-hover:max-w-[100px] whitespace-nowrap text-xs font-semibold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ease-out ">
                                                • Básico
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div
                        data-aos="fade-up"
                            >
                            <div className="flex flex-col hover:scale-105 backdrop-blur-sm space-y-2 border border-secondary p-4 rounded-lg bg-bg-secondary/40 hover:border-primary transition-all duration-200">
                                <div
                                    className="flex flex-row items-center mb-1">
                                    <div
                                        className="p-1 md:p-2 bg-primary/10 rounded-lg mr-2 md:mr-3 shrink-0">
                                        <Languages className="text-primary h-5 w-5" />
                                    </div>
                                    <div
                                        className="flex text-left items-center">
                                        <h4
                                            className="text-lg font-semibold mb-1">Idiomas</h4>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col w-full space-y-3">
                                    <div className="group px-2 py-1  bg-primary/10 hover:bg-primary/20 rounded-md border border-primary/20 transition-all duration-300 cursor-pointer">
                                        <div className="flex items-center justify-center gap-2">
                                            <Flag className="h-4 w-4 text-primary" />
                                            <span className="text-primary text-sm">Español</span>
                                            <span className=" inline-block max-w-0 overflow-hidden group-hover:max-w-[100px] whitespace-nowrap text-xs font-semibold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ease-out ">
                                                • Nativo
                                            </span>
                                        </div>
                                    </div>
                                    <div className="group px-2 py-1  bg-primary/10 hover:bg-primary/20 rounded-md border border-primary/20 transition-all duration-300 cursor-pointer">
                                        <div className="flex items-center justify-center gap-2">
                                            <Flag className="h-4 w-4 text-primary" />
                                            <span className="text-primary text-sm">Ingles</span>
                                            <span className=" inline-block max-w-0 overflow-hidden group-hover:max-w-[100px] whitespace-nowrap text-xs font-semibold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ease-out ">
                                                • Básico
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Skills;