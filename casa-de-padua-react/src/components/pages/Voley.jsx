import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

export default function Voley() {
    const [standingsTiraA, setStandingsTiraA] = useState(null);
    const [standingsTiraB, setStandingsTiraB] = useState(null);
    const [fixturesTiraA, setFixturesTiraA] = useState(null);
    const [fixturesTiraB, setFixturesTiraB] = useState(null);
    const [lastUpdateTiraA, setLastUpdateTiraA] = useState(null);
    const [lastUpdateTiraB, setLastUpdateTiraB] = useState(null);
    const [fixtureUpdateA, setFixtureUpdateA] = useState(null);
    const [fixtureUpdateB, setFixtureUpdateB] = useState(null);
    const [errorTiraA, setErrorTiraA] = useState(null);
    const [errorTiraB, setErrorTiraB] = useState(null);
    const [fixtureErrorA, setFixtureErrorA] = useState(null);
    const [fixtureErrorB, setFixtureErrorB] = useState(null);

    const [activeTab, setActiveTab] = useState('tiraA'); // 'tiraA' o 'tiraB'
    
    useScrollAnimation();

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchData();
    }, []);    const fetchData = async () => {
        try {            // Función para hacer fetch usando URL relativa (para que funcione con proxy de Vite)
            const fetchWithFallback = async (endpoint) => {
                try {
                    console.log(`Intentando obtener datos de: ${endpoint} (a través del proxy)`);
                    
                    // Usar URL relativa para que funcione con el proxy de Vite
                    const response = await fetch(endpoint, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    
                    if (response.ok) {
                        return await response.json();
                    } else {
                        throw new Error(`Error en la respuesta del servidor: ${response.status}`);
                    }
                } catch (error) {
                    console.error(`Error al hacer fetch a ${endpoint}:`, error);
                    throw error;
                }
            };

            // Datos de fallback para todas las categorías
            const fallbackStandingsTiraA = [
                {"posicion": "1", "equipo": "HARRODS", "jugados": "45", "ganados": "36", "perdidos": "9", "favor": "84", "contra": "31", "puntos": "2519"},
                {"posicion": "2", "equipo": "CASA de Padua", "jugados": "45", "ganados": "34", "perdidos": "11", "favor": "77", "contra": "32", "puntos": "2418"},
                {"posicion": "3", "equipo": "DEFENSORES DE BANFIELD", "jugados": "46", "ganados": "30", "perdidos": "16", "favor": "68", "contra": "43", "puntos": "2287"},
                {"posicion": "4", "equipo": "GLORIAS", "jugados": "46", "ganados": "28", "perdidos": "18", "favor": "66", "contra": "49", "puntos": "2260"}
            ];
            
            const fallbackStandingsTiraB = [
                {"posicion": "1", "equipo": "MORON B", "jugados": "47", "ganados": "30", "perdidos": "17", "favor": "66", "contra": "43", "puntos": "2218"},
                {"posicion": "2", "equipo": "CASA de Padua B", "jugados": "47", "ganados": "28", "perdidos": "19", "favor": "63", "contra": "47", "puntos": "2179"},
                {"posicion": "3", "equipo": "SOCIAL ITALIANO", "jugados": "46", "ganados": "27", "perdidos": "19", "favor": "64", "contra": "50", "puntos": "2160"},
                {"posicion": "4", "equipo": "COMUNICACIONES", "jugados": "47", "ganados": "25", "perdidos": "22", "favor": "61", "contra": "54", "puntos": "2129"}
            ];
            
            const fallbackFixturesTiraA = [
                {
                    "local": "CASA de Padua",
                    "visitante": "HARRODS",
                    "fecha": "03/06/2025",
                    "hora": "20:00",
                    "es_casa_local": true
                },
                {
                    "local": "DEFENSORES DE BANFIELD",
                    "visitante": "CASA de Padua",
                    "fecha": "10/06/2025",
                    "hora": "21:00",
                    "es_casa_local": false
                }
            ];
            
            const fallbackFixturesTiraB = [
                {
                    "local": "CASA de Padua B",
                    "visitante": "MORON B",
                    "fecha": "02/06/2025",
                    "hora": "20:00",
                    "es_casa_local": true
                },
                {
                    "local": "SOCIAL ITALIANO",
                    "visitante": "CASA de Padua B",
                    "fecha": "09/06/2025",
                    "hora": "20:30",
                    "es_casa_local": false
                }
            ];            // Fetch Tira A data
            try {
                const dataA = await fetchWithFallback('/api/standings/voley/tira-a');
                
                if (dataA.error) {
                    setErrorTiraA(dataA.error);
                } else if (dataA.standings && Array.isArray(dataA.standings)) {
                    // Procesar los datos para asegurar que todos los campos estén presentes
                    const processedStandingsA = dataA.standings.map(team => {
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
                    
                    setStandingsTiraA(processedStandingsA);
                    if (dataA.last_update) {
                        setLastUpdateTiraA(new Date(dataA.last_update).toLocaleString());
                    }
                } else {
                    // Usar datos de fallback
                    setStandingsTiraA(fallbackStandingsTiraA);
                    setLastUpdateTiraA("Usando datos de respaldo - " + new Date().toLocaleString());
                    setErrorTiraA(null);
                    console.warn("No se encontraron datos de standings para Tira A, usando fallback");
                }
            } catch (e) {
                // Usar datos de fallback
                setStandingsTiraA(fallbackStandingsTiraA);
                setLastUpdateTiraA("Usando datos de respaldo - " + new Date().toLocaleString());
                setErrorTiraA(null);
                console.error('Error al cargar la tabla de posiciones Tira A:', e);
                console.warn("Usando datos de fallback para Tira A");
            }

            // Fetch Tira B data
            try {
                const dataB = await fetchWithFallback('/api/standings/voley/tira-b');
                
                if (dataB.error) {
                    setErrorTiraB(dataB.error);
                } else if (dataB.standings && Array.isArray(dataB.standings)) {
                    // Procesar los datos para asegurar que todos los campos estén presentes
                    const processedStandingsB = dataB.standings.map(team => {
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
                    
                    setStandingsTiraB(processedStandingsB);
                    if (dataB.last_update) {
                        setLastUpdateTiraB(new Date(dataB.last_update).toLocaleString());
                    }
                } else {
                    // Usar datos de fallback
                    setStandingsTiraB(fallbackStandingsTiraB);
                    setLastUpdateTiraB("Usando datos de respaldo - " + new Date().toLocaleString());
                    setErrorTiraB(null);
                    console.warn("No se encontraron datos de standings para Tira B, usando fallback");
                }
            } catch (e) {
                // Usar datos de fallback
                setStandingsTiraB(fallbackStandingsTiraB);
                setLastUpdateTiraB("Usando datos de respaldo - " + new Date().toLocaleString());
                setErrorTiraB(null);
                console.error('Error al cargar la tabla de posiciones Tira B:', e);
                console.warn("Usando datos de fallback para Tira B");
            }

            // Fetch Tira A fixtures
            try {
                const fixturesDataA = await fetchWithFallback('/api/fixtures/voley/tira-a');
                
                if (fixturesDataA.error && fixturesDataA.error !== "No se encontraron próximos partidos") {
                    setFixtureErrorA(fixturesDataA.error);
                } else if (fixturesDataA.fixtures && Array.isArray(fixturesDataA.fixtures) && fixturesDataA.fixtures.length > 0) {
                    setFixturesTiraA(fixturesDataA.fixtures);
                    if (fixturesDataA.last_update) {
                        setFixtureUpdateA(new Date(fixturesDataA.last_update).toLocaleString());
                    }
                } else {
                    // Usar datos de fallback
                    setFixturesTiraA(fallbackFixturesTiraA);
                    setFixtureUpdateA("Usando datos de respaldo - " + new Date().toLocaleString());
                    setFixtureErrorA(null);
                    console.warn("No se encontraron datos de fixtures para Tira A, usando fallback");
                }
            } catch (e) {
                // Usar datos de fallback
                setFixturesTiraA(fallbackFixturesTiraA);
                setFixtureUpdateA("Usando datos de respaldo - " + new Date().toLocaleString());
                setFixtureErrorA(null);
                console.error('Error al cargar los próximos partidos de Tira A:', e);
                console.warn("Usando datos de fallback para fixtures de Tira A");
            }

            // Fetch Tira B fixtures
            try {
                const fixturesDataB = await fetchWithFallback('/api/fixtures/voley/tira-b');
                
                if (fixturesDataB.error && fixturesDataB.error !== "No se encontraron próximos partidos") {
                    setFixtureErrorB(fixturesDataB.error);
                } else if (fixturesDataB.fixtures && Array.isArray(fixturesDataB.fixtures) && fixturesDataB.fixtures.length > 0) {
                    setFixturesTiraB(fixturesDataB.fixtures);
                    if (fixturesDataB.last_update) {
                        setFixtureUpdateB(new Date(fixturesDataB.last_update).toLocaleString());
                    }
                } else {
                    // Usar datos de fallback
                    setFixturesTiraB(fallbackFixturesTiraB);
                    setFixtureUpdateB("Usando datos de respaldo - " + new Date().toLocaleString());
                    setFixtureErrorB(null);
                    console.warn("No se encontraron datos de fixtures para Tira B, usando fallback");
                }
            } catch (e) {
                // Usar datos de fallback
                setFixturesTiraB(fallbackFixturesTiraB);
                setFixtureUpdateB("Usando datos de respaldo - " + new Date().toLocaleString());
                setFixtureErrorB(null);
                console.error('Error al cargar los próximos partidos de Tira B:', e);
                console.warn("Usando datos de fallback para fixtures de Tira B");
            }
            
        } catch (error) {
            console.error('Error general al obtener datos:', error);
            // No establecemos errores generales aquí, ya que manejamos cada caso específicamente arriba
        }
    };

    // Determine which standings and fixtures to show based on active tab
    const activeStandings = activeTab === 'tiraA' ? standingsTiraA : standingsTiraB;
    const activeFixtures = activeTab === 'tiraA' ? fixturesTiraA : fixturesTiraB;
    const activeLastUpdate = activeTab === 'tiraA' ? lastUpdateTiraA : lastUpdateTiraB;
    const activeFixtureUpdate = activeTab === 'tiraA' ? fixtureUpdateA : fixtureUpdateB;
    const activeError = activeTab === 'tiraA' ? errorTiraA : errorTiraB;
    const activeFixtureError = activeTab === 'tiraA' ? fixtureErrorA : fixtureErrorB;

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
                                    Vóley CASA de Padua
                                </h1>
                                <p className="text-lg md:text-xl opacity-90">
                                    Formando deportistas y personas desde 1925. Vivimos el vóley con pasión y compromiso.
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
                                    <h2 className="text-3xl font-montserrat font-bold text-casa-purple mb-6">
                                        Nuestra Historia en el Vóley
                                    </h2>
                                    <p className="text-lg text-gray-700 mb-4">
                                        El vóley en CASA de Padua tiene una tradicióon que se remonta a los primeros años del club. Fundado con el objetivo de fomentar los valores deportivos y la disciplina, nuestro equipo ha sido cuna de grandes talentos a lo largo de los años.
                                    </p>
                                    <p className="text-lg text-gray-700 mb-4">
                                        Actualmente, competimos en la Liga Metropolitana de Vóley, donde nuestros equipos representan con orgullo los colores del club en cada encuentro, demostrando dedicación, espíritu deportivo y un juego de alto nivel.
                                    </p>
                                </div>
                                <div className="md:w-1/2 animate-on-scroll">
                                    <div className="rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                        <img 
                                            src="https://res.cloudinary.com/djt5usq8q/image/upload/v1744482545/voley_t0ftkx.jpg"
                                            alt="Equipo de Vóley CASA de Padua"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tabs para elegir entre Tira A y Tira B */}
                <section className="py-8 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex justify-center mb-8">
                                <div className="bg-white rounded-full shadow-lg p-1">
                                    <button 
                                        onClick={() => setActiveTab('tiraA')}
                                        className={`px-6 py-3 rounded-full font-montserrat font-semibold transition-all ${
                                            activeTab === 'tiraA' 
                                                ? 'bg-casa-purple text-white' 
                                                : 'bg-white text-casa-purple hover:bg-gray-100'
                                        }`}
                                    >
                                        Tira A
                                    </button>
                                    <button 
                                        onClick={() => setActiveTab('tiraB')}
                                        className={`px-6 py-3 rounded-full font-montserrat font-semibold transition-all ${
                                            activeTab === 'tiraB' 
                                                ? 'bg-casa-purple text-white' 
                                                : 'bg-white text-casa-purple hover:bg-gray-100'
                                        }`}
                                    >
                                        Tira B
                                    </button>
                                </div>
                            </div>
                            
                            <div className="text-center mb-6">
                                <h2 className="text-3xl font-montserrat font-bold text-casa-purple">
                                    {activeTab === 'tiraA' ? 'Primera División - Tira A' : 'Primera División - Tira B'}
                                </h2>
                                <p className="text-lg text-gray-700 mt-2">
                                    Liga Metropolitana de Vóley - Temporada 2024
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tabla de Posiciones */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 animate-on-scroll">
                                <h2 className="text-3xl font-montserrat font-bold text-casa-purple mb-4">
                                    Tabla de Posiciones
                                </h2>
                                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                    Seguí en tiempo real la posición de nuestro equipo en la Liga Metropolitana. 
                                    Nuestros datos se actualizan automáticamente para mantenerte al día.
                                </p>
                            </div>
                            
                            {activeError ? (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-md" role="alert">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <p className="font-medium">{activeError}</p>
                                    </div>
                                    <p className="mt-2 text-sm">Intentá recargar la página o volvé más tarde.</p>
                                </div>
                            ) : activeStandings ? (
                                <div className="overflow-x-auto animate-on-scroll bg-white rounded-xl shadow-lg">
                                    <table className="min-w-full">
                                        <thead className="bg-casa-purple text-white">
                                            <tr>
                                                <th className="px-6 py-4 text-left font-montserrat">Pos</th>
                                                <th className="px-6 py-4 text-left font-montserrat">Equipo</th>
                                                <th className="px-6 py-4 text-center font-montserrat">Pts</th>
                                                <th className="px-6 py-4 text-center font-montserrat">PJ</th>
                                                <th className="px-6 py-4 text-center font-montserrat">PG</th>
                                                <th className="px-6 py-4 text-center font-montserrat">PP</th>
                                            </tr>
                                        </thead>
                                        <tbody>                            {activeStandings.map((team, index) => (
                                                <tr key={index} 
                                                    className={`border-b transition-colors hover:bg-gray-100 ${
                                                        (team.equipo && (team.equipo.toLowerCase().includes("casa") || team.equipo.toLowerCase().includes("padua")))
                                                            ? 'bg-casa-yellow/10 font-bold' 
                                                            : index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                                    }`}
                                                >
                                                    <td className="px-6 py-4 font-medium">{team.posicion || '-'}</td>
                                                    <td className="px-6 py-4 font-medium">{team.equipo || '-'}</td>
                                                    <td className="px-6 py-4 text-center font-medium">{team.puntos || '-'}</td>
                                                    <td className="px-6 py-4 text-center">{team.jugados || '-'}</td>
                                                    <td className="px-6 py-4 text-center">{team.ganados || '-'}</td>
                                                    <td className="px-6 py-4 text-center">{team.perdidos || '-'}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    {activeLastUpdate && (
                                        <p className="text-sm text-gray-500 p-4 text-right">
                                            Última actualización: {activeLastUpdate}
                                        </p>
                                    )}
                                </div>
                            ) : (
                                <div className="flex justify-center items-center h-64 bg-white rounded-xl shadow-lg">
                                    <div className="flex flex-col items-center">
                                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-casa-purple mb-4"></div>
                                        <p className="text-gray-600">Cargando tabla de posiciones...</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Próximos Partidos */}
                <section className="py-16">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-12 animate-on-scroll">
                            <h2 className="text-3xl font-montserrat font-bold text-casa-purple mb-4">
                                Próximos Partidos
                            </h2>
                            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                Acompañá a nuestro equipo en los próximos desafíos.
                                El aliento de la hinchada es clave para nuestros jugadores.
                            </p>
                        </div>
                        
                        {activeFixtureError ? (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-md" role="alert">
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <p className="font-medium">{activeFixtureError}</p>
                                </div>
                                <p className="mt-2 text-sm">Intentá recargar la página o volvé más tarde.</p>
                            </div>
                        ) : activeFixtures && activeFixtures.length > 0 ? (
                            <div className="grid md:grid-cols-3 gap-6 animate-on-scroll">
                                {activeFixtures.slice(0, 3).map((match, index) => (
                                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                        <div className={`p-1 ${match.es_casa_local ? 'bg-casa-purple' : 'bg-gray-700'} text-white text-center font-medium`}>
                                            {match.fecha} {match.hora && `- ${match.hora}`}
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-center">
                                                <div className="text-center">
                                                    <div className={`font-bold ${match.local.toLowerCase().includes('casa') || match.local.toLowerCase().includes('padua') ? 'text-casa-purple' : ''}`}>
                                                        {match.local}
                                                    </div>
                                                    <div className="text-sm text-gray-600">LOCAL</div>
                                                </div>
                                                <div className="text-xl font-bold">VS</div>
                                                <div className="text-center">
                                                    <div className={`font-bold ${match.visitante.toLowerCase().includes('casa') || match.visitante.toLowerCase().includes('padua') ? 'text-casa-purple' : ''}`}>
                                                        {match.visitante}
                                                    </div>
                                                    <div className="text-sm text-gray-600">VISITANTE</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : activeFixtures && activeFixtures.length === 0 ? (
                            <div className="bg-white p-8 rounded-xl shadow-lg text-center animate-on-scroll">
                                <p className="text-lg text-gray-700">No hay próximos partidos programados en este momento.</p>
                                <p className="mt-2 text-gray-500">Volvé a consultar pronto para ver las actualizaciones del fixture.</p>
                            </div>
                        ) : (
                            <div className="flex justify-center items-center h-64 bg-white rounded-xl shadow-lg">
                                <div className="flex flex-col items-center">
                                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-casa-purple mb-4"></div>
                                    <p className="text-gray-600">Cargando próximos partidos...</p>
                                </div>
                            </div>
                        )}
                        
                        {activeFixtureUpdate && activeFixtures && activeFixtures.length > 0 && (
                            <p className="text-sm text-gray-500 p-4 text-center mt-4">
                                Última actualización: {activeFixtureUpdate}
                            </p>
                        )}
                    </div>
                </section>

                {/* Enlaces a las páginas individuales */}
                <section className="py-16 bg-casa-purple text-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-12 animate-on-scroll">
                            <h2 className="text-3xl font-montserrat font-bold mb-4">
                                Conocé más sobre nuestros equipos
                            </h2>
                            <p className="text-lg opacity-90 max-w-3xl mx-auto">
                                Visitá las páginas dedicadas a cada división para ver información exclusiva, fotos, videos y más.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8 animate-on-scroll">
                            <a href="/tira-a" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-8 rounded-xl border border-white/20 transition-all hover:shadow-xl text-center">
                                <h3 className="text-2xl font-montserrat font-bold mb-3">Primera División - Tira A</h3>
                                <p className="opacity-80 mb-4">
                                    Conocé al equipo que compite en la máxima categoría de la Liga Metropolitana, su plantel completo y próximos desafíos.
                                </p>
                                <span className="inline-flex items-center font-medium">
                                    Ver más información 
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                            </a>
                            
                            <a href="/tira-b" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-8 rounded-xl border border-white/20 transition-all hover:shadow-xl text-center">
                                <h3 className="text-2xl font-montserrat font-bold mb-3">Primera División - Tira B</h3>
                                <p className="opacity-80 mb-4">
                                    Descubrí los detalles del equipo que representa a CASA de Padua en la Tira B, su historia y evolución a lo largo de la temporada.
                                </p>
                                <span className="inline-flex items-center font-medium">
                                    Ver más información 
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </section>
                
                {/* Enlaces de Inscripción */}
                <section className="py-16">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-12 animate-on-scroll">
                            <h2 className="text-3xl font-montserrat font-bold text-casa-purple mb-4">
                                Sumáte al Vóley de CASA
                            </h2>
                            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                Si querés formar parte de nuestros equipos o comenzar a practicar vóley en un ambiente formativo y amigable, ¡tenemos un lugar para vos!
                            </p>
                        </div>
                        
                        <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden animate-on-scroll">
                            <div className="grid md:grid-cols-2">
                                <div className="p-8 flex flex-col justify-center">
                                    <h3 className="text-2xl font-montserrat font-bold text-casa-purple mb-4">Escuelita de Vóley</h3>
                                    <ul className="space-y-2 mb-6">
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-casa-purple mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Niños y niñas de 8 a 12 años</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-casa-purple mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Martes y jueves de 17:30 a 19:00</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-casa-purple mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Profesores especializados en formación deportiva</span>
                                        </li>
                                    </ul>
                                    <a 
                                        href="/contacto" 
                                        className="bg-casa-purple hover:bg-casa-purple/80 text-white px-6 py-3 rounded-lg inline-flex items-center justify-center font-medium transition-colors"
                                    >
                                        Consultar por inscripción
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="hidden md:block">
                                    <img 
                                        src="https://res.cloudinary.com/djt5usq8q/image/upload/v1746055065/f49d98ca-cbf4-43af-98cf-af220977e5f1_vnk2wb.jpg"
                                        alt="Escuelita de Vóley CASA de Padua"
                                        className="w-full h-full object-cover"
                                    />
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