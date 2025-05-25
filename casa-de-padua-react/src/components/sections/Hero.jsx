import { useState, useEffect, useCallback } from 'react';

const slides = [
    {
        image: {
            desktop: "https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,h_700,w_1600,g_auto/v1744663912/Padua_vs_Midland_Fecha_1__2_gawd6p.jpg",
            tablet: "https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,h_600,w_800,g_auto/v1744663912/Padua_vs_Midland_Fecha_1__2_gawd6p.jpg",
            mobile: "https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,h_500,w_600,g_auto/v1744663912/Padua_vs_Midland_Fecha_1__2_gawd6p.jpg"
        },
        title: "Básquet CASA de Padua",
        description: "Formando jugadores desde 1940",
        link: "https://www.instagram.com/basquet.casadepadua/",
        position: "center center"
    },
    {
        image: {
            desktop: "https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,w_1200,h_800/v1744476121/voley_li8dbt.jpg",
            tablet: "https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,w_800,h_600/v1744476121/voley_li8dbt.jpg",
            mobile: "https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,w_600,h_500/v1744476121/voley_li8dbt.jpg"
        },
        title: "Vóley CASA de Padua",
        description: "El deporte que nos une",
        link: "https://www.instagram.com/voley.casadepadua/",
        position: "50% 30%"
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

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [isMouseOver, setIsMouseOver] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    }, []);

    const goToSlide = useCallback((index) => {
        setCurrentIndex(index);
    }, []);

    // Autoplay
    useEffect(() => {
        if (isMouseOver) return;

        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide, isMouseOver]);

    // Touch events handlers
    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        const touchEnd = e.changedTouches[0].clientX;
        const diff = touchStart - touchEnd;
        const threshold = 50;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    };

    return (
        <div className="pt-20">
            <div 
                className="relative w-full h-[70vh] max-h-[700px]"
                onMouseEnter={() => setIsMouseOver(true)}
                onMouseLeave={() => setIsMouseOver(false)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {/* Navigation buttons */}
                <div className="absolute inset-0 z-10 flex items-center justify-between p-4 pointer-events-none">
                    <button 
                        onClick={prevSlide}
                        className="bg-casa-black/50 hover:bg-casa-black text-white p-2 rounded-full transition-colors pointer-events-auto"
                        aria-label="Slide anterior"
                    >
                        <i className="fas fa-chevron-left text-2xl"></i>
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="bg-casa-black/50 hover:bg-casa-black text-white p-2 rounded-full transition-colors pointer-events-auto"
                        aria-label="Siguiente slide"
                    >
                        <i className="fas fa-chevron-right text-2xl"></i>
                    </button>
                </div>

                {/* Slides */}
                {slides.map((slide, index) => (
                    <div 
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-1000 ${
                            index === currentIndex ? 'opacity-100 z-[1]' : 'opacity-0 z-0'
                        }`}
                        aria-hidden={index !== currentIndex}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-casa-black via-casa-black/50 to-transparent z-10 pointer-events-none"></div>
                        <picture className="pointer-events-none">
                            <source srcSet={slide.image.desktop} media="(min-width: 768px)" />
                            <source srcSet={slide.image.tablet} media="(min-width: 640px)" />
                            <img 
                                src={slide.image.mobile}
                                className="w-full h-full object-cover"
                                style={{ objectPosition: slide.position }}
                                alt={slide.title}
                                loading={index === 0 ? "eager" : "lazy"}
                            />
                        </picture>
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center bg-gradient-to-t from-casa-black/90 to-transparent pt-20 z-20">
                            <h2 className="text-4xl font-montserrat font-bold mb-4 pointer-events-none">{slide.title}</h2>
                            <p className="text-xl mb-6 pointer-events-none">{slide.description}</p>
                            <a 
                                href={slide.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-casa-yellow text-casa-black font-montserrat px-8 py-4 rounded-full hover:bg-casa-purple hover:text-casa-white transition-all duration-300 shadow-lg inline-flex items-center cursor-pointer z-50 relative"
                            >
                                <i className="fab fa-instagram mr-2"></i>
                                Seguinos en Instagram
                            </a>
                        </div>
                    </div>
                ))}

                {/* Indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-30 pointer-events-none">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors pointer-events-auto ${
                                index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white'
                            }`}
                            aria-label={`Ir a la diapositiva ${index + 1}`}
                            aria-current={index === currentIndex}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}