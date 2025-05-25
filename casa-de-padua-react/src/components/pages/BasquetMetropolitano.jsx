import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { getApiBaseUrl } from '../../config/api';

export default function BasquetMetropolitano() {
    const [standings, setStandings] = useState(null);
    const [fixtures, setFixtures] = useState(null);
    const [lastUpdate, setLastUpdate] = useState(null);
    const [fixtureUpdate, setFixtureUpdate] = useState(null);
    const [error, setError] = useState(null);
    const [fixtureError, setFixtureError] = useState(null);
    
    useScrollAnimation();

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchStandings();
        fetchFixtures();
    }, []);      const fetchStandings = async () => {
        try {
            // Agregar un pequeño retraso para dar tiempo al servidor para responder
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // TODO: Este endpoint será reemplazado por el correspondiente para la liga Metropolitana
            // cuando esté disponible. Por ahora, usamos el mismo que para Federal.
            const baseUrl = getApiBaseUrl();
            const url = `${baseUrl}/api/standings/basquet`;
            console.log(`Intentando obtener datos de: ${url}`);
            
            // Hacer la solicitud a través del proxy en desarrollo o directo en producción
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            if (!response.ok) {
                throw new Error(`Error en la respuesta del servidor: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.error) {
                setError(data.error);
            } else {
                // Procesar los datos para asegurar que todos los campos estén presentes
                const processedStandings = data.standings.map(team => {
                    return {
                        posicion: team.posicion || "-",
                        equipo: team.equipo || "Equipo desconocido",
                        puntos: team.puntos || "0",
                        jugados: team.jugados || "0",
                        ganados: team.ganados || "0",
                        perdidos: team.perdidos || "0",
                        favor: team.favor || "0",
                        contra: team.contra || "0"
                    };
                });
                setStandings(processedStandings);
                setLastUpdate(new Date(data.last_update).toLocaleString());
            }
        } catch (error) {
            setError('Error al cargar la tabla de posiciones');
            console.error('Error:', error);
        }
    };    
      const fetchFixtures = async () => {
        try {
            // TODO: Este endpoint será reemplazado por el correspondiente para la liga Metropolitana
            // cuando esté disponible. Por ahora, usamos el mismo que para Federal.
            const baseUrl = getApiBaseUrl();
            const url = `${baseUrl}/api/fixtures/basquet`;
            console.log(`Intentando obtener fixtures de: ${url}`);
            
            // Hacer la solicitud a través del proxy en desarrollo o directo en producción
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            if (!response.ok) {
                throw new Error(`Error en la respuesta del servidor: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.error) {
                setFixtureError(data.error);
            } else {
                // Procesar los datos de fixtures
                const processedFixtures = data.fixtures.map(match => ({
                    local: match.local || "Equipo local desconocido",
                    visitante: match.visitante || "Equipo visitante desconocido",
                    fecha: match.fecha || "Fecha no disponible",
                    hora: match.hora || "Hora no disponible",
                    es_casa_local: !!match.es_casa_local
                }));
                
                setFixtures(processedFixtures);
                
                if (data.last_update) {
                    setFixtureUpdate(new Date(data.last_update).toLocaleString());
                }
            }
        } catch (error) {
            setFixtureError('Error al cargar los próximos partidos');
            console.error('Error fixtures:', error);
        }
    };

    return (
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
                            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 animate-fade-in">
                                Básquet CASA de Padua - Liga Metropolitana
                            </h1>
                            <p className="text-lg md:text-xl opacity-90 animate-slide-up">
                                Un equipo con historia y tradición compitiendo en la Liga Metropolitana de básquetbol.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de Historia y Foto */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2 animate-on-scroll">
                                <h2 className="text-3xl font-montserrat font-bold text-casa-blue mb-6">
                                    Nuestra Historia en el Básquet Metropolitano
                                </h2>
                                <p className="text-lg text-gray-700 mb-4">
                                    El básquet en CASA de Padua tiene una larga tradición que ha visto crecer a generaciones de jugadores. Nuestro equipo en la Liga Metropolitana representa el más alto nivel de competencia en la región.
                                </p>
                                <p className="text-lg text-gray-700 mb-4">
                                    Con entrenamientos intensivos y un plantel comprometido, buscamos destacar en cada partido y llevar los colores del club a lo más alto de la competencia metropolitana.
                                </p>
                                <p className="text-lg text-gray-700 mb-4">
                                    Contamos con un cuerpo técnico profesional y una base de jugadores con experiencia que nos permite competir al más alto nivel en esta prestigiosa liga.
                                </p>
                            </div>
                            <div className="md:w-1/2 animate-on-scroll">
                                <div className="rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                    <img 
                                        src="https://res.cloudinary.com/djt5usq8q/image/upload/v1746028606/backgroundweb_CASA_uvquqh.png"
                                        alt="Equipo de Básquet CASA de Padua - Liga Metropolitana"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabla de Posiciones */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12 animate-on-scroll">
                            <h2 className="text-3xl font-montserrat font-bold text-casa-blue mb-4">
                                Tabla de Posiciones - Liga Metropolitana
                            </h2>
                            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                Seguí en tiempo real la posición de nuestro equipo en la Liga Metropolitana.
                                Nuestros datos se actualizan automáticamente para mantenerte al día.
                            </p>
                        </div>
                        
                        {error ? (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-md" role="alert">
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <p className="font-medium">{error}</p>
                                </div>
                                <p className="mt-2 text-sm">Intentá recargar la página o volvé más tarde.</p>
                            </div>
                        ) : !standings ? (
                            <div className="flex justify-center items-center h-64 bg-white rounded-xl shadow-lg">
                                <div className="flex flex-col items-center">
                                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-casa-blue mb-4"></div>
                                    <p className="text-gray-600">Cargando tabla de posiciones...</p>
                                </div>
                            </div>
                        ) : (
                            <div className="overflow-x-auto animate-on-scroll bg-white rounded-xl shadow-lg">
                                <table className="min-w-full">
                                    <thead className="bg-casa-blue text-white">
                                        <tr>
                                            <th className="px-6 py-4 text-left font-montserrat">Pos</th>
                                            <th className="px-6 py-4 text-left font-montserrat">Equipo</th>
                                            <th className="px-6 py-4 text-center font-montserrat">Pts</th>
                                            <th className="px-6 py-4 text-center font-montserrat">J</th>
                                            <th className="px-6 py-4 text-center font-montserrat">G</th>
                                            <th className="px-6 py-4 text-center font-montserrat">P</th>
                                            <th className="px-6 py-4 text-center font-montserrat">GF</th>
                                            <th className="px-6 py-4 text-center font-montserrat">GC</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {standings.map((team, index) => (
                                            <tr key={index} 
                                                className={`border-b transition-colors hover:bg-gray-100 ${
                                                    team.equipo.toLowerCase().includes("padua")
                                                        ? 'bg-casa-yellow/10 font-bold' 
                                                        : index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                                }`}
                                            >
                                                <td className="px-6 py-4 font-medium">{team.posicion}</td>
                                                <td className="px-6 py-4 font-medium">{team.equipo}</td>
                                                <td className="px-6 py-4 text-center font-medium">{team.puntos}</td>
                                                <td className="px-6 py-4 text-center">{team.jugados}</td>
                                                <td className="px-6 py-4 text-center">{team.ganados}</td>
                                                <td className="px-6 py-4 text-center">{team.perdidos}</td>
                                                <td className="px-6 py-4 text-center">{team.favor}</td>
                                                <td className="px-6 py-4 text-center">{team.contra}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {lastUpdate && (
                                    <p className="text-sm text-gray-500 p-4 text-right">
                                        Última actualización: {lastUpdate}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Próximos Partidos */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12 animate-on-scroll">
                        <h2 className="text-3xl font-montserrat font-bold text-casa-blue mb-4">
                            Próximos Partidos
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Vení a alentar a nuestro equipo en los próximos encuentros.
                            Tu apoyo es fundamental para alcanzar los objetivos.
                        </p>
                    </div>
                    
                    {fixtureError ? (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-md" role="alert">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <p className="font-medium">{fixtureError}</p>
                            </div>
                            <p className="mt-2 text-sm">Intentá recargar la página o volvé más tarde.</p>
                        </div>
                    ) : !fixtures ? (
                        <div className="flex justify-center items-center h-64 bg-white rounded-xl shadow-lg">
                            <div className="flex flex-col items-center">
                                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-casa-blue mb-4"></div>
                                <p className="text-gray-600">Cargando próximos partidos...</p>
                            </div>
                        </div>
                    ) : fixtures && fixtures.length > 0 ? (
                        <div className="grid md:grid-cols-3 gap-6 animate-on-scroll">
                            {fixtures.slice(0, 3).map((match, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className={`p-1 ${match.es_casa_local ? 'bg-casa-blue' : 'bg-gray-700'} text-white text-center font-medium`}>
                                        {match.fecha} {match.hora && `- ${match.hora}`}
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-center">
                                            <div className="text-center">
                                                <div className={`font-bold ${match.local.toLowerCase().includes('padua') ? 'text-casa-blue' : ''}`}>
                                                    {match.local}
                                                </div>
                                                <div className="text-sm text-gray-600">LOCAL</div>
                                            </div>
                                            <div className="text-xl font-bold">VS</div>
                                            <div className="text-center">
                                                <div className={`font-bold ${match.visitante.toLowerCase().includes('padua') ? 'text-casa-blue' : ''}`}>
                                                    {match.visitante}
                                                </div>
                                                <div className="text-sm text-gray-600">VISITANTE</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : fixtures && fixtures.length === 0 ? (
                        <div className="bg-white p-8 rounded-xl shadow-lg text-center animate-on-scroll">
                            <p className="text-lg text-gray-700">No hay próximos partidos programados en este momento.</p>
                            <p className="mt-2 text-gray-500">Volvé a consultar pronto para ver las actualizaciones del fixture.</p>
                        </div>
                    ) : null}
                    
                    {fixtureUpdate && fixtures && fixtures.length > 0 && (
                        <p className="text-sm text-gray-500 p-4 text-center mt-4">
                            Última actualización: {fixtureUpdate}
                        </p>
                    )}
                </div>
            </section>

            {/* Categorías y Horarios */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6 animate-on-scroll">
                            <h2 className="text-3xl font-montserrat font-bold text-casa-blue">
                                Horarios de Entrenamiento
                            </h2>
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                <h3 className="text-xl font-bold mb-4 text-casa-blue">Liga Metropolitana</h3>
                                <p className="mb-2"><span className="font-medium">Categoría:</span> Mayor</p>
                                <p><span className="font-medium">Horarios:</span> Martes y Jueves de 21:00 a 23:00hs</p>
                            </div>
                        </div>
                        <div className="space-y-6 animate-on-scroll">
                            <h2 className="text-3xl font-montserrat font-bold text-casa-blue">
                                Información Adicional
                            </h2>
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                <h3 className="text-xl font-bold mb-4 text-casa-blue">Sobre el Torneo</h3>
                                <p className="mb-4">La Liga Metropolitana de Básquet es una de las competiciones de mayor prestigio en la región, donde participan equipos de alto nivel competitivo.</p>
                                <p className="mb-4">Nuestro equipo representa a CASA de Padua con orgullo y dedicación, buscando destacar en cada encuentro y llevar los colores del club a lo más alto.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}