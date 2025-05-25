import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useState, useEffect } from 'react';

const otherActivities = [
    {
        title: "Aikido",
        description: "Arte marcial japonés para todas las edades"
    },
    {
        title: "Aquagym",
        description: "Ejercicios acuáticos para mantenerte en forma"
    },
    {
        title: "Básquet",
        description: "Deporte federado con todas las categorías"
    },
    {
        title: "Entrenamiento funcional y GAP",
        description: "Entrenamiento integral para todo el cuerpo"
    },
    {
        title: "Escuelita de fútbol",
        description: "Formación deportiva para los más pequeños"
    },
    {
        title: "Gimnasia rítmica",
        description: "Arte y deporte en movimiento"
    },
    {
        title: "Judo",
        description: "Arte marcial con valores y disciplina"
    },
    {
        title: "Natación",
        description: "Clases para todas las edades y niveles"
    },
    {
        title: "Pelota paleta",
        description: "Deporte tradicional argentino"
    },
    {
        title: "Pilates",
        description: "Fortalecimiento y flexibilidad corporal"
    },
    {
        title: "Taekwondo",
        description: "Arte marcial coreano federado"
    },
    {
        title: "Telas y acrobacia aérea",
        description: "Arte y ejercicio en altura"
    },
    {
        title: "Tenis con paleta",
        description: "Deporte recreativo para todas las edades"
    },
    {
        title: "Tenis de mesa",
        description: "Ping pong recreativo y competitivo"
    },
    {
        title: "Vóley",
        description: "Deporte federado masculino y femenino"
    },
    {
        title: "Zumba",
        description: "Baile y ejercicio con ritmos latinos"
    },
    {
        title: "Yoga",
        description: "Bienestar físico y mental"
    },
    {
        title: "Colonia de vacaciones",
        description: "Diversión asegurada en temporada de verano"
    },
    {
        title: "Efecto Mariposa",
        description: "Veni a divertirte y conocer el arte del circo con nosotros"
    }
];

const carouselData = [
    {
        title: "Colonia de Vacaciones",
        subtitle: "¡TEMPORADA DE VERANO!",
        description: "Una experiencia única para los más chicos durante el verano. Deportes, juegos, pileta y mucha diversión en un ambiente seguro y familiar.",
        image: "https://res.cloudinary.com/djt5usq8q/image/upload/v1745529209/Captura_de_pantalla_2025-04-24_181257_v10yxk.png",
        features: [
            { icon: "fas fa-sun", text: "Actividades al aire libre" },
            { icon: "fas fa-swimming-pool", text: "Pileta climatizada" },
            { icon: "fas fa-futbol", text: "Deportes y juegos" },
            { icon: "fas fa-heart", text: "Profesores especializados" }
        ],
        link: "#contacto",
        buttonText: "Inscripciones en Noviembre"
    },
    {
        title: "Básquet",
        subtitle: "DEPORTE FEDERADO",
        description: "Formamos jugadores desde mini hasta primera división. Participamos en torneos y ligas locales con un equipo de profesionales dedicados.",
        image: "https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,w_400,h_300/v1744476121/basquet_dn8fsa.jpg",
        features: [
            { icon: "fas fa-basketball-ball", text: "Todas las categorías" },
            { icon: "fas fa-trophy", text: "Competencias federadas" },
            { icon: "fas fa-users", text: "Entrenadores especializados" },
            { icon: "fas fa-dumbbell", text: "Preparación física" }
        ],
        link: "/basquet",
        buttonText: "Conocé más"
    },
    {
        title: "Vóley",
        subtitle: "DEPORTE FEDERADO",
        description: "Sumate a nuestros equipos de vóley y crecé con nosotros. Contamos con categorías para todas las edades y niveles de juego.",
        image: "https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,w_400,h_300/v1744476121/voley_li8dbt.jpg",
        features: [
            { icon: "fas fa-volleyball-ball", text: "Todas las categorías" },
            { icon: "fas fa-trophy", text: "Competencias federadas" },
            { icon: "fas fa-users", text: "Equipos masculinos y femeninos" },
            { icon: "fas fa-dumbbell", text: "Preparación física" }
        ],
        link: "/voley",
        buttonText: "Conocé más"
    },
    {
        title: "Gimnasia Rítmica",
        subtitle: "ARTE Y DEPORTE",
        description: "Expresión, arte y deporte en un solo lugar. Desarrollamos la disciplina y la creatividad en nuestras alumnas.",
        image: "https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,w_400,h_300/v1744476121/gimnasia-ritmica_oygwjk.jpg",
        features: [
            { icon: "fas fa-ribbon", text: "Desde los 4 años" },
            { icon: "fas fa-music", text: "Coreografías artísticas" },
            { icon: "fas fa-medal", text: "Participación en torneos" },
            { icon: "fas fa-star", text: "Exhibiciones" }
        ],
        link: "/gimnasia",
        buttonText: "Conocé más"
    },
    {
        title: "Natatorio",
        subtitle: "PILETA CLIMATIZADA",
        description: "Aprendé a nadar o perfeccioná tu técnica en nuestras instalaciones. Clases para todas las edades y niveles.",
        image: "https://res.cloudinary.com/djt5usq8q/image/upload/c_fill,g_auto,h_300,w_400/v1744812539/natatorio_-_copia_fybpou.jpg",
        features: [
            { icon: "fas fa-swimming-pool", text: "Pileta climatizada" },
            { icon: "fas fa-child", text: "Escuela de natación" },
            { icon: "fas fa-heartbeat", text: "Aquagym" },
            { icon: "fas fa-certificate", text: "Guardavidas certificados" }
        ],
        link: "#",
        buttonText: "Conocé más"
    },
    {
        title: "Judo",
        subtitle: "ARTE MARCIAL",
        description: "Desarrollá disciplina, respeto y habilidades físicas con nuestro programa de Judo para todas las edades.",
        image: "https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,h_300,w_400/v1744812538/judo_-_copia_fh82un.webp",
        features: [
            { icon: "fas fa-fist-raised", text: "Todas las categorías" },
            { icon: "fas fa-balance-scale", text: "Desarrollo mental y físico" },
            { icon: "fas fa-black-belt", text: "Instructores certificados" },
            { icon: "fas fa-medal", text: "Competencias" }
        ],
        link: "#",
        buttonText: "Conocé más"
    }
];

