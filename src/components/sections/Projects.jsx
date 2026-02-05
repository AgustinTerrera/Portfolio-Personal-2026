import ProjectCard from "../ui/ProjectCard";
import { useState } from "react";
import projectsData from "../../data/projects.json";
import useResponsiveLimit from "../../hooks/useResponsiveLimit";
import ModalDrawer from "../ui/ModalDrawer";
import { Box } from "lucide-react";
function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const limit = useResponsiveLimit();

    const handleCardClick = (project) => {
        setSelectedProject(project)
    };


    const displayedProjects = showAll ? projectsData : projectsData.slice(0, limit);


    return (
        <section id="projects"
            className="relative z-20  min-h-screen backdrop-blur-sm bg-bg-secondary/50 pt-32 pb-10">
            <div className="container px-4 max-w-7xl mx-auto">
                <div
                    data-aos="fade-up"
                    className="text-center">
                    <div
                        className="flex items-center justify-center mb-6">
                        <h3
                            className="text-4xl font-bold">Proyectos</h3>


                    </div>
                    <div className="max-w-2xl mx-auto mb-16">
                        <p
                            className="text-sm md:text-lg  text-text/50">
                            Aquí encontrarás proyectos que he desarrollado con React, Node.js y JavaScript. Son aplicaciones web que creé para resolver problemas reales, siempre buscando código limpio y un diseño que realmente funcione.
                        </p>
                    </div>
                </div>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 p-6 md:p-16 lg:p-2 ">
                    {displayedProjects.length === 0 ? (
                        <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                            <div className="text-primary mb-4">
                                <Box className="h-16 w-16"/>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Proyectos en construcción</h4>
                            <p className="text-text/50 max-w-md">
                                Estoy trabajando en nuevos proyectos que pronto estarán disponibles aquí.
                            </p>
                        </div>
                    ) : (
                        displayedProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={handleCardClick}
                            />
                        ))
                    )}
                </div>
                {projectsData.length > limit && (
                    <div
                        data-aos="zoom-in"
                        className="text-center mt-4">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="flex items-center justify-center mx-auto px-3 py-1 border  text-primary rounded-2xl border-primary hover:bg-primary/10 transition-all duration-200"
                        >
                            {showAll
                                ? 'Mostrar menos'
                                : `Mostrar más (+${projectsData.length - limit})`
                            }
                        </button>
                    </div>
                )}


            </div>
            <ModalDrawer
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                data={selectedProject}
                type="project"
            />

        </section>
    )
}

export default Projects;