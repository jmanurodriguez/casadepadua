import { useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function GimnasiaRitmica() {
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
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
                            <div className="md:w-1/3">
                                <img 
                                    src="https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,w_200/v1744476120/logo_rvlpvo.webp"
                                    alt="CASA de Padua Logo"
                                    className="w-48 mx-auto md:mx-0"
                                />
                            </div>
                            <div className="md:w-2/3 text-center md:text-left">
                                <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
                                    Gimnasia Rítmica
                                </h1>
                                <p className="text-lg md:text-xl opacity-90">
                                    Próximamente, página en construcción
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4 max-w-3xl text-center">
                        <div className="bg-white p-8 rounded-lg shadow-lg animate-on-scroll">
                            <div className="mb-8">
                                <i className="fas fa-ribbon text-6xl text-casa-purple mb-4"></i>
                                <h2 className="text-3xl font-montserrat font-bold text-casa-purple mb-4">
                                    Página en Construcción
                                </h2>
                                <p className="text-lg text-gray-700">
                                    Estamos trabajando para brindarte toda la información sobre nuestro equipo de gimnasia rítmica.
                                    Muy pronto podrás conocer horarios, categorías y más.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a 
                                    href="/"
                                    className="inline-block bg-casa-yellow text-casa-black font-montserrat px-8 py-4 rounded-full hover:bg-casa-purple hover:text-casa-white transition-all duration-300 shadow-lg"
                                >
                                    Volver al Inicio
                                </a>
                                <a 
                                    href="https://www.instagram.com/gimnasiartistica.casadepadua/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center bg-casa-purple text-white font-montserrat px-8 py-4 rounded-full hover:bg-casa-yellow hover:text-casa-black transition-all duration-300 shadow-lg"
                                >
                                    <i className="fab fa-instagram mr-2"></i>
                                    Seguinos en Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}