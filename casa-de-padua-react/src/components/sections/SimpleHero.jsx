import { useState, useEffect, useCallback } from 'react';

// Datos del carrusel
const slides = [
    {
        image: {
            desktop: "https://res.cloudinary.com/djt5usq8q/image/upload/v1744812494/PADUA-194_1_weef34.jpg",
            tablet: "https://res.cloudinary.com/djt5usq8q/image/upload/v1744812494/PADUA-194_1_weef34.jpg",
            mobile: "https://res.cloudinary.com/djt5usq8q/image/upload/v1744812494/PADUA-194_1_weef34.jpg"
        },
        title: "Básquet CASA de Padua",
        description: "Formando jugadores desde 1940",
        link: "https://www.instagram.com/basquet.casadepadua/",
        position: "center center"
    },
    {
        image: {
            desktop: "https://res.cloudinary.com/djt5usq8q/image/upload/v1748468270/voley2_g493wu.jpg",
            tablet: "https://res.cloudinary.com/djt5usq8q/image/upload/v1748468270/voley2_g493wu.jpg",
            mobile: "https://res.cloudinary.com/djt5usq8q/image/upload/v1748468270/voley2_g493wu.jpg"
        },
        title: "Vóley CASA de Padua",
        description: "El deporte que nos une",
        link: "https://www.instagram.com/voley.casadepadua/",
        position: "center center"
    },
    {
        image: {
            desktop: "https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,w_1200,h_800/v1744476121/gimnasia-ritmica_oygwjk.jpg",
            tablet: "https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,w_800,h_600/v1744476121/gimnasia-ritmica_oygwjk.jpg",
            mobile: "https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,w_600,h_500/v1744476121/gimnasia-ritmica_oygwjk.jpg"
        },
        title: "Gimnasia Rítmica",
        description: "Arte y deporte en movimiento",
        link: "https://www.instagram.com/ritmica.casadepadua/",
        position: "center center"
    },
    {
        image: {
            desktop: "https://res.cloudinary.com/djt5usq8q/image/upload/c_fill,g_auto,h_700,w_1600/b_rgb:000000,e_gradient_fade,y_-0.50/v1744812539/natatorio_-_copia_fybpou.jpg",
            tablet: "https://res.cloudinary.com/djt5usq8q/image/upload/c_fill,g_auto,h_600,w_800/b_rgb:000000,e_gradient_fade,y_-0.50/v1744812539/natatorio_-_copia_fybpou.jpg",
            mobile: "https://res.cloudinary.com/djt5usq8q/image/upload/c_fill,g_auto,h_500,w_600/b_rgb:000000,e_gradient_fade,y_-0.50/v1744812539/natatorio_-_copia_fybpou.jpg"
        },
        title: "Natatorio CASA de Padua",
        description: "Sumergite en la pasión por la natación",
        link: "https://www.instagram.com/natatorio.casadepadua/",
        position: "center center"
    }
];

/**
 * Componente SimpleHero - Versión simplificada con solo lo esencial
 * para asegurar que los enlaces de Instagram funcionan correctamente
 */
export default function SimpleHero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Funciones para controlar las diapositivas
    const nextSlide = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);
    }, []);

    const goToSlide = useCallback((index) => {
        setCurrentIndex(index);
    }, []);

    // Autoreproducción
    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide, isAutoPlaying]);

    // Slide actual
    const currentSlide = slides[currentIndex];    // Eliminamos el handler personalizado y usamos enlaces nativos

    return (
        <div className="pt-20 relative">
            {/* Contenedor principal */}
            <div className="w-full h-[70vh] max-h-[700px] relative overflow-hidden">
                {/* Navegación - Flechas */}
                <div className="absolute inset-0 flex items-center justify-between p-4 z-50">
                    <button 
                        onClick={prevSlide}
                        className="bg-casa-black/50 hover:bg-casa-black text-white p-2 rounded-full transition-colors"
                        aria-label="Slide anterior"
                    >
                        <i className="fas fa-chevron-left text-2xl"></i>
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="bg-casa-black/50 hover:bg-casa-black text-white p-2 rounded-full transition-colors"
                        aria-label="Siguiente slide"
                    >
                        <i className="fas fa-chevron-right text-2xl"></i>
                    </button>
                </div>                {/* Imagen de fondo */}
                <div className="absolute inset-0 z-10">
                    <div className="absolute inset-0 bg-gradient-to-t from-casa-black via-casa-black/50 to-transparent z-20"></div>
                    <picture>
                        <source srcSet={currentSlide.image.desktop} media="(min-width: 768px)" />
                        <source srcSet={currentSlide.image.tablet} media="(min-width: 640px)" />
                        <img 
                            src={currentSlide.image.mobile}
                            alt={currentSlide.title}
                            className="w-full h-full object-cover"
                            style={{ objectPosition: currentSlide.position }}
                            loading={currentIndex === 0 ? "eager" : "lazy"}
                        />
                    </picture>
                </div>

                {/* Contenido del slide (título, descripción, botón) */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center bg-gradient-to-t from-casa-black/90 to-transparent pt-20 z-40">
                    <h2 className="text-4xl font-montserrat font-bold mb-4">{currentSlide.title}</h2>
                    <p className="text-xl mb-6">{currentSlide.description}</p>
                      {/* Botón de Instagram simplificado al máximo - sin eventos personalizados */}
                    <a 
                        href={currentSlide.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-casa-yellow text-casa-black font-montserrat px-8 py-4 rounded-full hover:bg-casa-purple hover:text-casa-white transition-all duration-300 shadow-lg inline-flex items-center relative z-50"
                    >
                        <i className="fab fa-instagram mr-2"></i>
                        Seguinos en Instagram
                    </a>
                </div>

                {/* Indicadores (puntos) */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-50">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white'
                            }`}
                            aria-label={`Ir a la diapositiva ${index + 1}`}
                            aria-current={index === currentIndex}
                        />
                    ))}
                </div>

                {/* Botón de pausa/reproducción */}
                <button
                    className="absolute bottom-4 right-4 bg-casa-black/50 hover:bg-casa-black text-white p-2 rounded-full transition-colors z-50"
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    aria-label={isAutoPlaying ? "Pausar presentación" : "Reproducir presentación"}
                >
                    <i className={`fas ${isAutoPlaying ? 'fa-pause' : 'fa-play'} text-sm`}></i>
                </button>
            </div>
        </div>
    );
}
