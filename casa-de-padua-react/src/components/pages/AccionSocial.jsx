import { useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function AccionSocial() {
    useScrollAnimation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const initiatives = [
        {
            id: 1,
            title: "Campaña Solidaria con Bahía Blanca",
            image: "https://res.cloudinary.com/djt5usq8q/image/upload/v1752419627/bahiablanca_mu1byn.jpg",
            alt: "Inundaciones en Bahía Blanca",
            description: "Ante la emergencia climática que afectó a Bahía Blanca en abril de 2023, nuestro club organizó una campaña de recolección de alimentos no perecederos, agua potable, artículos de limpieza y ropa para las familias damnificadas. Gracias a la generosidad de nuestra comunidad, logramos enviar más de 3 toneladas de ayuda humanitaria que fue distribuida a través de la red de clubes de la provincia de Buenos Aires.",
            details: "La campaña incluyó puntos de recolección en nuestras instalaciones y voluntarios que clasificaron y organizaron las donaciones. El transporte fue gestionado con empresas locales que se sumaron solidariamente a la iniciativa. Continuamos apoyando a las comunidades afectadas con programas de reconstrucción a largo plazo."
        },
        {
            id: 2,
            title: "Campaña de Donación de Sangre",
            image: "https://res.cloudinary.com/djt5usq8q/image/upload/v1752420263/Campa%C3%B1a_de_Donaci%C3%B3n_de_Sangre_m6kh4k.png",
            alt: "Donación de Sangre",
            description: "En colaboración con el Centro Regional de Hemoterapia de San Miguel, realizamos jornadas trimestrales de donación voluntaria de sangre en nuestras instalaciones. Cada donante puede salvar hasta 4 vidas con su gesto solidario. El año pasado, gracias a nuestras campañas, más de 200 socios y vecinos se convirtieron en donantes regulares.",
            details: "Las jornadas incluyen charlas informativas sobre la importancia de la donación de sangre, controles médicos previos y un espacio de recuperación con refrigerio para los donantes. Nuestro objetivo es concientizar sobre la importancia de la donación regular y derribar mitos sobre esta práctica fundamental para el sistema de salud."
        },
        {
            id: 3,
            title: "Encuentro de Natación para los niños carenciados",
            image: "https://res.cloudinary.com/djt5usq8q/image/upload/v1752419355/Swimming_for_everybody_yyholv.png",
            alt: "Natación inclusiva",
            description: "Desde 2019, nuestro programa 'Todos al Agua' brinda clases gratuitas de natación a más de 100 niños de barrios vulnerables de la zona. El programa incluye transporte, equipamiento y merienda, eliminando así las barreras económicas que impiden el acceso a este deporte fundamental para el desarrollo físico y emocional de los pequeños.",
            details: "Las clases son impartidas por nuestros profesores de natación, quienes adaptan la metodología a las necesidades específicas de cada grupo. Además de aprender a nadar, los niños participantes desarrollan habilidades sociales y de trabajo en equipo. Al finalizar cada ciclo, organizamos un festival donde los participantes pueden demostrar sus logros frente a familiares y amigos."
        }
    ];

    return (
        <>
            <main className="pt-20 bg-white">
                {/* Hero Section con efecto parallax */}
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
                                <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 animate-fade-in">
                                    Acción Social
                                </h1>
                                <p className="text-xl md:text-2xl opacity-90 animate-slide-up">
                                    Comprometidos con nuestra comunidad
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="prose prose-lg mx-auto">
                            <div className="mb-16 animate-on-scroll text-center">
                                <p className="text-2xl text-gray-700 leading-relaxed font-light">
                                    En CASA de Padua creemos que el deporte es una poderosa herramienta de transformación social. 
                                    Por eso, desarrollamos diferentes iniciativas solidarias para contribuir al bienestar de nuestra comunidad 
                                    y extender la mano a quienes más lo necesitan.
                                </p>
                            </div>

                            {/* Iniciativas de Acción Social */}
                            <div className="space-y-24 mb-20">
                                {initiatives.map((initiative, index) => (
                                    <div 
                                        key={initiative.id}
                                        className={`animate-on-scroll flex flex-col md:flex-row items-center gap-8 ${
                                            index % 2 === 0 ? '' : 'md:flex-row-reverse'
                                        }`}
                                    >
                                        <div className="md:w-2/3">
                                            <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
                                                <img 
                                                    src={initiative.image}
                                                    alt={initiative.alt}
                                                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-all duration-700 bg-gray-100"
                                                    style={{ minHeight: '300px', maxHeight: '400px' }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                    <div className="absolute bottom-0 left-0 right-0 p-8">
                                                        <h3 className="text-white text-2xl font-bold mb-2">{initiative.title}</h3>
                                                        <p className="text-white/90 text-lg">{initiative.details}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:w-1/3">
                                            <div className="p-6 bg-casa-purple/5 rounded-xl">
                                                <h2 className="text-2xl font-montserrat font-bold text-casa-purple mb-4">{initiative.title}</h2>
                                                <p className="text-gray-600">{initiative.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Sección de Voluntariado */}
                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 mb-20 shadow-xl animate-on-scroll">
                                <h2 className="text-4xl font-montserrat font-bold text-casa-purple mb-8 text-center">
                                    Sumate como Voluntario
                                </h2>
                                <p className="text-xl text-center mb-12">
                                    ¿Querés formar parte de nuestras iniciativas solidarias? Podés sumarte como voluntario 
                                    y ayudar a que más personas se beneficien de nuestros programas sociales.
                                </p>
                                <div className="flex justify-center">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
                                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                            <div className="w-16 h-16 bg-casa-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                                                <i className="fas fa-hands-helping text-2xl text-casa-purple"></i>
                                            </div>
                                            <h3 className="text-xl font-bold text-center mb-3">Donaciones</h3>
                                            <p className="text-gray-600 text-center">Podés contribuir con donaciones de materiales, alimentos o ropa para nuestras campañas solidarias.</p>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                            <div className="w-16 h-16 bg-casa-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                                                <i className="fas fa-calendar-alt text-2xl text-casa-purple"></i>
                                            </div>
                                            <h3 className="text-xl font-bold text-center mb-3">Eventos</h3>
                                            <p className="text-gray-600 text-center">Participá en la organización de eventos solidarios y ayudanos a difundir nuestras causas.</p>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                            <div className="w-16 h-16 bg-casa-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                                                <i className="fas fa-chalkboard-teacher text-2xl text-casa-purple"></i>
                                            </div>
                                            <h3 className="text-xl font-bold text-center mb-3">Enseñanza</h3>
                                            <p className="text-gray-600 text-center">Compartí tus conocimientos y habilidades como instructor voluntario en nuestros programas educativos.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sección final con CTA */}
                            <div className="relative overflow-hidden rounded-3xl animate-on-scroll">
                                <div className="bg-casa-purple text-white p-12 md:p-16">
                                    <div className="relative z-10 text-center space-y-8">
                                        <h2 className="text-3xl md:text-4xl font-montserrat font-bold">
                                            ¡Cada aporte suma!
                                        </h2>
                                        <p className="text-xl opacity-90 max-w-2xl mx-auto">
                                            Tu colaboración, por pequeña que sea, puede marcar una gran diferencia 
                                            en la vida de muchas personas. Juntos podemos construir una comunidad 
                                            más solidaria e inclusiva.
                                        </p>
                                        <a 
                                            href="mailto:contacto@casadepadua.com.ar"
                                            className="inline-flex items-center bg-white text-casa-purple px-8 py-4 rounded-full hover:bg-casa-yellow hover:text-casa-black transition-all duration-300 shadow-lg group"
                                        >
                                            <span>Contactanos para colaborar</span>
                                            <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                                        </a>
                                    </div>
                                    {/* Patrón decorativo */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute inset-0" style={{
                                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                                            backgroundSize: '20px 20px'
                                        }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}