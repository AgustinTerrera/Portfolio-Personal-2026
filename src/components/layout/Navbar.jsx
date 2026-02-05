import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from "react";

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollingDown, setScrollingDown] = useState(false);
    const hideTimeoutRef = useRef(null);  

    const getDesktopLinkClasses = (section) => {
        const baseClasses = "px-1 py-0.5 transition-all"
        const activeClasses = "bg-primary text-bg rounded-md"
        const hoverClasses = "hover:bg-primary hover:text-bg hover:rounded-md"

        return `${baseClasses} ${activeSection === section ? activeClasses : hoverClasses}`
    }

    const getMobileLinkClasses = (section) => {
        const baseClasses = "rounded-lg px-3 py-2 transition-all"
        const activeClasses = "bg-primary text-bg"
        const hoverClasses = "hover:bg-primary hover:text-bg"

        return `${baseClasses} ${activeSection === section ? activeClasses : hoverClasses}`
    }

    useEffect(() => {
        let ticking = false

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY

                    if (currentScrollY > 100) {
                        if (currentScrollY > lastScrollY) {
                            setScrollingDown(true)
                            setIsVisible(false)
                        } else {
                            setScrollingDown(false)
                            setIsVisible(true)
                        }
                    } else {
                        setScrollingDown(false)
                        setIsVisible(true)
                    }

                    setLastScrollY(currentScrollY)
                    ticking = false
                })

                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    const handleMouseEnter = () => {
        if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current)
            hideTimeoutRef.current = null
        }
        setIsVisible(true)
    }

    const handleMouseLeave = () => {
        if (window.scrollY > 100 && scrollingDown) {
            hideTimeoutRef.current = setTimeout(() => {
                setIsVisible(false)
                hideTimeoutRef.current = null
            }, 300)
        }
    }

    useEffect(() => {
        return () => {
            if (hideTimeoutRef.current) {
                clearTimeout(hideTimeoutRef.current)
            }
        }
    }, [])

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions)
        const sections = document.querySelectorAll('section[id]')
        sections.forEach((section) => observer.observe(section))

        return () => {
            sections.forEach((section) => observer.unobserve(section))
        }
    }, []);

    return (
        <>
            <div
                className={`fixed top-0 left-0 right-0 h-24 z-40 ${isVisible ? 'pointer-events-none' : 'pointer-events-auto'
                    }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />

            
            <header
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`fixed top-0 left-0 right-0 bg-bg backdrop-blur-sm z-50 border-b border-secondary shadow-lg transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <div className="container mx-auto px-6 py-3">
                    <div className="text-base md:text-xl">
                        <nav
                            className="hidden md:flex justify-center items-center mx-auto gap-3 font-semibold ">
                            <a
                                className={getDesktopLinkClasses('hero')}
                                href="#hero">Inicio</a>
                            <a
                                className={getDesktopLinkClasses('about')}
                                href="#about">Sobre mi</a>
                            <a
                                className={getDesktopLinkClasses('skills')}
                                href="#skills">Habilidades</a>
                            <a
                                className={getDesktopLinkClasses('projects')}
                                href="#projects">Proyectos</a>
                            <a
                                className={getDesktopLinkClasses('contributions')}
                                href="#contributions">Aportes</a>
                            <a
                                className={getDesktopLinkClasses('contact')}
                                href="#contact">Contacto</a>
                        </nav>
                        <div
                            className="flex justify-end items-center">
                            <div>
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="md:hidden p-2 hover:bg-accent/50 rounded-lg transition-all"
                                >
                                    {isMobileMenuOpen ? (
                                        <X className="h-7 w-7" />
                                    ) : (
                                        <Menu className="h-7 w-7" />
                                    )}
                                </button>
                            </div>
                        </div>
                        <nav className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="flex flex-col space-y-2 pt-4 pb-2 font-semibold">
                                <a
                                    href="#hero"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={getMobileLinkClasses('hero')}
                                >
                                    Inicio
                                </a>
                                <a
                                    href="#about"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={getMobileLinkClasses('about')}
                                >
                                    Sobre mi
                                </a>
                                <a
                                    href="#skills"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={getMobileLinkClasses('skills')}
                                >
                                    Habilidades
                                </a>
                                <a
                                    href="#projects"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={getMobileLinkClasses('projects')}
                                >
                                    Proyectos
                                </a>
                                <a
                                    href="#contributions"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={getMobileLinkClasses('contributions')}
                                >
                                    Aportes
                                </a>
                                <a
                                    href="#contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={getMobileLinkClasses('contact')}
                                >
                                    Contacto
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;