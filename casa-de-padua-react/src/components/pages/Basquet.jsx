import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Basquet() {
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
    }, []);    const fetchStandings = async () => {
        try {
            // Agregar un pequeño retraso para dar tiempo al servidor para responder
            // (esto puede ayudar con los servidores gratuitos de render.com que a veces tienen "cold starts")
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Lista de URLs para intentar, en orden de preferencia
            const urls = [
                'https://padua-backend.onrender.com/api/standings/basquet',
                'http://localhost:8000/api/standings/basquet'
            ];
            
            let response = null;
            let error = null;
            
            // Intentar cada URL hasta que una tenga éxito
            for (const url of urls) {
                try {
                    console.log(`Intentando obtener datos de: ${url}`);
                    // Usar mode: 'cors' para manejar CORS correctamente
                    response = await fetch(url, {
                        method: 'GET',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    
                    if (response.ok) {
                        break; // Si la respuesta es exitosa, salir del bucle
                    }
                } catch (e) {
                    error = e;
                    console.log(`Error al intentar con ${url}:`, e);
                    // Continúa intentando con la siguiente URL
                }
            }
            
            // Si ninguna URL funcionó
            if (!response || !response.ok) {
                throw new Error(`No se pudo conectar al servidor. ${error ? error.message : ''}`);
            }
            
            const data = await response.json();
            
            if (data.error) {
                setError(data.error);
            } else {
                console.log("Standings data received:", data);
                if (data.standings && Array.isArray(data.standings)) {
                    // Asegurarse de que todos los equipos tienen todos los campos necesarios
                    const processedStandings = data.standings.map(team => {
                        return {
                            posicion: team.posicion || "-",
                            equipo: team.equipo || "Equipo desconocido",
                            puntos: team.puntos || "0",
                            jugados: team.jugados || "0",
                            ganados: team.ganados || "0",
                            perdidos: team.perdidos || "0",
                            favor: team.favor || "0",
                            contra: team.contra || "0",
                            diferencia: team.diferencia || "0"
                        };
                    });
                    
                    setStandings(processedStandings);
                    if (data.last_update) {
                        setLastUpdate(new Date(data.last_update).toLocaleString());
                    }
                } else {
                    // Cargar datos de fallback en caso de no recibir datos válidos
                    const fallbackData = [
                        {"posicion": "1", "equipo": "RIVER", "puntos": "31", "jugados": "16", "ganados": "15", "perdidos": "1", "favor": "1205", "contra": "1002", "diferencia": "203"},
                        {"posicion": "2", "equipo": "CASA de Padua", "puntos": "29", "jugados": "16", "ganados": "13", "perdidos": "3", "favor": "1180", "contra": "1056", "diferencia": "124"},
                        {"posicion": "3", "equipo": "Deportivo Morón", "puntos": "28", "jugados": "16", "ganados": "12", "perdidos": "4", "favor": "1140", "contra": "1099", "diferencia": "41"},
                        {"posicion": "4", "equipo": "Vélez Sarsfield", "puntos": "26", "jugados": "16", "ganados": "10", "perdidos": "6", "favor": "1120", "contra": "1111", "diferencia": "9"},
                        {"posicion": "5", "equipo": "Hacoaj", "puntos": "25", "jugados": "16", "ganados": "9", "perdidos": "7", "favor": "1080", "contra": "1095", "diferencia": "-15"}
                    ];
                    setStandings(fallbackData);
                    setLastUpdate("Usando datos de respaldo - Servidor no disponible");
                    setError(null); // Limpiamos el error ya que mostramos datos de fallback
                    console.warn("Usando datos de fallback para la tabla de posiciones");
                }
            }
        } catch (error) {
            // Cargar datos de fallback en caso de cualquier error
            const fallbackData = [
                {"posicion": "1", "equipo": "RIVER", "puntos": "31", "jugados": "16", "ganados": "15", "perdidos": "1", "favor": "1205", "contra": "1002", "diferencia": "203"},
                {"posicion": "2", "equipo": "CASA de Padua", "puntos": "29", "jugados": "16", "ganados": "13", "perdidos": "3", "favor": "1180", "contra": "1056", "diferencia": "124"},
                {"posicion": "3", "equipo": "Deportivo Morón", "puntos": "28", "jugados": "16", "ganados": "12", "perdidos": "4", "favor": "1140", "contra": "1099", "diferencia": "41"},
                {"posicion": "4", "equipo": "Vélez Sarsfield", "puntos": "26", "jugados": "16", "ganados": "10", "perdidos": "6", "favor": "1120", "contra": "1111", "diferencia": "9"},
                {"posicion": "5", "equipo": "Hacoaj", "puntos": "25", "jugados": "16", "ganados": "9", "perdidos": "7", "favor": "1080", "contra": "1095", "diferencia": "-15"}
            ];
            setStandings(fallbackData);
            setLastUpdate("Usando datos de respaldo - " + new Date().toLocaleString());
            setError(null); // Limpiamos el error ya que mostramos datos de fallback
            console.error('Error al cargar la tabla de posiciones:', error);
            console.warn("Usando datos de fallback para la tabla de posiciones");
        }
    };const fetchFixtures = async () => {
        try {
            // Agregar un pequeño retraso para dar tiempo al servidor para responder
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Lista de URLs para intentar, en orden de preferencia
            const urls = [
                'https://padua-backend.onrender.com/api/fixtures/basquet',
                'http://localhost:8000/api/fixtures/basquet'
            ];
            
            let response = null;
            let error = null;
            
            // Intentar cada URL hasta que una tenga éxito
            for (const url of urls) {
                try {
                    console.log(`Intentando obtener fixtures de: ${url}`);
                    // Usar mode: 'cors' y credentials: 'include' para manejar CORS correctamente
                    response = await fetch(url, {
                        method: 'GET',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    
                    if (response.ok) {
                        break; // Si la respuesta es exitosa, salir del bucle
                    }
                } catch (e) {
                    error = e;
                    console.log(`Error al intentar con ${url}:`, e);
                    // Continúa intentando con la siguiente URL
                }
            }
            
            // Si ninguna URL funcionó
            if (!response || !response.ok) {
                throw new Error(`No se pudo conectar al servidor. ${error ? error.message : ''}`);
            }
            
            const data = await response.json();
            
            if (data.error && data.error !== "No se encontraron próximos partidos") {
                setFixtureError(data.error);
            } else {
                console.log("Fixtures data received:", data);
                if (data.fixtures && Array.isArray(data.fixtures) && data.fixtures.length > 0) {
                    setFixtures(data.fixtures);
                    if (data.last_update) {
                        setFixtureUpdate(new Date(data.last_update).toLocaleString());
                    }
                } else {
                    // Cargar datos de fallback en caso de no recibir datos válidos
                    const fallbackFixtures = [
                        {
                            "local": "CASA de Padua",
                            "visitante": "Defensores de Santos Lugares",
                            "fecha": "02/06/2025",
                            "hora": "21:00",
                            "es_casa_local": true
                        },
                        {
                            "local": "Sportivo Escobar",
                            "visitante": "CASA de Padua",
                            "fecha": "09/06/2025",
                            "hora": "21:30",
                            "es_casa_local": false
                        },
                        {
                            "local": "CASA de Padua",
                            "visitante": "Club Social Morón",
                            "fecha": "16/06/2025",
                            "hora": "21:00",
                            "es_casa_local": true
                        }
                    ];
                    setFixtures(fallbackFixtures);
                    setFixtureUpdate("Usando datos de respaldo - " + new Date().toLocaleString());
                    setFixtureError(null); // Limpiamos el error ya que mostramos datos de fallback
                    console.warn("Usando datos de fallback para los fixtures");
                }
            }
        } catch (error) {
            // Cargar datos de fallback en caso de cualquier error
            const fallbackFixtures = [
                {
                    "local": "CASA de Padua",
                    "visitante": "Defensores de Santos Lugares",
                    "fecha": "02/06/2025",
                    "hora": "21:00",
                    "es_casa_local": true
                },
                {
                    "local": "Sportivo Escobar",
                    "visitante": "CASA de Padua",
                    "fecha": "09/06/2025",
                    "hora": "21:30",
                    "es_casa_local": false
                },
                {
                    "local": "CASA de Padua",
                    "visitante": "Club Social Morón",
                    "fecha": "16/06/2025",
                    "hora": "21:00",
                    "es_casa_local": true
                }
            ];
            setFixtures(fallbackFixtures);
            setFixtureUpdate("Usando datos de respaldo - " + new Date().toLocaleString());
            setFixtureError(null); // Limpiamos el error ya que mostramos datos de fallback
            console.error('Error al cargar los próximos partidos:', error);
            console.warn("Usando datos de fallback para los fixtures");
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
                                    Básquet CASA de Padua
                                </h1>
                                <p className="text-lg md:text-xl opacity-90 animate-slide-up">
                                    Formando deportistas y personas desde 1925. Vivimos el básquet con pasión y compromiso.
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
                                        Nuestra Historia en el Básquet
                                    </h2>
                                    <p className="text-lg text-gray-700 mb-4">
                                        El básquet en CASA de Padua tiene una rica tradición que se remonta a los primeros años del club. Fundado con el objetivo de fomentar los valores deportivos y la disciplina, nuestro equipo ha sido cuna de grandes talentos a lo largo de los años.
                                    </p>
                                    <p className="text-lg text-gray-700 mb-4">
                                        Actualmente, competimos en la Liga Federal, donde nuestro equipo de Primera División representa con orgullo los colores del club en cada encuentro, demostrando dedicación, espíritu deportivo y un juego de alto nivel.
                                    </p>
                                    <p className="text-lg text-gray-700 mb-4">
                                        En nuestras divisiones formativas, trabajamos no solo para desarrollar habilidades técnicas, sino también para inculcar valores fundamentales como el respeto, el trabajo en equipo y la superación personal.
                                    </p>
                                </div>
                                <div className="md:w-1/2 animate-on-scroll">
                                    <div className="rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                        <img 
                                            src="https://res.cloudinary.com/djt5usq8q/image/upload/v1744812494/PADUA-194_1_weef34.jpg"
                                            alt="Equipo de Básquet CASA de Padua"
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
                                <h2 className="text-3xl font-montserrat font-bold text-casa-purple mb-4">
                                    Tabla de Posiciones - Liga Federal
                                </h2>
                                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                    Seguí en tiempo real la posición de nuestro equipo en la Liga Federal. 
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
                            ) : standings ? (
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
                                                <th className="px-6 py-4 text-center font-montserrat">GF</th>
                                                <th className="px-6 py-4 text-center font-montserrat">GC</th>
                                                <th className="px-6 py-4 text-center font-montserrat">Dif</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {standings.map((team, index) => (                                                <tr key={index} 
                                                    className={`border-b transition-colors hover:bg-gray-100 ${
                                                        (team.equipo && (team.equipo.includes("CASA") || team.equipo.includes("Padua"))) 
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
                                                    <td className="px-6 py-4 text-center">{team.favor || '-'}</td>
                                                    <td className="px-6 py-4 text-center">{team.contra || '-'}</td>
                                                    <td className="px-6 py-4 text-center">{team.diferencia || '0'}</td>
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
                                Vení a alentar a nuestro equipo en los próximos encuentros de local.
                                El apoyo de nuestra hinchada es fundamental para lograr los objetivos.
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
                        ) : fixtures && fixtures.length > 0 ? (
                            <div className="grid md:grid-cols-3 gap-6 animate-on-scroll">
                                {fixtures.slice(0, 3).map((match, index) => (
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
                        ) : fixtures && fixtures.length === 0 ? (
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
                                <h2 className="text-3xl font-montserrat font-bold text-casa-purple">
                                    Categorías y Horarios
                                </h2>
                                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                    <h3 className="text-xl font-bold mb-4 text-casa-purple">Mini Básquet</h3>
                                    <p className="mb-2"><span className="font-medium">Edades:</span> 8 a 12 años</p>
                                    <p><span className="font-medium">Horarios:</span> Martes y Jueves de 17:30 a 19:00hs</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                    <h3 className="text-xl font-bold mb-4 text-casa-purple">U13</h3>
                                    <p className="mb-2"><span className="font-medium">Edades:</span> 12 y 13 años</p>
                                    <p><span className="font-medium">Horarios:</span> Martes y Jueves de 19:00 a 20:30hs</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                    <h3 className="text-xl font-bold mb-4 text-casa-purple">U15 y U17</h3>
                                    <p className="mb-2"><span className="font-medium">Edades:</span> 14 a 17 años</p>
                                    <p><span className="font-medium">Horarios:</span> Lunes, Miércoles y Viernes de 19:00 a 20:30hs</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                    <h3 className="text-xl font-bold mb-4 text-casa-purple">Primera División</h3>
                                    <p className="mb-2"><span className="font-medium">Categoría:</span> Mayor</p>
                                    <p><span className="font-medium">Horarios:</span> Lunes, Miércoles y Viernes de 20:30 a 22:30hs</p>
                                </div>
                            </div>
                            <div className="space-y-6 animate-on-scroll">
                                <h2 className="text-3xl font-montserrat font-bold text-casa-purple">
                                    Contacto y Ubicación
                                </h2>
                                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                    <h3 className="text-xl font-bold mb-4 text-casa-purple">Director Técnico</h3>
                                    <p className="mb-2">Prof. Juan Pérez</p>
                                    <p className="flex items-center mt-2">
                                        <i className="fab fa-whatsapp text-green-500 mr-2 text-xl"></i>
                                        <span>11-1234-5678</span>
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                    <h3 className="text-xl font-bold mb-4 text-casa-purple">Coordinador de Divisiones Formativas</h3>
                                    <p className="mb-2">Prof. Pedro González</p>
                                    <p className="flex items-center mt-2">
                                        <i className="fab fa-whatsapp text-green-500 mr-2 text-xl"></i>
                                        <span>11-8765-4321</span>
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                    <h3 className="text-xl font-bold mb-4 text-casa-purple">Ubicación</h3>
                                    <p className="mb-2">Independencia 725, B1718 San Antonio de Padua, Provincia de Buenos Aires</p>
                                    <p className="mt-4">
                                        <a 
                                            href="https://maps.app.goo.gl/7TRvhd5JTQwFWKWK7" 
                                            target="_blank"
                                            rel="noopener noreferrer" 
                                            className="inline-flex items-center text-casa-purple hover:text-casa-yellow transition-colors"
                                        >
                                            <i className="fas fa-map-marker-alt mr-2"></i>
                                            Ver en Google Maps
                                        </a>
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                    <h3 className="text-xl font-bold mb-4 text-casa-purple">Seguinos en Redes</h3>
                                    <div className="flex space-x-4">
                                        <a 
                                            href="https://www.instagram.com/casapadua/" 
                                            target="_blank"
                                            rel="noopener noreferrer" 
                                            className="p-2 bg-casa-purple text-white rounded-full hover:bg-casa-yellow hover:text-casa-black transition-colors"
                                        >
                                            <i className="fab fa-instagram text-xl"></i>
                                        </a>
                                        <a 
                                            href="https://www.facebook.com/casadepadua/" 
                                            target="_blank"
                                            rel="noopener noreferrer" 
                                            className="p-2 bg-casa-purple text-white rounded-full hover:bg-casa-yellow hover:text-casa-black transition-colors"
                                        >
                                            <i className="fab fa-facebook-f text-xl"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección CTA */}
                <section className="py-16 bg-casa-purple text-white">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h2 className="text-3xl font-montserrat font-bold mb-6 animate-on-scroll">
                            ¿Querés formar parte de nuestro equipo?
                        </h2>
                        <p className="text-xl mb-8 animate-on-scroll">
                            Te invitamos a sumarte a las divisiones del club. El básquet de CASA te espera para vivir juntos la pasión por este deporte.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll">
                            <a 
                                href="#contacto" 
                                className="bg-white text-casa-purple font-montserrat px-8 py-4 rounded-full hover:bg-casa-yellow hover:text-black transition-all duration-300 shadow-lg inline-flex items-center justify-center"
                            >
                                <i className="fas fa-envelope mr-2"></i>
                                Contactanos
                            </a>
                            <a 
                                href="/valores-y-dias" 
                                className="bg-transparent border-2 border-white text-white font-montserrat px-8 py-4 rounded-full hover:bg-white hover:text-casa-purple transition-all duration-300 shadow-lg inline-flex items-center justify-center"
                            >
                                <i className="fas fa-info-circle mr-2"></i>
                                Ver Valores
                            </a>
                        </div>
                    </div>                </section>
            </main>
    );
}