
import { Hash, FolderOpen } from "lucide-react";

function ProjectCard({ project, onClick }) {
    return (
        <article
            data-aos="fade-up"  
            data-aos-delay="50"  
            onClick={() => onClick(project)}
            >
            <div className="overflow-hidden flex flex-row md:flex-col h-full rounded-lg border border-secondary bg-bg shadow-xs hover:border-primary hover:scale-105 transition-all duration-200 cursor-pointer">
                <div className="relative shrink-0 border-b border-secondary">
                    <img alt="Imagen Proyecto"
                        src={project.image}
                        className="h-full w-32 md:w-full md:h-44 object-cover" />
                    <span
                        className="absolute top-2 left-2 bg-primary border border-secondary p-2 rounded-lg text-xs">
                        <FolderOpen className="h-5 w-5 text-bg" />
                    </span>
                    <span
                        className="absolute max-md:bottom-2 max-md:left-2 md:top-2 md:right-2 bg-secondary text-primary px-2 py-1 rounded-xl border border-secondary text-xs font-semibold">
                        {project.status}
                    </span>
                </div>
                <div className="p-4 sm:p-6">
                    <div className="text-left">
                        <h3
                            className="text-sm md:text-lg font-semibold">
                            {project.title}
                        </h3>
                        <p
                            className=" text-xs mt-2 line-clamp-3 md:text-sm/relaxed text-text/50">
                            {project.description}
                        </p>
                    </div>
                    <div
                        className="flex flex-wrap gap-2 border-t border-secondary pt-2 mt-2">
                        {project.categories.map((category, index) => (
                            <span key={index}
                                className="border border-secondary bg-secondary/50 rounded-sm px-2 text-xs md:text-sm ">
                                <p
                                    className="text-text/50">{category}</p>
                            </span>
                        ))}
                    </div>
                    <div
                        className="flex flex-wrap gap-2 border-t border-secondary pt-2 mt-2">
                        {project.technologies.map((tech, index) => (
                            <span key={index}
                                className="flex items-center justify-center space-x-0.5 px-1 py-1 bg-primary/10 text-primary rounded text-xs">
                                <Hash className="h-4 w-4 text-primary" />
                                <span>{tech}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    )
}
export default ProjectCard;