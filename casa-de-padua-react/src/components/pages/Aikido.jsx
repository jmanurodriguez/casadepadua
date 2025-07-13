import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Aikido() {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    useScrollAnimation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <main className="pt-20 bg-white">
                {/* Hero Section */}
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
                                <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
                                    Aikido en CASA de Padua
                                </h1>
                                <p className="text-lg md:text-xl opacity-90">
                                    El camino de la armonía con la energía universal
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-on-scroll">
                            <div>
                                <h2 className="text-3xl font-montserrat font-bold text-casa-purple mb-6">
                                    ¿Qué es el Aikido?
                                </h2>
                                <div className="prose prose-lg">
                                    <p className="mb-4 text-gray-700">
                                        El Aikido es un arte marcial japonés moderno desarrollado por el maestro Morihei Ueshiba (1883-1969). 
                                        Su nombre se compone de tres kanjis: <strong>Ai</strong> (armonía), <strong>Ki</strong> (energía) y <strong>Do</strong> (camino).
                                    </p>
                                    <p className="mb-4 text-gray-700">
                                        A diferencia de otras artes marciales, el Aikido no se enfoca en atacar al oponente sino en redirigir la 
                                        energía del ataque para neutralizarlo sin causar daño innecesario, priorizando la resolución no violenta de conflictos.
                                    </p>
                                    <p className="text-gray-700">
                                        En CASA de Padua, practicamos un Aikido tradicional basado en los principios del fundador, 
                                        adaptado para todas las edades y condiciones físicas.
                                    </p>
                                </div>
                            </div>                            <div className="relative h-96 overflow-hidden rounded-lg shadow-xl">
                                <img 
                                    src="https://res.cloudinary.com/djt5usq8q/image/upload/v1748212611/Imagen_de_WhatsApp_2024-11-30_a_las_18.40.07_8af4de2a_1_rja0xx.jpg"
                                    alt="Práctica de Aikido en CASA de Padua"
                                    className="w-full h-full object-cover transition-opacity duration-500"
                                    style={{ opacity: isImageLoaded ? 1 : 0 }}
                                    onLoad={() => setIsImageLoaded(true)}
                                />
                                {!isImageLoaded && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-casa-purple"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits & Classes Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-montserrat font-bold text-casa-purple mb-4">
                                    Beneficios y Clases
                                </h2>
                                <p className="text-xl text-gray-600">
                                    Descubre lo que el Aikido puede aportarte
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-white rounded-lg shadow-lg p-8 animate-on-scroll">
                                    <h3 className="text-2xl font-montserrat font-bold text-casa-purple mb-4">Beneficios del Aikido</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                        <li>Desarrollo de coordinación física y equilibrio</li>
                                        <li>Mejora de la concentración y el enfoque mental</li>
                                        <li>Mayor autoconfianza y conciencia del entorno</li>
                                        <li>Aprendizaje de técnicas efectivas de defensa personal</li>
                                        <li>Comprensión de la resolución pacífica de conflictos</li>
                                        <li>Entrenamiento cardiovascular y aumento de la flexibilidad</li>
                                        <li>Reducción del estrés y la ansiedad</li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-lg shadow-lg p-8 animate-on-scroll">
                                    <h3 className="text-2xl font-montserrat font-bold text-casa-purple mb-4">Horarios de Clases</h3>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left text-gray-700">
                                            <thead className="bg-gray-100">
                                                <tr>
                                                    <th className="py-2 px-3">Día</th>
                                                    <th className="py-2 px-3">Horario</th>
                                                    <th className="py-2 px-3">Nivel</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-gray-200">
                                                    <td className="py-2 px-3">Martes</td>
                                                    <td className="py-2 px-3">19:00 - 21:00</td>
                                                    <td className="py-2 px-3">Todos los niveles</td>
                                                </tr>
                                                <tr className="border-b border-gray-200">
                                                    <td className="py-2 px-3">Jueves</td>
                                                    <td className="py-2 px-3">19:00 - 21:00</td>
                                                    <td className="py-2 px-3">Todos los niveles</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-3">Sábados</td>
                                                    <td className="py-2 px-3">10:00 - 12:00</td>
                                                    <td className="py-2 px-3">Todos los niveles</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Instructor & Training Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-on-scroll">                            <div className="order-2 md:order-1 relative h-96 overflow-hidden rounded-lg shadow-xl">
                                <img 
                                    src="https://res.cloudinary.com/djt5usq8q/image/upload/v1748212611/Imagen_de_WhatsApp_2024-11-30_a_las_18.39.48_c4e699cd_1_zqdvw4.jpg"
                                    alt="Sensei dirigiendo una clase de Aikido"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl font-montserrat font-bold text-casa-purple mb-6">
                                    Nuestro Instructor
                                </h2>
                                <div className="prose prose-lg">
                                    <p className="mb-3 text-gray-700">
                                        Las clases son dirigidas por el Sensei Daniel López, con más de 20 años de experiencia en Aikido 
                                        y formado directamente bajo los linajes tradicionales de Japón.
                                    </p>
                                    <p className="mb-3 text-gray-700">
                                        El Sensei López enfatiza no solo la técnica física, sino también el desarrollo mental y espiritual 
                                        que caracteriza al verdadero Aikido.
                                    </p>
                                    <h3 className="text-xl font-montserrat font-semibold text-casa-purple mt-6 mb-3">
                                        ¿Quién puede practicar?
                                    </h3>
                                    <p className="text-gray-700">
                                        El Aikido es adecuado para personas de todas las edades y condiciones físicas. Ofrecemos clases 
                                        para adultos (desde los 16 años) y adaptamos el entrenamiento según la capacidad individual de cada practicante.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 bg-casa-purple text-white">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-3xl mx-auto animate-on-scroll">
                            <h2 className="text-3xl font-montserrat font-bold mb-6">
                                Comienza tu camino en el Aikido
                            </h2>
                            <p className="text-xl mb-8 opacity-90">
                                Te invitamos a conocer esta disciplina milenaria en CASA de Padua. 
                                La primera clase es sin cargo, ¡Acércate y prueba!
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a 
                                    href="tel:+541156789123"
                                    className="inline-block bg-casa-yellow text-casa-black font-montserrat px-8 py-4 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
                                >
                                    Llamar para información
                                </a>
                                <a 
                                    href="/"
                                    className="inline-block bg-transparent border-2 border-white text-white font-montserrat px-8 py-4 rounded-full hover:bg-white hover:text-casa-purple transition-all duration-300"
                                >
                                    Volver al Inicio
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}