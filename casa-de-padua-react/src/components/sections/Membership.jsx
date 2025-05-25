import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const benefits = [
    {
        icon: "dumbbell",
        title: "Acceso a Instalaciones",
        description: "Disfrutá de todas nuestras instalaciones deportivas y recreativas."
    },
    {
        icon: "ticket-alt",
        title: "Descuentos Exclusivos",
        description: "Obtené precios preferenciales en todas nuestras actividades."
    },
    {
        icon: "users",
        title: "Comunidad CASA",
        description: "Formá parte de una gran familia con más de 80 años de historia."
    }
];

const categories = [
    {
        title: "Socio Individual",
        description: "Acceso completo para una persona a todas las instalaciones del club.",
        price: "15.000",
        period: "mes"
    },
    {
        title: "Grupo Familiar",
        description: "Acceso para toda la familia con descuentos especiales:",
        details: [
            "3 integrantes: 10% de descuento",
            "4 integrantes: 15% de descuento",
            "5 o más integrantes: 20% de descuento"
        ],
        note: "Los grupos familiares se abonan enteros y los descuentos se aplican en caso de abonar en efectivo."
    }
];

export default function Membership() {
    useScrollAnimation();

    return (
        <section className="py-16 bg-casa-yellow" id="asociate">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-montserrat font-bold text-casa-black mb-6 animate-on-scroll">
                    ¡Hacete Socio del Club!
                </h2>
                <p className="text-xl text-casa-black mb-8 max-w-3xl mx-auto animate-on-scroll">
                    Sumate a la familia del Club Atlético San Antonio de Padua y disfrutá de todos los beneficios exclusivos para socios.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {benefits.map((benefit, index) => (
                        <div 
                            key={benefit.title}
                            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="text-casa-purple text-5xl mb-4">
                                <i className={`fas fa-${benefit.icon}`}></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-casa-black">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto animate-on-scroll">
                    <h3 className="text-2xl font-bold mb-6 text-casa-purple">
                        Elegí tu categoría
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {categories.map((category) => (
                            <div 
                                key={category.title}
                                className="border border-gray-200 rounded-lg p-4 hover:border-casa-purple transition-all"
                            >
                                <h4 className="text-xl font-bold mb-2">
                                    {category.title}
                                </h4>
                                <p className="text-gray-600 mb-2">
                                    {category.description}
                                </p>
                                {category.details && (
                                    <ul className="list-disc list-inside text-gray-600 mb-2 text-left">
                                        {category.details.map((detail, index) => (
                                            <li key={index} className="mb-1">{detail}</li>
                                        ))}
                                    </ul>
                                )}
                                {category.note && (
                                    <p className="text-sm text-gray-500 italic mb-2">{category.note}</p>
                                )}
                                {category.price && (
                                    <p className="text-2xl font-bold text-casa-purple">
                                        ${category.price}{' '}
                                        <span className="text-sm text-gray-500">
                                            /{category.period}
                                        </span>
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                    
                    <a 
                        href="https://portal.ourclub.io/casadepadua/Account/Register"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-casa-purple text-white font-montserrat px-8 py-4 rounded-full hover:bg-casa-yellow hover:text-casa-black transition-all duration-300 shadow-lg text-xl"
                    >
                        <i className="fas fa-user-plus mr-2"></i>
                        Asociate Ahora
                    </a>
                </div>
            </div>
        </section>
    );
}