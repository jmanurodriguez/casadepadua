import { useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Novedades() {
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
                                <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 animate-fade-in">
                                    Novedades
                                </h1>
                                <p className="text-lg md:text-xl opacity-90 animate-slide-up">
                                    Mantente al día con las últimas noticias y eventos del club
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
                            {/* Tarjeta de Noticia 1 */}
                            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="relative h-56 overflow-hidden">
                                    <img 
                                        src="https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,w_400,h_300/v1744476121/basquet_dn8fsa.jpg"
                                        alt="Básquet CASA"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-0 right-0 bg-casa-yellow text-casa-black font-bold px-4 py-2 rounded-bl-xl">
                                        12 Mayo 2025
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 rounded-full bg-casa-purple/20 flex items-center justify-center mr-3">
                                            <i className="fas fa-basketball-ball text-casa-purple text-lg"></i>
                                        </div>
                                        <span className="text-sm text-gray-500">Básquet</span>
                                    </div>
                                    <h3 className="font-montserrat text-xl font-bold mb-3">
                                        Campeonato Regional de Básquet
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Nuestro equipo Sub-17 se consagró campeón en el torneo regional. 
                                        ¡Felicitaciones a todo el equipo y cuerpo técnico por este gran logro!
                                    </p>
                                    <a 
                                        href="#" 
                                        className="inline-flex items-center text-casa-purple font-semibold hover:text-casa-yellow transition-colors duration-300"
                                    >
                                        Leer más
                                        <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </div>

                            {/* Tarjeta de Noticia 2 */}
                            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="relative h-56 overflow-hidden">
                                    <img 
                                        src="https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,w_400,h_300/v1744476121/voley_li8dbt.jpg"
                                        alt="Vóley CASA"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-0 right-0 bg-casa-yellow text-casa-black font-bold px-4 py-2 rounded-bl-xl">
                                        5 Mayo 2025
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 rounded-full bg-casa-purple/20 flex items-center justify-center mr-3">
                                            <i className="fas fa-volleyball-ball text-casa-purple text-lg"></i>
                                        </div>
                                        <span className="text-sm text-gray-500">Vóley</span>
                                    </div>
                                    <h3 className="font-montserrat text-xl font-bold mb-3">
                                        Torneo Interescolar de Vóley
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Se realizó con éxito el torneo interescolar en nuestras instalaciones 
                                        con la participación de 12 escuelas.
                                    </p>
                                    <a 
                                        href="#" 
                                        className="inline-flex items-center text-casa-purple font-semibold hover:text-casa-yellow transition-colors duration-300"
                                    >
                                        Leer más
                                        <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </div>

                            {/* Tarjeta de Noticia 3 */}
                            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="relative h-56 overflow-hidden">
                                    <img 
                                        src="https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,w_400,h_300/v1744476121/gimnasia-ritmica_oygwjk.jpg"
                                        alt="Gimnasia Rítmica CASA"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-0 right-0 bg-casa-yellow text-casa-black font-bold px-4 py-2 rounded-bl-xl">
                                        28 Abril 2025
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 rounded-full bg-casa-purple/20 flex items-center justify-center mr-3">
                                            <i className="fas fa-ribbon text-casa-purple text-lg"></i>
                                        </div>
                                        <span className="text-sm text-gray-500">Gimnasia Rítmica</span>
                                    </div>
                                    <h3 className="font-montserrat text-xl font-bold mb-3">
                                        Exhibición de Gimnasia Rítmica
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Nuestras gimnastas realizaron una brillante presentación en el Centro Cultural de Padua.
                                    </p>
                                    <a 
                                        href="#" 
                                        className="inline-flex items-center text-casa-purple font-semibold hover:text-casa-yellow transition-colors duration-300"
                                    >
                                        Leer más
                                        <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <button 
                                className="bg-casa-purple text-white font-montserrat px-8 py-4 rounded-full hover:bg-casa-yellow hover:text-casa-black transition-all duration-300 shadow-lg animate-on-scroll"
                            >
                                Cargar más noticias
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}