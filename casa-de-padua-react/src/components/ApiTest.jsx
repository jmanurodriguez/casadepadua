import { useEffect, useState } from 'react';

export default function ApiTest() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const testApi = async () => {
            try {
                console.log('=== PRUEBA API ===');
                console.log('Entorno de desarrollo:', import.meta.env.DEV);
                
                // Probar conexión directa primero
                console.log('Probando conexión directa...');
                const directResponse = await fetch('http://localhost:8000/api/standings/basquet');
                console.log('Respuesta directa:', directResponse.status, directResponse.statusText);
                
                if (directResponse.ok) {
                    const directData = await directResponse.json();
                    console.log('Datos directos:', directData);
                    setData({ type: 'direct', data: directData });
                } else {
                    throw new Error('Error en conexión directa');
                }
                
            } catch (directError) {
                console.log('Error directo:', directError);
                
                try {
                    // Probar a través del proxy
                    console.log('Probando conexión vía proxy...');
                    const proxyResponse = await fetch('/api/standings/basquet');
                    console.log('Respuesta proxy:', proxyResponse.status, proxyResponse.statusText);
                    
                    if (proxyResponse.ok) {
                        const proxyData = await proxyResponse.json();
                        console.log('Datos proxy:', proxyData);
                        setData({ type: 'proxy', data: proxyData });
                    } else {
                        throw new Error('Error en conexión proxy');
                    }
                    
                } catch (proxyError) {
                    console.log('Error proxy:', proxyError);
                    setError(`Direct: ${directError.message}, Proxy: ${proxyError.message}`);
                }
            } finally {
                setLoading(false);
            }
        };

        testApi();
    }, []);

    if (loading) return <div>Cargando prueba de API...</div>;
    if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;
    if (!data) return <div>No hay datos</div>;

    return (
        <div style={{ padding: '20px', fontFamily: 'monospace' }}>
            <h2>Prueba de API - Conexión {data.type}</h2>
            <h3>Datos recibidos:</h3>
            <pre>{JSON.stringify(data.data, null, 2)}</pre>
            
            {data.data.standings && (
                <div>
                    <h3>Tabla de Posiciones:</h3>
                    <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
                        <thead>
                            <tr>
                                <th>Pos</th>
                                <th>Equipo</th>
                                <th>Puntos</th>
                                <th>PJ</th>
                                <th>PG</th>
                                <th>PP</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.standings.map((team, index) => (
                                <tr key={index} style={{ backgroundColor: team.equipo.includes('PADUA') ? '#ffff99' : 'white' }}>
                                    <td>{team.posicion}</td>
                                    <td>{team.equipo}</td>
                                    <td>{team.puntos}</td>
                                    <td>{team.jugados}</td>
                                    <td>{team.ganados}</td>
                                    <td>{team.perdidos}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
