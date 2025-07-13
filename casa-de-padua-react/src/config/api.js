// Configuración de API para diferentes entornos

// URL base para la API en producción
// URL del backend en Render (debe coincidir con la configurada en firebase.json)
const PRODUCTION_API_BASE_URL = 'https://padua-backend.onrender.com';

// Determinar si estamos en desarrollo o producción
const isDevelopment = import.meta.env.DEV;

// Exportar la URL base adecuada según el entorno
export const getApiBaseUrl = () => {
  // En desarrollo, usamos URLs relativas que funcionan con el proxy de Vite
  // En producción, usamos la URL completa del backend en Render
  return isDevelopment ? '' : PRODUCTION_API_BASE_URL;
};

// Función para construir URLs de endpoints específicos
export const getApiUrl = (endpoint) => {
  const baseUrl = getApiBaseUrl();
  // Si estamos en desarrollo, el endpoint ya incluye 'api/', así que lo usamos directamente
  // Si estamos en producción, necesitamos concatenar con la URL base
  if (isDevelopment) {
    return `/${endpoint}`;
  } else {
    return `${baseUrl}/${endpoint}`;
  }
};