export default function Activities() {
    useScrollAnimation();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((current) => (current + 1) % carouselData.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((current) => (current + 1) % carouselData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((current) => (current - 1 + carouselData.length) % carouselData.length);
    };

    return (
        <section id="deportes" className="mb-16">
            <div className="container mx-auto py-16 px-4">
                {/* Deportes y Actividades */}
                <div className="mb-32">
                    <h2 className="text-3xl font-montserrat font-bold text-casa-purple mb-8 text-center animate-on-scroll">
                        Deportes y Actividades
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                        {otherActivities.map((activity, index) => (
                            <div 
                                key={activity.title}
                                className={`bg-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-300 animate-on-scroll border-l-4 border-casa-yellow hover:border-casa-purple w-full ${
                                    index >= otherActivities.length - (otherActivities.length % 4) ? 'col-span-1 lg:col-span-1' : ''
                                }`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <h3 className="font-montserrat text-lg font-bold text-casa-black mb-2">
                                    {activity.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {activity.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Nuestras Actividades - Carousel */}
                <div className="mt-20">
                    <h2 className="text-4xl font-montserrat font-bold text-casa-purple mb-8 text-center animate-on-scroll">
                        Nuestras Actividades
                    </h2>
                    <div className="relative mb-32">
                        <div className="absolute inset-0 bg-gradient-to-r from-casa-yellow/20 to-casa-purple/20 rounded-3xl -rotate-1"></div>
                        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden animate-on-scroll">
                            <div className="grid md:grid-cols-2 gap-0">
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className="inline-block bg-casa-yellow px-4 py-1 rounded-full text-casa-black text-sm font-bold mb-4">
                                        {carouselData[currentSlide].subtitle}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-casa-purple mb-4">
                                        {carouselData[currentSlide].title}
                                    </h3>
                                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                        {carouselData[currentSlide].description}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {carouselData[currentSlide].features.map((feature, index) => (
                                            <li key={index} className="flex items-center text-gray-700">
                                                <i className={`${feature.icon} text-casa-yellow mr-3`}></i>
                                                {feature.text}
                                            </li>
                                        ))}
                                    </ul>
                                    <a 
                                        href={carouselData[currentSlide].link}
                                        className="inline-flex items-center bg-casa-purple text-white font-montserrat px-8 py-4 rounded-full hover:bg-casa-yellow hover:text-casa-black transition-all duration-300 shadow-lg group"
                                    >
                                        <span>{carouselData[currentSlide].buttonText}</span>
                                        <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                                    </a>
                                </div>
                                <div className="relative h-64 md:h-auto">
                                    <img 
                                        src={carouselData[currentSlide].image}
                                        alt={carouselData[currentSlide].title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
                                </div>
                            </div>

                            {/* Carousel Controls */}
                            <button 
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-casa-yellow p-2 rounded-full shadow-lg transition-all duration-300"
                                aria-label="Previous slide"
                            >
                                <i className="fas fa-chevron-left text-casa-purple"></i>
                            </button>
                            <button 
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-casa-yellow p-2 rounded-full shadow-lg transition-all duration-300"
                                aria-label="Next slide"
                            >
                                <i className="fas fa-chevron-right text-casa-purple"></i>
                            </button>

                            {/* Carousel Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                {carouselData.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            currentSlide === index ? 'bg-casa-purple w-4' : 'bg-gray-300'
                                        }`}
                                        onClick={() => setCurrentSlide(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                    ></button>
                                ))}
                            </div>
                        </div>
                        
                        {/* Elementos decorativos */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-casa-yellow rounded-full opacity-20 blur-2xl"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-casa-purple rounded-full opacity-20 blur-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}