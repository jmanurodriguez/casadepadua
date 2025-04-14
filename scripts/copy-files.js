const fs = require('fs');
const path = require('path');

// Función para crear directorios recursivamente si no existen
function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
    console.log(`Creado directorio: ${directory}`);
  }
}

// Función para copiar archivos
function copyFile(source, destination) {
  try {
    const content = fs.readFileSync(source);
    fs.writeFileSync(destination, content);
    console.log(`Copiado: ${source} -> ${destination}`);
  } catch (error) {
    console.error(`Error copiando ${source} a ${destination}:`, error);
  }
}

// Función para copiar directorios recursivamente
function copyDirectory(source, destination) {
  ensureDirectoryExists(destination);
  
  const files = fs.readdirSync(source);
  
  for (const file of files) {
    const sourcePath = path.join(source, file);
    const destPath = path.join(destination, file);
    
    const stats = fs.statSync(sourcePath);
    
    if (stats.isDirectory()) {
      copyDirectory(sourcePath, destPath);
    } else {
      copyFile(sourcePath, destPath);
    }
  }
}

// Asegurarnos de que exista la carpeta public
ensureDirectoryExists('public');

// Copiar index.html
copyFile('src/index.html', 'public/index.html');

// Copiar directorio js
ensureDirectoryExists('public/js');
copyDirectory('src/js', 'public/js');

console.log('Proceso de copia completado!'); 