import { Mail, Phone, CircleArrowUp, MessageSquareWarning, Copy, MapPin, Clock, SquareArrowOutUpRight, Check, LoaderCircle } from "lucide-react";
import { LinkedinIcon  } from "../icons/index.jsx";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";


function Contact() {
    const [copiedField, setCopiedField] = useState(null)


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)
    const recaptchaRef = useRef(null);

    useEffect(() => {
        if (submitStatus === 'success' || submitStatus === 'error') {
            const timer = setTimeout(() => {
                setSubmitStatus(null)
            }, 3000) 
            
            return () => clearTimeout(timer)  
        }
    }, [submitStatus])

    const handleCopy = (text, fieldName) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopiedField(fieldName)
                setTimeout(() => {
                    setCopiedField(null)
                }, 1000)
            })
            .catch(err => {
                console.log('Error al copiar: ', err)
            })
    }


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setSubmitStatus(null)


        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Por favor completa todos los campos')
            setIsLoading(false)
            return
        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            alert('Por favor ingresa un email válido')
            setIsLoading(false)
            return
        }

        const captchaValue = recaptchaRef.current.getValue()
        if (!captchaValue) {
            alert('Por favor completa el reCAPTCHA')
            setIsLoading(false)
            return
        }

        try {

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )

            setSubmitStatus('success')

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
            recaptchaRef.current.reset()
        } catch (error) {
            console.error('Error al enviar email:', error)
            setSubmitStatus('error')
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <section id="contact"
            className="relative z-10  min-h-screen backdrop-blur-sm bg-bg-secondary/50 pt-32 pb-10 px-5 ">
            <div className="container mx-auto">
                <div
                    data-aos="fade-up"
                    className="text-center mb-10 ">
                    <h3
                        className="text-4xl font-bold">Contacto</h3>
                </div>
                <div
                    className="grid max-xl:grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-0 md:px-20 lg:px-32 lg:max-w-350 mx-auto">
                    <div
                        data-aos="fade-right"
                        className="flex flex-col gap-6 border rounded-2xl xl:rounded-tr-none xl:rounded-br-none backdrop-blur-xl  bg-bg/40 border-primary/80">

                        <div className="p-8">
                            <div
                                data-aos="fade-right"

                                className="flex items-center mb-2">
                                <Mail className="text-primary h-6 w-6 mr-3" />

                                <h4
                                    className="text-lg font-semibold">Enviar
                                    Correo</h4>
                            </div>
                            <form className="mt-5" onSubmit={handleSubmit} >
                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-y-4 lg:gap-y-12 gap-x-6">
                                    <div data-aos="fade-right"
                                        data-aos-delay="150">
                                        <label htmlFor="name"
                                            className="block text-sm font-medium mb-2">Nombre
                                            <span
                                                className="text-primary">*</span></label>
                                        <input type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="flex h-9 w-full rounded-md border px-3 py-1 text-sm outline-none focus:border-primary border-secondary bg-bg placeholder:text-text/50"
                                            required
                                            placeholder="Escribe tu nombre..."
                                        />

                                    </div>
                                    <div data-aos="fade-right"
                                        data-aos-delay="150">
                                        <label htmlFor="email"
                                            className="block text-sm font-medium mb-2 ">Email
                                            <span
                                                className="text-primary">*</span></label>
                                        <input type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className=" flex h-9 w-full rounded-md border px-3 py-1 text-sm outline-none focus:border-primary border-secondary bg-bg placeholder:text-text/50"
                                            required
                                            placeholder="ejemplo@mail.com"
                                        />

                                    </div>
                                    <div
                                        data-aos="fade-right"
                                        data-aos-delay="150"
                                        className="md:col-span-2 overflow-auto">
                                        <div>
                                            <label
                                                htmlFor="subject"
                                                className="block text-sm font-medium mb-2">Asunto
                                                <span
                                                    className="text-primary">*</span></label>
                                            <select
                                                className="w-full py-1 px-3 text-sm border outline-none border-secondary focus:border-primary h-9 rounded-lg text-text bg-bg cursor-pointer"
                                                name="subject"
                                                id="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required>
                                                <option>Selecciona
                                                    una
                                                    opción</option>
                                                <option
                                                    value="Consulta">Consulta</option>
                                                <option
                                                    value="Trabajo">Trabajo</option>
                                                <option
                                                    value="Ayuda">Ayuda</option>
                                                <option
                                                    value="Consulta
                                                    por
                                                    proyecto">Consulta
                                                    por
                                                    proyecto</option>
                                                <option
                                                    value="Consulta
                                                    por
                                                    aporte">Consulta
                                                    por
                                                    aporte</option>
                                                <option
                                                    value="Otros">Otros</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div
                                        data-aos="fade-right"
                                        data-aos-delay="150"
                                        className="md:col-span-2 ">
                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="block text-sm font-medium mb-2">Descripción
                                                <span
                                                    className="text-primary">*</span></label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                value={formData.message}
                                                onChange={handleChange}

                                                className="w-full p-3 border border-secondary focus:border-primary focus:outline h-30 rounded-lg text-text bg-bg placeholder:text-text/50 "
                                                placeholder="Describe lo que necesitas..."
                                                required></textarea>
                                        </div>
                                    </div>
                                    <div
                                        data-aos="zoom-in"
                                        data-aos-delay="150"
                                        className="md:col-span-2 max-md:p-4 mx-auto">
                                        <ReCAPTCHA
                                            ref={recaptchaRef}
                                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                                            theme="dark"
                                        />

                                    </div>
                                    <div
                                        data-aos="fade-right"
                                        data-aos-delay="150"
                                        className="md:col-span-2 mb-2 w-full mx-auto">
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className=" flex border border-primary bg-primary text-bg rounded-lg py-2 px-6 h-10 items-center w-full justify-center hover:bg-primary/90 text-md font-semibold transition-all duration-200">
                                            {isLoading ? (
                                                <>
                                                    <span className="animate-spin mr-2"><LoaderCircle className="h-6 w-6 text-bg" /></span>
                                                    <span>Enviando...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <CircleArrowUp className="h-6 w-6 mr-2 text-bg" />
                                                    <span>Enviar</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    {submitStatus === 'success' && (
                                        <div className="md:col-span-2 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-500 text-center">
                                            ¡Mensaje enviado exitosamente! Te responderé pronto.
                                        </div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <div className="md:col-span-2 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-500 text-center">
                                            Error al enviar el mensaje. Por favor intenta de nuevo.
                                        </div>
                                    )}

                                </div>

                            </form>
                        </div>

                    </div>
                    <div
                        data-aos="fade-right"
                        className="flex flex-col gap-6 border rounded-2xl xl:rounded-tl-none xl:rounded-bl-none border-secondary backdrop-blur-sm bg-bg/50 pb-2">

                        <div className="pb-6 p-8 space-y-5">
                            <div
                                data-aos="fade-right"
                                data-aos-delay="100"
                                className="flex items-center mb-6">
                                <MessageSquareWarning className="text-primary h-6 w-6 mr-3" />

                                <h4

                                    className="text-base md:text-lg font-semibold">Información
                                    de Contacto</h4>
                            </div>
                            <div
                                data-aos="fade-right"
                                data-aos-delay="150"
                                className="flex flex-col gap-6 rounded-xl border bg-secondary/30 border-secondary hover:border-primary/50 transition-all duration-200 text-sm md:text-base">
                                <div className="p-3 md:p-4">
                                    <div
                                        className="flex items-start">
                                        <div
                                            className="p-2 md:p-3 bg-primary/10 rounded-lg mr-2 md:mr-4 shrink-0">

                                            <div>
                                                <Mail className="text-primary h-5 w-5" />
                                            </div>
                                        </div>
                                        <div
                                            className="flex-1 text-start">
                                            <h5
                                                className="font-semibold mb-1">Email</h5>
                                            <div
                                                className="flex items-center max-md:text-xs max-sm:wrap-anywhere ">
                                                <p className="text-primary mt-1 break-all">agustin.terrera.cardenas@gmail.com</p>
                                                <a>
                                                    {copiedField === 'email' ? (
                                                        <Check className="w-4 h-4 ml-2 text-green-500 " />

                                                    ) : (
                                                        <Copy className="w-4 h-4 ml-2 text-text/50 hover:text-text cursor-pointer" onClick={() => handleCopy('agustin.terrera.cardenas@gmail.com', 'email')} />

                                                    )}
                                                </a>
                                                <a href="mailto:agustin.terrera.cardenas@gmail.com" target="_blank" rel="noopener noreferrer">
                                                    <SquareArrowOutUpRight className="w-4 h-4 ml-2 text-text/50 hover:text-text" />
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div
                                data-aos="fade-right"
                                data-aos-delay="150"
                                className="flex flex-col gap-6 rounded-xl border bg-secondary/30 border-secondary hover:border-primary/50 transition-all duration-200 text-sm md:text-base">
                                <div className="p-3 md:p-4">
                                    <div
                                        className="flex items-start">
                                        <div
                                            className="p-2 md:p-3 bg-primary/10 rounded-lg mr-2 md:mr-4 shrink-0">
                                            <div>
                                                <Phone className="h-5 w-5 text-primary" />
                                            </div>
                                        </div>
                                        <div
                                            className="flex-1 text-start">
                                            <h5
                                                className="font-semibold mb-1">Teléfono</h5>

                                            <div
                                                className="flex items-center">
                                                <p className="text-primary mt-1">
                                                    (+54)
                                                    385-5905284
                                                </p>

                                                <a>
                                                    {copiedField === 'phone' ? (
                                                        <Check className="w-4 h-4 ml-2 text-green-500" />

                                                    ) : (
                                                        <Copy className="w-4 h-4 ml-2 text-text/50 hover:text-text cursor-pointer" onClick={() => handleCopy('+543855905284', 'phone')} />

                                                    )}

                                                </a>
                                                <a href="tel:+543855905284" target="_blank" rel="noopener noreferrer">
                                                    <SquareArrowOutUpRight className="w-4 h-4 ml-2 text-text/50 hover:text-text" />
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div
                                data-aos="fade-right"
                                data-aos-delay="150"
                                className="flex flex-col gap-6 rounded-xl border bg-secondary/30 border-secondary hover:border-primary/50 transition-all duration-200 text-sm md:text-base">
                                <div className="p-3 md:p-4">
                                    <div
                                        className="flex items-start">
                                        <div
                                            className="p-2 md:p-3 bg-primary/10 rounded-lg mr-2 md:mr-4 shrink-0">
                                            <div>
                                                <LinkedinIcon className="text-primary h-5 w-5" />
                                            </div>
                                        </div>
                                        <div
                                            className="flex-1 text-start">
                                            <h5
                                                className="font-semibold mb-1">LinkedIn</h5>

                                            <div
                                                className="flex items-center">
                                                <p className="text-primary mt-1 ">agustin-terrera</p>
                                                <a>
                                                    {copiedField === 'linkedin' ? (
                                                        <Check className="w-4 h-4 ml-2 text-green-500" />

                                                    ) : (
                                                        <Copy className="w-4 h-4 ml-2 text-text/50 hover:text-text cursor-pointer" onClick={() => handleCopy('agustin-terrera', 'linkedin')} />

                                                    )}

                                                </a>
                                                <a href="http://www.linkedin.com/in/agustin-terrera" target="_blank" rel="noopener noreferrer">
                                                    <SquareArrowOutUpRight className="w-4 h-4 ml-2 text-text/50 hover:text-text" />
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div
                                data-aos="fade-right"
                                data-aos-delay="150"
                                className="flex flex-col gap-6 rounded-xl border bg-secondary/30 border-secondary hover:border-primary/50 transition-all duration-200 text-sm md:text-base">
                                <div className="p-3 md:p-4">
                                    <div
                                        className="flex items-start">
                                        <div
                                            className="p-2 md:p-3 bg-primary/10 rounded-lg mr-2 md:mr-4 shrink-0">
                                            <div>
                                                <MapPin className="text-primary h-5 w-5" />
                                            </div>
                                        </div>
                                        <div
                                            className="flex-1 text-start">
                                            <h5
                                                className="font-semibold mb-1">Ubicación</h5>
                                            <p
                                                className="text-primary mt-1 font-medium">Disponible
                                                para
                                                re-ubicación</p>

                                            <p
                                                className="text-text/50 mt-1">Santiago
                                                del Estero,
                                                Argentina</p>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div
                                data-aos="fade-right"
                                data-aos-delay="150"
                                className="flex flex-col gap-6 rounded-xl border bg-secondary/30 border-secondary hover:border-primary/50 transition-all duration-200 text-sm md:text-base">
                                <div className="p-3 md:p-4">
                                    <div
                                        className="flex items-start">
                                        <div
                                            className="p-2 md:p-3 bg-primary/10 rounded-lg mr-2 md:mr-4 shrink-0">
                                            <div>
                                                <Clock className="h-5 w-5 text-primary" />
                                            </div>
                                        </div>
                                        <div
                                            className="flex-1 text-start">
                                            <h5
                                                className="font-semibold mb-1">Disponibilidad</h5>
                                            <p
                                                className="text-primary mt-1 font-medium">Disponible</p>
                                            <p
                                                className="text-text/50 mt-1 text-sm">Full-Time
                                                &
                                                Part-Time</p>

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
export default Contact;