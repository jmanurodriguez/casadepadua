import { useState, useEffect } from 'react';
import InstagramButtonFinal from './InstagramButtonFinal';

// Datos del carrusel
const slides = [
    {
        image: "https://res.cloudinary.com/djt5usq8q/image/upload/v1744812494/PADUA-194_1_weef34.jpg",
        title: "Básquet CASA de Padua",
        description: "Formando jugadores desde 1940",
        link: "https://www.instagram.com/basquet.casadepadua/"
    },
    {
        image: "https://res.cloudinary.com/djt5usq8q/image/upload/v1748468270/voley2_g493wu.jpg",
        title: "Vóley CASA de Padua",
        description: "El deporte que nos une",
        link: "https://www.instagram.com/voley.casadepadua/"
    },
    {
        image: "https://res.cloudinary.com/djt5usq8q/image/upload/v1744476121/gimnasia-ritmica_oygwjk.jpg",
        title: "Gimnasia Rítmica",
        description: "Arte y deporte en movimiento",
        link: "https://www.instagram.com/ritmica.casadepadua/"
    },
    {
        image: "https://res.cloudinary.com/djt5usq8q/image/upload/v1744812539/natatorio_-_copia_fybpou.jpg",
        title: "Natatorio CASA de Padua",
        description: "Sumergite en la pasión por la natación",
        link: "https://www.instagram.com/natatorio.casadepadua/"
    }
];

/**
 * UltraSimpleHero - Versión extremadamente simplificada para garantizar funcionamiento de enlaces
 */
export default function UltraSimpleHero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Avance automático
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % slides.length);
        }, 5000);
        
        return () => clearInterval(interval);
    }, []);

    // Slide actual
    const slide = slides[currentIndex];

    return (
        <div className="pt-20 w-full h-[70vh] max-h-[700px] relative">
            {/* Fondo de imagen */}
            <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url(${slide.image})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-casa-black via-casa-black/50 to-transparent"></div>
            </div>
            
            {/* Contenido */}
            <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
                <h2 className="text-4xl font-montserrat font-bold mb-4 text-white">{slide.title}</h2>
                <p className="text-xl mb-6 text-white">{slide.description}</p>
                  {/* Using two parallel strategies to ensure at least one works */}
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    {/* Estrategia 1: Botón de Instagram con componente especializado */}
                    <InstagramButtonFinal url={slide.link} />
                    
                    {/* Estrategia 2: Enlace tradicional con máxima prioridad de z-index */}
                    <a 
                        href={slide.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-casa-purple text-casa-white font-montserrat px-8 py-4 rounded-full hover:bg-casa-yellow hover:text-casa-black transition-all duration-300 shadow-lg inline-flex items-center"
                        style={{ zIndex: 9999, position: 'relative' }}
                    >
                        <i className="fab fa-instagram mr-2"></i>
                        Instagram Alternativo
                    </a>
                </div>
            </div>
              {/* Indicadores simples */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                        aria-label={`Ir a la diapositiva ${index + 1}`}
                    />
                ))}
            </div>
            
            {/* Enlace de diagnóstico - solo visible en desarrollo */}
            {import.meta.env.DEV && (
                <a 
                    href="/diagnostico-final-enlaces.html"
                    target="_blank"
                    className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 text-xs rounded-md z-[9999]"
                >
                    Diagnóstico
                </a>
            )}
        </div>
    );
}
