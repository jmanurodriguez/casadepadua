import React from 'react';

function ManualDeMarca() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary">Manual de Marca CASA</h1>
      
      <div className="embed-container">
        <div style={{
          position: "relative", 
          width: "100%", 
          height: "0", 
          paddingTop: "56.25%",
          paddingBottom: "0", 
          boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", 
          marginTop: "1.6em", 
          marginBottom: "0.9em", 
          overflow: "hidden",
          borderRadius: "8px", 
          willChange: "transform"
        }}>
          <iframe 
            loading="lazy" 
            style={{
              position: "absolute", 
              width: "100%", 
              height: "100%", 
              top: "0", 
              left: "0", 
              border: "none", 
              padding: "0",
              margin: "0"
            }}
            src="https://www.canva.com/design/DAGjNQe9j6k/yAO50I3Dh5VVPFJ3CXfB2A/view?embed" 
            allowFullScreen={true}
            allow="fullscreen"
          ></iframe>
        </div>
        <div className="text-center mt-2 mb-10">
          <a 
            href="https://www.canva.com/design/DAGjNQe9j6k/yAO50I3Dh5VVPFJ3CXfB2A/view?utm_content=DAGjNQe9j6k&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark transition-colors"
          >
            MANUAL DE MARCA CASA PADUA
          </a> de Prensa-Comerciales CASA de Padua
        </div>
      </div>
    </div>
  );
}

export default ManualDeMarca; 