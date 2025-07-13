import React from 'react';
import { createRoot } from 'react-dom/client';

/**
 * Componente directo para enlaces de Instagram sin nada que interfiera
 */
function DirectInstagramLinks() {
  const links = [
    {
      name: "Básquet CASA de Padua",
      url: "https://www.instagram.com/basquet.casadepadua/"
    },
    {
      name: "Vóley CASA de Padua",
      url: "https://www.instagram.com/voley.casadepadua/"
    },
    {
      name: "Gimnasia Rítmica",
      url: "https://www.instagram.com/ritmica.casadepadua/"
    },
    {
      name: "Natatorio CASA de Padua",
      url: "https://www.instagram.com/natatorio.casadepadua/"
    }
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '100vw',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <h1>Enlaces de Instagram CASA de Padua</h1>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        marginTop: '20px'
      }}>
        {links.map((link, index) => (
          <a 
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#ffca28',
              color: '#111',
              padding: '15px 25px',
              borderRadius: '25px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              fontWeight: 'bold',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
            onClick={(e) => {
              e.preventDefault();
              window.open(link.url, '_blank');
              console.log(`Abriendo: ${link.url}`);
            }}
          >
            <span style={{ marginRight: '10px' }}>📱</span> 
            {link.name}
          </a>
        ))}
      </div>
      
      <p style={{ marginTop: '30px' }}>
        Prueba de links directos usando React
      </p>
    </div>
  );
}

// Renderizar la aplicación independiente
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<DirectInstagramLinks />);
}

export default DirectInstagramLinks;
