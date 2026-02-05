import { MessageSquareText, Download } from "lucide-react";
import { LinkedinIcon, GithubIcon  } from "../icons/index.jsx";
import CountUp from '../common/CountUp';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
    return (
        <section id="hero"
            className="relative  min-h-screen pt-40 md:pt-40 lg:pt-40 xl:pt-40 2xl:pt-[200px]  scroll-mt-60">
            <div
                className="flex z-10  flex-col mx-auto text-center space-y-5 md:space-y-8 xl:space-y-5 max-w-100 md:max-w-200 lg:max-w-250">
                <h1
                    data-aos="fade-up"
                    className="text-5xl md:text-6xl lg:text-6xl text-primary font-bold text-shadow-lg/40 max-md:px-4"><span
                        className="text-text">Hola, soy </span>
                    <TypeAnimation
                        sequence={[
                            'Agustín',
                            1000,
                            'Agustín Terrera',
                            1000,
                            'Agustín Terrera Cárdenas',  
                            2000,
                            'Desarrollador',  
                            1000,
                            'Analista',
                            1000,
                            'Lic. en Informática',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="text-primary"
                    />
                </h1>
                <h2
                    data-aos="fade-up"
                    className="text-lg md:text-xl lg:text-2xl text-text text-shadow-lg/40"><span>Lic.
                        en
                        Informática</span> & <span>Desarrollador
                            de
                            Software</span></h2>
                <div
                    data-aos="fade-up"
                    className="max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto text-sm md:text-base lg:text-lg ">
                    <p
                        className="text-text/80 text-shadow-lg/40 mb-4">Desarrollador
                        de software desde Santiago
                        del Estero, Argentina. Trabajo con
                        JavaScript, React y Node.js construyendo
                        aplicaciones
                        que resuelven problemas.

                    </p>

                    <p
                        className="text-text/85 text-shadow-lg/40">Me
                        motivan dos ideas: <br />
                        "Si puedes imaginarlo, puedes programarlo" y
                        <br /> "Cada problema es una
                        oportunidad de aprendizaje."
                    </p>
                </div>
                <div
                    data-aos="fade-up"
                    className="flex flex-col md:flex-row space-x-4 max-md:space-y-4 font-medium items-center text-sm  justify-center mt-3 ">
                    <div
                        className="flex md:flex-row space-x-4 items-center">
                        <a href="/public/docs/CV_Agustin_Terrera_G.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex px-2 py-2 items-center rounded-sm text-bg bg-primary space-x-1 hover:bg-primary/90 shadow-lg/30">
                            <Download className="text-bg " />
                            <span>Currículum Vitae</span></a>
                        <a href="#contact"
                            className="inline-flex items-center border border-stone-600 bg-secondary/70 px-2 py-2 rounded-sm space-x-1 hover:text-text/90 shadow-lg/30">
                            <MessageSquareText className="text-text" />
                            <span>Contactar</span></a>
                    </div>
                    <div
                        className="flex md:flex-row space-x-4 items-center justify-center">
                        <a
                            href="http://www.linkedin.com/in/agustin-terrera"
                            target="_blank"
                            rel="noopener noreferrer">
                            <LinkedinIcon className="fill-text hover:text-text/90 drop-shadow-lg/60 h-8 w-8" />
                        </a>
                        <a href="https://github.com/AgustinTerrera"
                            target="_blank"
                            rel="noopener noreferrer">
                            <GithubIcon className="text-text hover:text-text/90 drop-shadow-lg/60 h-8 w-8" />
                        </a>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    className="grid grid-cols-3 gap-4 pt-20 md:max-lg:pt-10   lg:mx-60">
                    <div className="text-center">
                        <div
                            className="text-primary font-bold text-2xl md:text-4xl lg:text-3xl"><CountUp from={0}
                                to={2}
                                separator=","
                                direction="up"
                                duration={2}
                                className="count-up-text"
                                startCounting={false} />+</div>
                        <div
                            className="text-text/70 text-lg lg:text-xl">Experiencia</div>
                    </div>
                    <div className="text-center">
                        <div
                            className="text-primary font-bold text-2xl md:text-4xl lg:text-3xl"><CountUp from={0}
                                to={10}
                                separator=","
                                direction="up"
                                duration={2}
                                className="count-up-text"
                                startCounting={false} />+</div>
                        <div
                            className="text-text/70 text-lg lg:text-xl">Proyectos</div>
                    </div>
                    <div className="text-center">
                        <div
                            className="text-primary font-bold text-2xl md:text-4xl lg:text-3xl"><CountUp from={0}
                                to={10}
                                separator=","
                                direction="up"
                                duration={2}
                                className="count-up-text"
                                startCounting={false} />+</div>
                        <div
                            className="text-text/70 text-lg lg:text-xl">Aportes</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;