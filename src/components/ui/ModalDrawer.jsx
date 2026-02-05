import { X, FolderCode, SquareArrowOutUpRight, FileText, Hash } from "lucide-react";
import Portal from "../common/Portal";

function ModalDrawer({ isOpen, onClose, data, type }) {

    if (!isOpen) return null

    return (
        <Portal>
        <div
        
        className="fixed inset-0 z-50 overflow-hidden text-text">

            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500"
            />

            <div
            data-aos="fade-left" className="absolute inset-0 pl-10 sm:pl-16"
                onClick={onClose}>
                <div className="ml-auto h-full max-w-md transform transition-transform duration-500 ease-in-out bg-bg shadow-xl"
                    onClick={(e) => e.stopPropagation()}>

                    <div className="absolute top-0 left-0 -ml-10 pt-4 pr-2">
                        <button
                            onClick={onClose}
                            className="rounded-md hover:text-primary"
                        >
                            <span className="sr-only">Cerrar</span>
                            <X className="h-8 w-8" />
                        </button>
                    </div>

                    <div className="relative flex h-full flex-col overflow-y-auto py-6">

                        <div className="px-4 sm:px-6">
                            <h4 className="text-lg font-bold border-b border-secondary p-3">
                                {type === 'project' ? 'Proyecto: ' : 'Aporte: '}
                                {data?.title}
                            </h4>

                            <div className="flex justify-between items-center mt-3">
                                <span className="bg-secondary/50 text-primary px-2 py-1 rounded-xl border border-secondary text-xs font-semibold">
                                    {data?.status}
                                </span>
                                <span className="text-xs text-text/50">
                                    {data?.date}
                                </span>
                            </div>
                        </div>

                        <div className="relative mt-3 flex-1 px-4 sm:px-6">
                            <img
                                src={data?.image}
                                alt={data?.title}
                                className="rounded-xl h-36 w-full object-cover"
                            />

                            <div className="flex flex-col space-y-2">

                                <div className="my-2 mt-5">
                                    <h5 className="text-sm font-semibold border-b border-secondary pb-4">
                                        Descripción
                                    </h5>
                                </div>
                                <div className="my-2 mb-3">
                                    <p className="text-xs md:text-sm text-text/50">
                                        {data?.detailedDescription}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 border-t border-secondary pt-2 mt-2">
                                    {data?.categories.map((category, index) => (
                                        <span key={index} className="border border-secondary bg-secondary/50 rounded-sm px-2 text-xs md:text-sm">
                                            <p className="text-text/50">{category}</p>
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 pb-4 text-sm border-t border-secondary pt-2 mt-2">
                                    {data?.technologies.map((tech, index) => (
                                        <span key={index} className="flex items-center justify-center space-x-0.5 px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                                            <Hash className="h-4 w-4 text-primary" />
                                            <span>{tech}</span>
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-3 my-2">
                                    {data?.repositoryUrl && (
                                        <a
                                            href={data.repositoryUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex justify-center border border-primary bg-primary/10 gap-2 p-3 rounded-lg items-center text-xs hover:bg-primary/20 transition-all duration-200"
                                        >
                                            <FolderCode className="h-5 w-5 text-primary" />
                                            <span>Repositorio</span>
                                        </a>
                                    )}

                                    {type === 'project' && data?.documentation && (
                                        <a
                                            href={data.documentation}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex justify-center border border-primary bg-primary/10 gap-2 p-3 rounded-lg items-center text-xs hover:bg-primary/20 transition-all duration-200"
                                        >
                                            <FileText className="h-5 w-5 text-primary" />
                                            <span>Documentación</span>
                                        </a>
                                    )}

                                    {type === 'project' && data?.liveUrl && (
                                        <a
                                            href={data.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex justify-center border border-primary bg-primary/10 gap-2 p-3 rounded-lg items-center text-xs hover:bg-primary/20 transition-all duration-200"
                                        >
                                            <SquareArrowOutUpRight className="h-5 w-5 text-primary" />
                                            <span>Ver Proyecto</span>
                                        </a>
                                    )}

                                    {type === 'contribution' && data?.contributionUrl && (
                                        <a
                                            href={data.contributionUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex justify-center border border-primary bg-primary/10 gap-2 p-3 rounded-lg items-center text-xs hover:bg-primary/20 transition-all duration-200"
                                        >
                                            <SquareArrowOutUpRight className="h-5 w-5 text-primary" />
                                            <span>Ver Aporte</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Portal>
    )
}

export default ModalDrawer