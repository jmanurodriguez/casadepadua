import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const stats = [
    { value: "98", label: "Años de historia" },
    { value: "3", label: "Deportes principales" },
    { value: "+1000", label: "Socios actuales" }
];

export default function Centenary() {
    useScrollAnimation();

    return (
        <section className="py-20 bg-casa-black text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 relative animate-on-scroll">
                        <div className="absolute -top-5 -left-5 w-32 h-32 bg-casa-yellow rounded-full opacity-10"></div>
                        <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 relative z-10">
                            Camino al <span className="text-casa-yellow">Centenario</span>
                        </h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            El Club Atlético San Antonio de Padua fue fundado el{' '}
                            <span className="text-casa-yellow font-semibold">12 de diciembre de 1926</span>{' '}
                            como un equipo de fútbol al que le pusieron el nombre de Club Lancaster. 
                            Dos años después, en 1928, tomó el nombre que lo representa hasta el día de hoy: 
                            Club Atlético San Antonio de Padua.
                        </p>
                        
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Entre sus fundadores se encuentran Saverio Pagnotta, José Santos Farris, Manuel Ramón, 
                            Carlos y Juan Hermida, "Tito" Juinsse, Guillermo Baldatti, Enrique Oltruba, Alvarado, 
                            Espinosa y Arce. Estos pioneros recurrieron al cercano Ituzaingó Golf Club para adquirir 
                            sus primeras camisetas, confeccionadas con los colores que hoy son emblema del club: 
                            amarillo, negro y violeta.
                        </p>
                        
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Ubicado en la calle Independencia 725, Barrio Landaburu de San Antonio de Padua, el CASA 
                            se transformó rápidamente de un simple club de fútbol a una institución barrial completa, 
                            donde se practican diversos deportes y se realizan múltiples actividades sociales y culturales, 
                            como los tradicionales festejos de carnaval.
                        </p>
                        
                        <div className="flex space-x-4">
                            {stats.map((stat, index) => (
                                <React.Fragment key={stat.label}>
                                    {index > 0 && <div className="w-px bg-gray-700"></div>}
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-casa-yellow">{stat.value}</div>
                                        <div className="text-gray-400 text-sm">{stat.label}</div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    
                    <div className="md:w-1/2 relative animate-on-scroll" style={{ animationDelay: '300ms' }}>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-casa-purple rounded-full opacity-10"></div>
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                            <img 
                                src="https://res.cloudinary.com/djt5usq8q/image/upload/v1744663878/Club_CASA_de_Padua_01_emnk5a.jpg"
                                alt="Club CASA de Padua histórico" 
                                className="w-full"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-casa-black/70 to-transparent pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="inline-block bg-casa-yellow px-4 py-1 text-casa-black text-sm font-bold rounded-full mb-3">
                                    1926
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Nuestros orígenes</h3>
                                <p className="text-white/90">Imagen histórica del Club Atlético San Antonio de Padua</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-12">
                    <a 
                        href="https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_San_Antonio_de_Padua" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 bg-white text-casa-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/103px-Wikipedia-logo-v2.svg.png" 
                            alt="Wikipedia Logo" 
                            className="w-6 h-6"
                        />
                        <span className="font-medium">Ver en Wikipedia</span>
                    </a>
                </div>
            </div>
        </section>
    );
}