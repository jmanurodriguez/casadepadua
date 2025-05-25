import { useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import '../../styles/canva-overrides.css';

export default function ValoresYDias() {
    useScrollAnimation();

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <main className="pt-20 bg-white">
            <section 
            className="text-white py-24 relative overflow-hidden"
            style={{
                backgroundImage: "url('https://res.cloudinary.com/djt5usq8q/image/upload/v1746028606/backgroundweb_CASA_uvquqh.png')",
            }}
        >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
                    <div className="container mx-auto px-4 relative z-20">
                        <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
                            <div className="md:w-1/3">
                                <img 
                                    src="https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,w_200/v1744476120/logo_rvlpvo.webp"
                                    alt="CASA de Padua Logo"
                                    className="w-48 mx-auto md:mx-0 animate-float"
                                />
                            </div>
                            <div className="md:w-2/3 text-center md:text-left">
                                <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
                                    Valores y Días de Entrenamiento
                                </h1>
                                <p className="text-lg md:text-xl opacity-90">
                                    Conocé los horarios y valores de todas nuestras actividades deportivas.
                                    En CASA de Padua, nos dedicamos a formar deportistas y, sobre todo, buenas personas.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
                    <div className="container mx-auto px-4 max-w-4xl relative z-10">
                        <div className="bg-white rounded-2xl overflow-hidden animate-on-scroll shadow-[0_20px_50px_rgba(83,28,122,0.1)] hover:shadow-[0_30px_60px_rgba(83,28,122,0.15)] transition-all duration-500">
                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-casa-yellow opacity-10 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-casa-purple opacity-10 rounded-full blur-2xl"></div>
                            
                            <div className="relative">
                                <div className="embed-responsive relative w-full canva-embed group" style={{ 
                                    paddingTop: '125%',
                                    maxWidth: '100%',
                                    margin: '0 auto',
                                    overflow: 'hidden'
                                }}>
                                    {/* Overlay de carga */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-casa-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    <iframe 
                                        className="absolute top-0 left-0 w-full h-full scale-[1.02] transition-transform duration-700 group-hover:scale-[1.015]"
                                        src="https://www.canva.com/design/DAGkprlgk9I/F8MO3RvJlsIr32LCzewuKA/view?embed" 
                                        allowFullScreen={true}
                                        loading="lazy"
                                        title="Valores y Días de Entrenamiento CASA Padua"
                                        style={{
                                            border: 'none',
                                            background: 'white',
                                            transform: 'scale(1.02)',
                                            transformOrigin: 'center',
                                            willChange: 'transform'
                                        }}
                                    ></iframe>

                                    {/* Indicadores de navegación personalizados */}
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-2 h-2 rounded-full bg-white/50"></div>
                                        <div className="w-2 h-2 rounded-full bg-white"></div>
                                        <div className="w-2 h-2 rounded-full bg-white/50"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-gradient-to-b from-gray-50 to-white">
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-600 text-sm font-medium">
                                        Presentación por Prensa-Comerciales CASA de Padua
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 rounded-full bg-casa-purple/5 hover:bg-casa-purple/10 transition-colors">
                                            <i className="fas fa-expand text-casa-purple"></i>
                                        </button>
                                        <button className="p-2 rounded-full bg-casa-purple/5 hover:bg-casa-purple/10 transition-colors">
                                            <i className="fas fa-share-alt text-casa-purple"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 space-y-8 animate-on-scroll">
                            <div className="text-center max-w-3xl mx-auto">
                                <h2 className="text-3xl font-montserrat font-bold text-casa-purple mb-4">
                                    ¿Tenés dudas sobre los horarios o valores?
                                </h2>
                                <p className="text-lg text-gray-700 mb-8">
                                    Acercate al club o contactanos por cualquiera de nuestros medios.
                                    ¡Estamos para ayudarte!
                                </p>
                                <div className="flex justify-center gap-4">
                                    <a 
                                        href="#contacto" 
                                        className="bg-casa-yellow text-casa-black font-montserrat px-8 py-4 rounded-full hover:bg-casa-purple hover:text-casa-white transition-all duration-300 shadow-lg inline-flex items-center"
                                    >
                                        <i className="fas fa-envelope mr-2"></i>
                                        Contactanos
                                    </a>
                                    <a 
                                        href="https://www.instagram.com/casapadua/"
                                        target="_blank"
                                        rel="noopener noreferrer" 
                                        className="bg-casa-purple text-white font-montserrat px-8 py-4 rounded-full hover:bg-casa-yellow hover:text-casa-black transition-all duration-300 shadow-lg inline-flex items-center"
                                    >
                                        <i className="fab fa-instagram mr-2"></i>
                                        Seguinos
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </main>
        </>
    );
}