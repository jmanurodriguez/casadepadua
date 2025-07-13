import { getApiBaseUrl } from '../config/api';

export default function ConfigTest() {
    const baseUrl = getApiBaseUrl();
    const isDev = import.meta.env.DEV;
    
    return (
        <div style={{ padding: '20px', fontFamily: 'monospace' }}>
            <h2>Configuración API</h2>
            <p><strong>Es desarrollo:</strong> {isDev ? 'Sí' : 'No'}</p>
            <p><strong>Base URL:</strong> "{baseUrl}"</p>
            <p><strong>URL completa básquet:</strong> "{baseUrl}/api/standings/basquet"</p>
            
            <h3>Variables de entorno:</h3>
            <pre>{JSON.stringify(import.meta.env, null, 2)}</pre>
        </div>
    );
}
