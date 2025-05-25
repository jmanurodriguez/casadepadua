import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const news = [
    {
        image: "https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,w_400,h_300/v1744476121/basquet_dn8fsa.jpg",
        date: "12 Mayo",
        category: "Básquet",
        icon: "basketball-ball",
        title: "Campeonato Regional de Básquet",
        description: "Nuestro equipo Sub-17 se consagró campeón en el torneo regional. ¡Felicitaciones a todo el equipo y cuerpo técnico por este gran logro!"
    },
    {
        image: "https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,w_400,h_300/v1744476121/voley_li8dbt.jpg",
        date: "5 Mayo",
        category: "Vóley",
        icon: "volleyball-ball",
        title: "Torneo Interescolar de Vóley",
        description: "Se realizó con éxito el torneo interescolar en nuestras instalaciones con la participación de 12 escuelas. Agradecemos a todos los participantes y organizadores."
    },
    {
        image: "https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,c_fill,w_400,h_300/v1744476121/gimnasia-ritmica_oygwjk.jpg",
        date: "28 Abril",
        category: "Gimnasia Rítmica",
        icon: "ribbon",
        title: "Exhibición de Gimnasia Rítmica",
        description: "Nuestras gimnastas realizaron una brillante presentación en el Centro Cultural de Padua. Una muestra de talento, dedicación y esfuerzo."
    }
];

export default function News() {
    useScrollAnimation();

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-montserrat font-bold text-casa-purple mb-12 text-center animate-on-scroll">
                    Últimas Novedades
                </h2>
                
                <div className="relative">
                    {/* Decoraciones */}
                    <div className="hidden md:block absolute -top-6 -right-6 w-20 h-20 bg-casa-yellow rounded-full opacity-20"></div>
                    <div className="hidden md:block absolute -bottom-6 -left-6 w-16 h-16 bg-casa-purple rounded-full opacity-20"></div>
                    
                    {/* Tarjetas de noticias */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {news.map((item, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img 
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-0 right-0 bg-casa-yellow text-casa-black font-bold px-4 py-2 rounded-bl-xl">
                                        {item.date}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 rounded-full bg-casa-purple/20 flex items-center justify-center mr-3">
                                            <i className={`fas fa-${item.icon} text-casa-purple text-lg`}></i>
                                        </div>
                                        <span className="text-sm text-gray-500">{item.category}</span>
                                    </div>
                                    <h3 className="font-montserrat text-xl font-bold mb-3 line-clamp-2 hover:text-casa-purple transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="font-roboto text-gray-600 mb-5 line-clamp-3">
                                        {item.description}
                                    </p>
                                    <a 
                                        href="#" 
                                        className="group inline-flex items-center text-casa-purple font-semibold hover:text-casa-yellow transition-colors duration-300"
                                    >
                                        Leer más
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            stroke="currentColor"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth="2" 
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="text-center mt-12">
                    <a 
                        href="#" 
                        className="inline-block bg-casa-purple text-white font-montserrat px-10 py-4 rounded-full hover:bg-casa-yellow hover:text-casa-black transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-xl"
                    >
                        <span className="inline-flex items-center">
                            <span>Ver todas las noticias</span>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-5 w-5 ml-2" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}