import { useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const mainActivities = [
    {
        image: "https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,w_400,h_300/v1744476121/basquet_dn8fsa.jpg",
        title: "Básquet",
        description: "Descubrí la pasión por el básquet en nuestras instalaciones. Formamos jugadores desde mini hasta primera división.",
        link: "/basquet"
    },
    {
        image: "https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,w_400,h_300/v1744476121/voley_li8dbt.jpg",
        title: "Vóley",
        description: "Sumate a nuestros equipos de vóley y crecé con nosotros. Contamos con categorías para todas las edades.",
        link: "/voley"
    },
    {
        image: "https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,w_400,h_300/v1744476121/gimnasia-ritmica_oygwjk.jpg",
        title: "Gimnasia Rítmica",
        description: "Expresión, arte y deporte en un solo lugar. Clases para niñas desde los 4 años.",
        link: "/gimnasia"
    },
    {
        image: "https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,h_300,w_400/v1744812538/judo_-_copia_fh82un.webp",
        title: "Judo",
        description: "Desarrollá disciplina, respeto y habilidades físicas con nuestro programa de Judo para todas las edades.",
        link: "#"
    },
    {
        image: "https://res.cloudinary.com/djt5usq8q/image/upload/c_fill,g_auto,h_300,w_400/v1744812539/natatorio_-_copia_fybpou.jpg",
        title: "Natatorio",
        description: "Aprendé a nadar o perfeccioná tu técnica en nuestras instalaciones. Clases para todas las edades y niveles.",
        link: "#"
    }
];

const otherActivities = [
    { title: "Aikido", description: "Arte marcial japonés para todas las edades" },
    { title: "Aquagym", description: "Ejercicios en el agua para mantenerte en forma" },
    { title: "Entrenamiento funcional y GAP", description: "Mejorá tu condición física general" },
    { title: "Escuelita de fútbol", description: "Formación deportiva para los más pequeños" },
    { title: "Pelota paleta", description: "Deporte tradicional argentino" },
    { title: "Aikido", description: "Arte marcial japonés para todas las edades" },
    { title: "Aquagym", description: "Ejercicios en el agua para mantenerte en forma" },
    { title: "Entrenamiento funcional y GAP", description: "Mejorá tu condición física general" },
    { title: "Escuelita de fútbol", description: "Formación deportiva para los más pequeños" },
    { title: "Pelota paleta", description: "Deporte tradicional argentino" },
    { title: "Pilates", description: "Ejercicios de control corporal y flexibilidad" },
    { title: "Taekwondo", description: "Arte marcial coreano para todas las edades" },
    { title: "Telas y acrobacia aérea", description: "Actividad artística y deportiva" },
    { title: "Tenis con paleta", description: "Variante recreativa del tenis" },
    { title: "Tenis de mesa", description: "Ping pong recreativo y competitivo" },
    { title: "Zumba", description: "Ejercicios aeróbicos con ritmos latinos" },
    { title: "Yoga", description: "Disciplina para cuerpo y mente" }
];

export default function DeportesYActividades() {
    useScrollAnimation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20 bg-white">
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
                                    Deportes y Actividades
                                </h1>
                                <p className="text-lg md:text-xl opacity-90">
                                    Descubrí todas las actividades que tenemos para vos
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-montserrat font-bold text-casa-purple mb-12 text-center animate-on-scroll">
                            Deportes Principales
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
                            {mainActivities.map((activity, index) => (
                                <div 
                                    key={activity.title}
                                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll"
                                    style={{ animationDelay: `${index * 200}ms` }}
                                >
                                    <div className="relative h-48">
                                        <img 
                                            src={activity.image}
                                            alt={activity.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-montserrat text-xl font-bold text-casa-purple mb-3">
                                            {activity.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 text-sm">
                                            {activity.description}
                                        </p>
                                        <Link 
                                            to={activity.link}
                                            className="inline-block bg-casa-yellow text-casa-black font-montserrat px-6 py-2 rounded-full hover:bg-casa-purple hover:text-casa-white transition-all duration-300 text-sm"
                                        >
                                            Ver más
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-20">
                            <h2 className="text-3xl font-montserrat font-bold text-casa-purple mb-12 text-center animate-on-scroll">
                                Actividades Complementarias
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {otherActivities.map((activity, index) => (
                                    <div 
                                        key={activity.title}
                                        className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all duration-300 animate-on-scroll border-l-4 border-casa-yellow hover:border-casa-purple"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <h3 className="font-montserrat text-lg font-bold text-casa-purple mb-2">
                                            {activity.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {activity.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-20 text-center">
                            <Link
                                to="/valores-y-dias"
                                className="inline-flex items-center bg-casa-purple text-white font-montserrat px-8 py-4 rounded-full hover:bg-casa-yellow hover:text-casa-black transition-all duration-300 shadow-lg group animate-on-scroll"
                            >
                                <span>Ver valores y horarios</span>
                                <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Colonia de Verano */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-casa-yellow/20 to-casa-purple/20 rounded-3xl -rotate-1"></div>
                            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden animate-on-scroll">
                                <div className="grid md:grid-cols-2 gap-0">
                                    <div className="p-8 md:p-12 flex flex-col justify-center">
                                        <div className="inline-block bg-casa-yellow px-4 py-1 rounded-full text-casa-black text-sm font-bold mb-4">
                                            ¡TEMPORADA DE VERANO!
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-casa-purple mb-4">
                                            Colonia de Vacaciones
                                        </h3>
                                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                            Una experiencia única para los más chicos durante el verano. 
                                            Deportes, juegos, pileta y mucha diversión en un ambiente 
                                            seguro y familiar.
                                        </p>
                                        <ul className="space-y-3 mb-8">
                                            <li className="flex items-center text-gray-700">
                                                <i className="fas fa-sun text-casa-yellow mr-3"></i>
                                                Actividades al aire libre
                                            </li>
                                            <li className="flex items-center text-gray-700">
                                                <i className="fas fa-swimming-pool text-casa-yellow mr-3"></i>
                                                Pileta climatizada
                                            </li>
                                            <li className="flex items-center text-gray-700">
                                                <i className="fas fa-futbol text-casa-yellow mr-3"></i>
                                                Deportes y juegos
                                            </li>
                                            <li className="flex items-center text-gray-700">
                                                <i className="fas fa-heart text-casa-yellow mr-3"></i>
                                                Profesores especializados
                                            </li>
                                        </ul>
                                        <HashLink 
                                            to="/#contacto"
                                            className="inline-flex items-center bg-casa-purple text-white font-montserrat px-8 py-4 rounded-full hover:bg-casa-yellow hover:text-casa-black transition-all duration-300 shadow-lg group"
                                        >
                                            <span>Más información</span>
                                            <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                                        </HashLink>
                                    </div>
                                    <div className="relative h-64 md:h-auto">
                                        <img 
                                            src="https://res.cloudinary.com/djt5usq8q/image/upload/v1745529209/Captura_de_pantalla_2025-04-24_181257_v10yxk.png"
                                            alt="Colonia de Vacaciones CASA de Padua"
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}