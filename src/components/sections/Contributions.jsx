import ContributionCard from "../ui/ContributionCard";
import { useState } from "react";
import ContributionData from "../../data/contributions.json";
import UseResponsiveLimit from "../../hooks/useResponsiveLimit";
import ModalDrawer from "../ui/ModalDrawer";
import { Clock } from "lucide-react";

function Contributions() {
    const [selectedContribution, setSelectedContribution] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const limit = UseResponsiveLimit();

    const handleCardClick = (contribution) => {
        setSelectedContribution(contribution)
    };


    const displayedContributions = showAll ? ContributionData : ContributionData.slice(0, limit);



    return (
        <section id="contributions"
            className="relative z-20 min-h-screen pt-32 pb-10">
            <div className="container px-4 max-w-7xl mx-auto">
                <div
                    data-aos="fade-up" className="text-center z-10 ">
                    <div
                        className="flex items-center justify-center mb-6">
                        <h3
                            className="text-4xl font-bold">Aportes</h3>

                    </div>
                    <p
                        className="text-sm md:text-lg max-w-2xl mx-auto text-text/50 mb-16">
                        Mis contribuciones a proyectos open source y colaboraciones con otros desarrolladores. Me gusta compartir lo que sé y aprender de la comunidad en cada oportunidad que tengo.
                    </p>
                </div>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 p-6 md:p-16 lg:p-2">
                    {displayedContributions.length === 0 ? (
                        <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                            <div className="text-primary mb-4">
                                <Clock className="h-16 w-16" />
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Próximamente</h4>
                            <p className="text-text/50 max-w-md">
                                Estoy preparando documentación de mis aportes a proyectos open source. Vuelve pronto para ver las actualizaciones.
                            </p>
                        </div>
                    ) : (
                        displayedContributions.map((contribution) => (
                            <ContributionCard
                                key={contribution.id}
                                contribution={contribution}
                                onClick={handleCardClick}
                            />
                        ))
                    )}

                </div>
                {ContributionData.length > limit && (
                    <div
                        data-aos="zoom-in"
                        className="text-center mt-4">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="flex items-center justify-center mx-auto px-3 py-1 border  text-primary rounded-2xl border-primary hover:bg-primary/10 transition-all duration-200"
                        >
                            {showAll
                                ? 'Mostrar menos'
                                : `Mostrar más (+${ContributionData.length - limit})`
                            }
                        </button>
                    </div>
                )}

            </div>
            <ModalDrawer
                isOpen={!!selectedContribution}
                onClose={() => setSelectedContribution(null)}
                data={selectedContribution}
                type="contribution"
            />

        </section>
    )
}

export default Contributions;