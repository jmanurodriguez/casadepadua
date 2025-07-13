import React from 'react';

/**
 * Componente de botón de Instagram ultra simplificado
 * Esta implementación utiliza la estrategia más básica posible
 * para garantizar el funcionamiento de los enlaces
 */
function InstagramButtonFinal({ url }) {
  return (
    <div 
      onClick={() => {
        // Abre Instagram en una nueva pestaña
        window.open(url, '_blank');
      }}
      style={{
        backgroundColor: '#ffca28',
        color: '#111',
        padding: '15px 25px',
        borderRadius: '25px',
        fontWeight: 'bold',
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        zIndex: 9999,
        position: 'relative'
      }}
    >
      <span style={{ marginRight: '10px' }}>📱</span>
      Seguinos en Instagram
    </div>
  );
}

export default InstagramButtonFinal;
