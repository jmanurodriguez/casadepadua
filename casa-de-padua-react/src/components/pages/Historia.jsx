import { useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Historia() {
    useScrollAnimation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const images = [
        {
            src: "https://res.cloudinary.com/djt5usq8q/image/upload/v1745593585/viejacasa1_ao515i.jpg",
            alt: "CASA de Padua - Primera Sede",
            caption: "Primera sede del club (1926)",
            description: "Los humildes comienzos que marcaron el inicio de una gran historia"
        },
        {
            src: "https://res.cloudinary.com/djt5usq8q/image/upload/v1745593584/viejacasa2_twslfi.jpg",
            alt: "CASA de Padua - Eventos Históricos",
            caption: "Eventos históricos que marcaron nuestra historia",
            description: "Momentos inolvidables que forjaron nuestra identidad institucional"
        },
        {
            src: "https://res.cloudinary.com/djt5usq8q/image/upload/v1745593585/viejacasa3_f1jrxs.jpg",
            alt: "CASA de Padua - Crecimiento",
            caption: "El crecimiento del club a través de los años",
            description: "El progreso constante que nos llevó a ser quienes somos hoy"
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
                                    Nuestra Historia
                                </h1>
                                <p className="text-xl md:text-2xl opacity-90 animate-slide-up">
                                    Un viaje a través del tiempo desde 1926
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
                                    El Club Atlético San Antonio de Padua (CASA) fue fundado el 13 de junio de 1926 
                                    por un grupo de vecinos entusiastas que buscaban crear un espacio de encuentro 
                                    y desarrollo deportivo para la comunidad.
                                </p>
                            </div>

                            {/* Galería de imágenes históricas en disposición vertical */}
                            <div className="space-y-24 mb-20">
                                {images.map((image, index) => (
                                    <div 
                                        key={image.alt}
                                        className={`animate-on-scroll flex flex-col md:flex-row items-center gap-8 ${
                                            index % 2 === 0 ? '' : 'md:flex-row-reverse'
                                        }`}
                                    >
                                        <div className="md:w-2/3">
                                            <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
                                                <img 
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className="w-full aspect-video object-cover transform group-hover:scale-110 transition-all duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                    <div className="absolute bottom-0 left-0 right-0 p-8">
                                                        <h3 className="text-white text-2xl font-bold mb-2">{image.caption}</h3>
                                                        <p className="text-white/90 text-lg">{image.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:w-1/3 text-center md:text-left">
                                            <div className="p-6 bg-casa-purple/5 rounded-xl">
                                                <h2 className="text-2xl font-montserrat font-bold text-casa-purple mb-4">{image.caption}</h2>
                                                <p className="text-gray-600">{image.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Video de Facebook con tamaño aumentado */}
                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 mb-20 shadow-xl animate-on-scroll">
                                <h2 className="text-4xl font-montserrat font-bold text-casa-purple mb-12 text-center">
                                    Memorias de Nuestro Club
                                </h2>
                                <div className="flex justify-center">
                                    <div className="relative w-[320px] h-[580px] shadow-2xl rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                                        <iframe 
                                            src="https://www.facebook.com/plugins/video.php?height=580&href=https%3A%2F%2Fwww.facebook.com%2Fgabriela.leon.9028%2Fvideos%2F274076844585142%2F%3Fidorvanity%3D168786513286332&show_text=false&width=320&t=0" 
                                            width="320" 
                                            height="580" 
                                            style={{ border: 'none', overflow: 'hidden' }}
                                            scrolling="no" 
                                            frameBorder="0" 
                                            allowFullScreen={true}
                                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                            title="Historia CASA de Padua"
                                            className="rounded-2xl"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Nueva sección final con fondo violeta */}
                            <div className="relative overflow-hidden rounded-3xl animate-on-scroll">
                                <div className="bg-casa-purple text-white p-12 md:p-16">
                                    <div className="relative z-10 text-center space-y-8">
                                        <h2 className="text-3xl md:text-4xl font-montserrat font-bold">
                                            Conocé más sobre nuestra rica historia
                                        </h2>
                                        <p className="text-xl opacity-90 max-w-2xl mx-auto">
                                            Casi 100 años de historia nos avalan. Descubrí más sobre nuestro legado 
                                            y el impacto que hemos tenido en la comunidad de Padua.
                                        </p>
                                        <a 
                                            href="https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_San_Antonio_de_Padua"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center bg-white text-casa-purple px-8 py-4 rounded-full hover:bg-casa-yellow hover:text-casa-black transition-all duration-300 shadow-lg group"
                                        >
                                            <span>Visitar nuestra página de Wikipedia</span>
                                            <i className="fas fa-external-link-alt ml-2 transform group-hover:translate-x-1 transition-transform"></i>
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