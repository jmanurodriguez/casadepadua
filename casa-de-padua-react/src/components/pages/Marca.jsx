import { useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import '../../styles/canva-overrides.css';

export default function Marca() {
    useScrollAnimation();

    useEffect(() => {
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
                                    Manual de Marca
                                </h1>
                                <p className="text-lg md:text-xl opacity-90">
                                    Nuestra identidad visual cuenta una historia de más de 100 años.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-lg mx-auto mb-16 animate-on-scroll">
                            <p className="text-xl leading-relaxed mb-6">
                                En CASA de Padua, nuestra identidad visual es el reflejo de más de un siglo de historia, pasión y compromiso con el deporte y la comunidad. Va más allá de simples elementos gráficos: es la expresión de nuestra esencia como institución.
                            </p>
                            <p className="text-xl leading-relaxed mb-6">
                                Este manual de marca es una guía fundamental que establece los lineamientos para el uso correcto de nuestra identidad visual. Aquí encontrarás las pautas sobre el uso de nuestro escudo, los colores que nos representan, las tipografías oficiales y los elementos que hacen única nuestra comunicación.
                            </p>
                            <p className="text-xl leading-relaxed">
                                Es una herramienta esencial para todos aquellos que forman parte de la familia CASA: dirigentes, deportistas, socios, personal, proveedores y colaboradores. Su correcta aplicación nos ayuda a mantener una imagen coherente y profesional en todos nuestros canales de comunicación.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="bg-white shadow-xl rounded-lg overflow-hidden animate-on-scroll">
                            <div className="embed-responsive relative w-full canva-embed" style={{ 
                                paddingTop: '56.25%', // Cambiando a 16:9 aspect ratio
                                maxWidth: '100%',
                                margin: '0 auto',
                                overflow: 'hidden'
                            }}>
                                <iframe 
                                    className="absolute top-0 left-0 w-full h-full scale-[1.03]"
                                    src="https://www.canva.com/design/DAGkJWmZBrQ/EZOV2gpYwk9dGXPquv7KSw/view?embed" 
                                    allowFullScreen={true}
                                    loading="lazy"
                                    title="Manual de Marca CASA Padua"
                                    style={{
                                        border: 'none',
                                        background: 'white',
                                        transform: 'scale(1.03)',
                                        transformOrigin: 'center'
                                    }}
                                ></iframe>
                            </div>
                            <div className="p-6 bg-gray-50">
                                <p className="text-center text-gray-600 text-sm">
                                    Manual de Marca por Comunicación CASA de Padua
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 space-y-8 animate-on-scroll">
                            <div className="text-center max-w-3xl mx-auto">
                                <h2 className="text-3xl font-montserrat font-bold text-casa-purple mb-4">
                                    ¿Necesitás usar nuestra marca?
                                </h2>
                                <p className="text-lg text-gray-700 mb-8">
                                    Si necesitás utilizar nuestra identidad visual, contactate con el área de Comunicación.
                                </p>
                                <div className="flex justify-center gap-4">
                                    <a 
                                        href="mailto:comunicacion@casadepadua.com.ar" 
                                        className="bg-casa-yellow text-casa-black font-montserrat px-8 py-4 rounded-full hover:bg-casa-purple hover:text-casa-white transition-all duration-300 shadow-lg inline-flex items-center"
                                    >
                                        <i className="fas fa-envelope mr-2"></i>
                                        Contactar
                                    </a>
                                    <a 
                                        href="/manual-de-marca.pdf" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-casa-purple text-white font-montserrat px-8 py-4 rounded-full hover:bg-casa-yellow hover:text-casa-black transition-all duration-300 shadow-lg inline-flex items-center"
                                    >
                                        <i className="fas fa-download mr-2"></i>
                                        Descargar Manual
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