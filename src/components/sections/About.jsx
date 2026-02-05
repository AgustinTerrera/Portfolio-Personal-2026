import { GraduationCap, Calendar, Building, MapPin, BriefcaseBusiness, LaptopMinimal } from "lucide-react";


function About() {
    return (
        <section id="about"
            className="relative z-10  backd min-h-screen backdrop-blur-sm bg-bg-secondary/50 pt-32 pb-10">
            <div className="container px-4 max-w-5xl mx-auto">
                <div
                    data-aos="fade-up"
                    className="text-center">
                    <h3 className="text-4xl font-bold mb-6">Sobre mi -
                        Timeline</h3>
                    <div
                        className="max-w-lg md:max-w-2xl mx-auto mb-16">
                        <p
                            className="text-base md:text-lg text-text/50">
                            Un recorrido por mi formación como
                            Licenciado en Informática
                            y mi experiencia en la Cámara de
                            Comercio Exterior.
                        </p>
                    </div>
                </div>
                <div className="container mx-auto text-left">
                    <ul className="max-sm:mx-5">
                        <li
                            data-aos="fade-up">
                            <div className="relative flex gap-3 pb-5 items-start hover:border-accent transition-all duration-200">
                                <div
                                    className="before:absolute before:left-[7.4px] before:top-[35.5px] before:-bottom-7 before:w-px before:bg-text ">
                                    <div className="flex-shrink-0 mt-7 relative z-10">
                                        <svg viewBox="0 0 100 100"
                                            className="fill-accent"
                                            width="15px"
                                            height="15px"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="50" cy="50"
                                                r="50" />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className="border rounded-2xl w-full px-6 border-secondary bg-bg/40 py-6 space-y-3 hover:scale-y-105 hover:border-primary transition-all duration-200 ">
                                    <div
                                        className="flex items-center space-x-2.5">
                                        <div
                                            className=" flex items-center text-text/50 text-sm ">
                                            <Calendar className="items-center mr-1.5 h-5 w-5 text-text/50" />
                                            <p
                                                className="max-md:text-xs text-sm">Mar.
                                                2021 - Abr. 2025</p>
                                        </div>
                                        <span
                                            className="rounded-xl border text-primary border-primary flex space-x-2 px-2 items-center text-sm bg-primary/10">
                                            <GraduationCap className="text-primary h-5 w-5" />
                                            <p>Estudios</p>
                                        </span>
                                    </div>
                                    <h4
                                        className="text-text text-base md:text-xl font-semibold">Licenciatura
                                        en Informática</h4>
                                    <div
                                        className="flex flex-wrap gap-4 text-text/50 text-xs md:text-sm">
                                        <div
                                            className="flex items-center">
                                            <Building className="items-center mr-1.5 h-5 w-5 text-text/50" />
                                            Universidad Empresarial
                                            Siglo 21
                                        </div>
                                        <div
                                            className="flex items-center">
                                            <MapPin className="items-center mr-1.5 h-5 w-5 text-text/50" />
                                            Santiago del Estero,
                                            Argentina
                                        </div>
                                    </div>
                                    <p
                                        className="text-text/50 max-md:text-sm">Enfoque
                                        en la fundamentación de teoría y
                                        practica del desarrollo de
                                        software, análisis de sistemas y
                                        resolución de problemas
                                        complejos mediante
                                        tecnología.</p>
                                    <div>
                                        <h5
                                            className="text-text font-semibold mb-2 max-md:text-sm">Puntos
                                            claves:</h5>
                                        <ul
                                            className="space-y-1 max-md:text-sm">
                                            <li
                                                className="flex  items-center text-text/50 "><span
                                                    className="w-1 h-1 bg-primary rounded-full mr-3 mt-0.5 flex-shrink-0"></span><span>Análisis
                                                        y diseño de
                                                        sistemas</span></li>
                                            <li
                                                className="flex  items-center text-text/50 "><span
                                                    className="w-1 h-1 bg-primary rounded-full mr-3 mt-0.5 flex-shrink-0"></span><span>Desarrollo
                                                        de software (Tesis -
                                                        Prototipo)</span></li>
                                            <li
                                                className="flex  items-center text-text/50 "><span
                                                    className="w-1 h-1 bg-primary rounded-full mr-3 mt-0.5 flex-shrink-0"></span><span>Planificación
                                                        y gestión de
                                                        proyectos</span></li>
                                            <li
                                                className="flex  items-center text-text/50 "><span
                                                    className="w-1 h-1 bg-primary rounded-full mr-3 mt-0.5 flex-shrink-0"></span><span>Arquitectura
                                                        y optimización de
                                                        soluciones</span></li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Scrum/XP
                                        </span>
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">MySQL
                                        </span>
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Node.js
                                        </span>
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Java
                                        </span>
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Prototipo
                                        </span>
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">DBMS
                                        </span>
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">IA
                                        </span>
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Gestión
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </li>
                        <li data-aos="fade-up">
                            <div className="relative flex gap-3 pb-5 items-start  hover:border-accent transition-all duration-200">

                                <div
                                    className="before:absolute before:left-[7.4px] before:top-[35.5px] before:-bottom-7  before:w-px before:bg-text ">
                                    <div className="flex-shrink-0 mt-7 relative z-10">
                                        <svg viewBox="0 0 100 100"
                                            className="fill-accent"
                                            width="15px"
                                            height="15px"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="50" cy="50"
                                                r="50" />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className="border rounded-2xl w-full px-6 border-secondary bg-bg/40 py-6 space-y-3 hover:scale-y-105 hover:border-primary transition-all duration-200">
                                    <div
                                        className="flex items-center space-x-2.5">
                                        <div
                                            className="flex items-center text-text/50 text-sm ">
                                            <Calendar className="items-center mr-1.5 h-5 w-5 text-text/50" />
                                            <p
                                                className="max-md:text-xs text-sm">Abr.
                                                2024 - Jul. 2024</p>
                                        </div>
                                        <div
                                            className="flex flex-col sm:flex-row max-sm:ml-3 items-center justify-center max-sm:space-y-2.5 sm:space-x-2.5">
                                            <span
                                                className=" rounded-xl border text-primary border-primary flex space-x-2 px-2 items-center text-sm bg-primary/10">
                                                <BriefcaseBusiness className="text-primary h-5 w-5" />
                                                <p>Trabajos</p>
                                            </span>
                                            <span
                                                className=" rounded-xl border text-text/50 border-text/50 flex space-x-2 px-2 items-center text-sm bg-secondary/40">
                                                <LaptopMinimal className="text-text/50 h-5 w-5" />
                                                <p>Remoto</p>
                                            </span>
                                        </div>
                                    </div>
                                    <h4
                                        className="text-text text-base md:text-xl font-semibold">Practica
                                        Profesional - Pasantía</h4>
                                    <div
                                        className="flex flex-wrap gap-4 text-text/50  text-xs md:text-sm">
                                        <div
                                            className=" flex items-center">
                                            <Building className="items-center mr-1.5 h-5 w-5 text-text/50" />
                                            Cámara de Comercio Exterior
                                            de San Francisco y la Region
                                        </div>
                                        <div
                                            className="flex items-center">
                                            <MapPin className="items-center mr-1.5 h-5 w-5 text-text/50" />
                                            San Francisco, Córdoba,
                                            Argentina
                                        </div>
                                    </div>
                                    <p
                                        className="text-text/50 max-md:text-sm">Primera
                                        experiencia profesional
                                        aplicando conocimientos en un
                                        entorno real. Soporte funcional
                                        con <span
                                            className="italic">Salesforce
                                            CRM</span> y documentación
                                        de
                                        procesos para optimizar flujos
                                        de trabajo.</p>
                                    <div>
                                        <h5
                                            className="text-text font-semibold mb-2 max-md:text-sm">Puntos
                                            claves:</h5>
                                        <ul
                                            className="space-y-1 max-md:text-sm">
                                            <li
                                                className="flex  items-center text-text/50 "><span
                                                    className="w-1 h-1 bg-primary rounded-full mr-3 mt-0.5 shrink-0"></span><span>Validación
                                                        funcional de
                                                    <span
                                                        className="italic">Salesforce
                                                        CRM</span></span></li>
                                            <li
                                                className="flex  items-center text-text/50 "><span
                                                    className="w-1 h-1 bg-primary rounded-full mr-3 mt-0.5 shrink-0"></span><span>Elaboración
                                                        de documentación
                                                        técnica y manuales
                                                        de
                                                        usuario</span></li>
                                            <li
                                                className="flex  items-center text-text/50 "><span
                                                    className="w-1 h-1 bg-primary rounded-full mr-3 mt-0.5 shrink-0"></span><span>Relevamiento
                                                        y análisis de
                                                        procesos</span></li>
                                            <li
                                                className="flex  items-center text-text/50 "><span
                                                    className="w-1 h-1 bg-primary rounded-full mr-3 mt-0.5 shrink-0"></span><span>Resolución
                                                        de incidencias
                                                        funcionales</span></li>
                                            <li
                                                className="flex  items-center text-text/50 "><span
                                                    className="w-1 h-1 bg-primary rounded-full mr-3 mt-0.5 shrink-0"></span><span>Capacitación
                                                        de personal no
                                                        técnico</span></li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Salesforce
                                        </span>
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Documentación
                                        </span>
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Capacitación
                                        </span>
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Análisis
                                            Funcional
                                        </span>
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Testing
                                        </span>
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Comunicación
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li
                            data-aos="fade-up">
                            <div className="relative flex gap-3 pb-5 items-start  hover:border-accent transition-all duration-200">
                                <div
                                    className="before:absolute before:left-[7.4px] before:top-[35.5px] before:bottom-7 before:w-px  before:bg-gradient-to-b before:from-text before:to-transparent">
                                    <div className="flex-shrink-0 mt-7 relative z-10">
                                        <svg viewBox="0 0 100 100"
                                            className="fill-accent"
                                            width="15px"
                                            height="15px"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="50" cy="50"
                                                r="50" />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className="border rounded-2xl w-full px-6 border-secondary bg-bg/40 py-6 space-y-3 hover:scale-y-105 hover:border-primary transition-all duration-200">
                                    <div
                                        className="flex items-center space-x-2.5">
                                        <div
                                            className=" flex items-center text-text/50  text-sm ">
                                            <Calendar className="items-center mr-1.5 h-5 w-5 text-text/50" />
                                            <p
                                                className="max-md:text-xs text-sm">Mar.
                                                2021 - Mar. 2024</p>
                                        </div>
                                        <span
                                            className="rounded-xl border text-primary border-primary flex space-x-2 px-2 items-center text-sm bg-primary/10">
                                            <GraduationCap className="text-primary h-5 w-5" />
                                            <p>Estudios</p>
                                        </span>
                                    </div>
                                    <h4
                                        className="text-text text-base md:text-xl  font-semibold">Analista
                                        Universitario en Sistemas de
                                        Computación</h4>
                                    <div
                                        className="flex flex-wrap gap-4 text-text/50 text-xs md:text-sm">
                                        <div
                                            className=" flex items-center">
                                            <Building className="items-center mr-1.5 h-5 w-5 text-text/50" />
                                            Universidad Empresarial
                                            Siglo 21
                                        </div>
                                        <div
                                            className=" flex items-center">
                                            <MapPin className="items-center mr-1.5 h-5 w-5 text-text/50" />
                                            Santiago del Estero,
                                            Argentina
                                        </div>
                                    </div>
                                    <p
                                        className="text-text/50 max-md:text-sm">Formación
                                        técnica enfocada en
                                        programación, bases de datos y
                                        desarrollo web, con énfasis en
                                        la construcción de soluciones
                                        funcionales y escalables.</p>
                                    <div>
                                        <h5
                                            className="text-text font-semibold mb-2 max-md:text-sm">Puntos
                                            claves:</h5>
                                        <ul
                                            className="space-y-1 max-md:text-sm">
                                            <li
                                                className="flex  items-center text-text/50  "><span
                                                    className="w-1 h-1 bg-primary rounded-full mr-3 mt-0.5 shrink-0"></span><span>Programación
                                                        orientada a
                                                        objetos</span></li>
                                            <li
                                                className="flex  items-center text-text/50 "><span
                                                    className="w-1 h-1 bg-primary rounded-full mr-3 mt-0.5 shrink-0"></span><span>Algoritmos
                                                        y estructura de
                                                        datos</span></li>
                                            <li
                                                className="flex  items-center text-text/50 "><span
                                                    className="w-1 h-1 bg-primary rounded-full mr-3 mt-0.5 shrink-0"></span><span>Desarrollo
                                                        de
                                                        software</span></li>
                                            <li
                                                className="flex  items-center text-text/50 "><span
                                                    className="w-1 h-1 bg-primary rounded-full mr-3 mt-0.5 shrink-0"></span><span>Documentación
                                                        técnica</span></li>
                                            <li
                                                className="flex  items-center text-text/50 "><span
                                                    className="w-1 h-1 bg-primary rounded-full mr-3 mt-0.5 shrink-0"></span><span>Modelado
                                                        de bases de
                                                        datos</span></li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Java
                                        </span>
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">C/C++
                                        </span>
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Linux
                                        </span>
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">SQL
                                        </span>
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">JavaScript
                                        </span>
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Python
                                        </span>
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">HTML/CSS
                                        </span>
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Git/GitHub
                                        </span>
                                        <span
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">UML/DBMS
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </li>
                    </ul>

                </div>

            </div>

        </section>
    )
}
export default About;