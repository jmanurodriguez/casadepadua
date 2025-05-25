import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const events = [
    {
        date: { day: "15", month: "MAYO" },
        title: "Torneo Amistoso de Básquet",
        time: "18:00 - 21:00",
        location: "Gimnasio Principal"
    },
    {
        date: { day: "20", month: "MAYO" },
        title: "Clase Abierta de Gimnasia",
        time: "16:00 - 18:00",
        location: "Salón Multiuso"
    },
    {
        date: { day: "28", month: "MAYO" },
        title: "Campeonato de Vóley",
        time: "10:00 - 17:00",
        location: "Cancha Central"
    },
    {
        date: { day: "5", month: "JUNIO" },
        title: "Festival Deportivo",
        time: "11:00 - 19:00",
        location: "Todo el club"
    }
];

export default function Events() {
    useScrollAnimation();

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-montserrat font-bold text-casa-purple mb-8 text-center animate-on-scroll">
                    Próximos Eventos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {events.map((event, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-on-scroll"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="bg-casa-purple text-white p-4 text-center">
                                <span className="text-3xl font-bold">{event.date.day}</span>
                                <span className="block">{event.date.month}</span>
                            </div>
                            <div className="p-6">
                                <h3 className="font-montserrat text-xl font-bold mb-2">{event.title}</h3>
                                <p className="text-gray-600 mb-4 flex items-center">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="h-5 w-5 mr-2 text-casa-purple" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                                        />
                                    </svg>
                                    {event.time}
                                </p>
                                <p className="text-gray-600 mb-4 flex items-center">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="h-5 w-5 mr-2 text-casa-purple" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                                        />
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                                        />
                                    </svg>
                                    {event.location}
                                </p>
                                <a 
                                    href="#" 
                                    className="block text-center bg-casa-yellow text-casa-black font-montserrat px-4 py-2 rounded-full hover:bg-casa-purple hover:text-casa-white transition-all duration-300"
                                >
                                    Más información
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}