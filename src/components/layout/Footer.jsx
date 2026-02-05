import { MapPin, Mail, Download } from "lucide-react";
import { LinkedinIcon, GithubIcon  } from "../icons/index.jsx";

function Footer() {
    return (
        <footer
            className="z-10 bg-bg border-t border-secondary/50">
            <div
                className="container mx-auto px-4 max-md:px-8 py-12">
                <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-8">
                    <div className="col-span-3 md:col-span-2">
                        <h4
                            className="text-lg md:text-2xl font-bold mb-4">Agustín
                            Terrera Cárdenas</h4>
                        <p
                            className="text-text/50 text-sm md:text-base mb-4">Licenciado
                            en Informática & Desarrollador de
                            Software</p>
                        <div className="flex space-x-3 mb-4">
                            <a
                                className="text-sm"
                                href="http://www.linkedin.com/in/agustin-terrera"
                                target="_blank">
                                <LinkedinIcon className="h-8 w-8 text-text/50 hover:text-primary transition-all duration-200" />
                            </a>
                            <a
                                className=" text-sm "
                                href="https://github.com/AgustinTerrera"
                                target="_blank">
                                <GithubIcon className="h-8 w-8 text-text/50 hover:text-primary transition-all duration-200" />
                            </a>
                            <a
                                href="/docs/CV_Agustin_Terrera_G.pdf"
                                target="_blank"
                                className="text-sm ">
                                <Download className="h-8 w-8 text-text/50 hover:text-primary transition-all duration-200 " />
                            </a>
                        </div>
                        <div
                            className="space-y-2 text-xs md:text-sm text-text/50 ">
                            <div className="flex items-center">
                                <MapPin className="h-6 w-6 mr-2 text-text/50" />
                                Santiago
                                del Estero, Argentina</div>
                            <div className="flex items-center">
                                <Mail className="h-6 w-6 mr-2 text-text/50" />

                                agustin.terrera.cardenas@gmail.com
                            </div>

                        </div>
                    </div>
                    <div
                        className="col-end-1 md:col-span-2 mx-auto text-right max-sm:text-left  md:text-left">
                        <h5
                            className="font-semibold mb-4">Enlaces</h5>
                        <ul className="space-y-2">
                            <li
                                className="text-text/50 hover:text-primary text-sm transition-all duration-200"><a
                                    href="#hero">Inicio</a></li>
                            <li
                                className="text-text/50 hover:text-primary text-sm transition-all duration-200"><a
                                    href="#about">Sobre
                                    mi</a></li>
                            <li
                                className="text-text/50 hover:text-primary text-sm transition-all duration-200"><a
                                    href="#skills">Habilidades</a></li>
                            <li
                                className="text-text/50 hover:text-primary text-sm transition-all duration-200"><a
                                    href="#projects">Proyectos</a></li>
                            <li
                                className="text-text/50 hover:text-primary text-sm transition-all duration-200"><a
                                    href="#contributions">Aportes</a></li>
                            <li
                                className="text-text/50 hover:text-primary text-sm transition-all duration-200"><a
                                    href="#contact">Contacto</a></li>
                        </ul>

                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer;