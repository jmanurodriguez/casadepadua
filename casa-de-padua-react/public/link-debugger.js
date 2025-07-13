// Este archivo se puede incluir en la página para depuración
// Agrega una capa para diagnosticar problemas con los enlaces

(function() {
    // Estilo para el botón de depuración
    const debugStyles = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px 15px;
        border-radius: 5px;
        font-family: monospace;
        z-index: 10000;
        cursor: pointer;
    `;

    // Crear un botón para mostrar el panel de depuración
    function createDebugButton() {
        const btn = document.createElement('button');
        btn.textContent = '🔍 Debug Links';
        btn.setAttribute('style', debugStyles);
        
        btn.addEventListener('click', showDebugPanel);
        
        document.body.appendChild(btn);
    }

    // Mostrar el panel de depuración
    function showDebugPanel() {
        // Crear el panel
        const panel = document.createElement('div');
        panel.setAttribute('style', `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            z-index: 10001;
            color: white;
            font-family: monospace;
            padding: 20px;
            box-sizing: border-box;
            overflow: auto;
        `);
        
        // Título
        const header = document.createElement('h2');
        header.textContent = 'Diagnóstico de Enlaces';
        panel.appendChild(header);
        
        // Encontrar todos los enlaces
        const allLinks = document.querySelectorAll('a');
        const linkInfo = document.createElement('div');
        linkInfo.innerHTML = `<h3>Enlaces encontrados: ${allLinks.length}</h3>`;
        panel.appendChild(linkInfo);
        
        // Listar cada enlace con sus propiedades
        allLinks.forEach((link, index) => {
            const linkBox = document.createElement('div');
            linkBox.setAttribute('style', 'margin-bottom: 15px; border: 1px solid #666; padding: 10px;');
            
            // Verificar si el link tiene estilo display:none o está cubierto
            const rect = link.getBoundingClientRect();
            const style = window.getComputedStyle(link);
            const isHidden = style.display === 'none' || style.visibility === 'hidden';
            const isOffscreen = (rect.bottom < 0 || rect.top > window.innerHeight || 
                                rect.right < 0 || rect.left > window.innerWidth);
            const isZeroSize = (rect.width === 0 || rect.height === 0);
            
            let status = 'OK';
            let statusColor = 'green';
            
            if (isHidden) {
                status = 'OCULTO';
                statusColor = 'red';
            } else if (isOffscreen) {
                status = 'FUERA DE PANTALLA';
                statusColor = 'orange';
            } else if (isZeroSize) {
                status = 'TAMAÑO CERO';
                statusColor = 'red';
            }
            
            // Verificar eventos onclick que podrían interferir
            const hasOnClick = link.getAttribute('onclick') !== null;
            
            linkBox.innerHTML = `
                <div style="display: flex; justify-content: space-between;">
                    <span>#${index + 1}</span>
                    <span style="color: ${statusColor}; font-weight: bold;">${status}</span>
                </div>
                <div style="margin: 5px 0;">
                    <strong>Texto:</strong> ${link.textContent || '(sin texto)'}
                </div>
                <div style="margin: 5px 0;">
                    <strong>href:</strong> ${link.href || '(sin href)'}
                </div>
                <div style="margin: 5px 0;">
                    <strong>target:</strong> ${link.target || '(predeterminado)'}
                </div>
                <div style="margin: 5px 0;">
                    <strong>Posición:</strong> x=${Math.round(rect.left)}, y=${Math.round(rect.top)}, ancho=${Math.round(rect.width)}, alto=${Math.round(rect.height)}
                </div>
                <div style="margin: 5px 0;">
                    <strong>z-index:</strong> ${style.zIndex}
                </div>
                <div style="margin: 5px 0; ${hasOnClick ? 'color: orange;' : ''}">
                    <strong>onClick:</strong> ${hasOnClick ? 'Sí (puede interferir)' : 'No'}
                </div>
                <button style="background: #4CAF50; color: white; border: none; padding: 5px 10px; cursor: pointer; margin-top: 5px;" onclick="window.open('${link.href}', '_blank')">Probar este enlace</button>
            `;
            
            panel.appendChild(linkBox);
        });
        
        // Botón para cerrar
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Cerrar';
        closeBtn.setAttribute('style', 'background: #f44336; color: white; border: none; padding: 10px 20px; cursor: pointer; margin-top: 20px;');
        closeBtn.addEventListener('click', () => panel.remove());
        panel.appendChild(closeBtn);
        
        document.body.appendChild(panel);
    }
    
    // Ejecutar cuando la página esté completamente cargada
    window.addEventListener('load', createDebugButton);
})();
