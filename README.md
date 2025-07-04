# Club Atlético San Antonio de Padua

Sitio web oficial del Club Atlético San Antonio de Padua, desarrollado con HTML, Tailwind CSS y JavaScript.

## Tecnologías Utilizadas

- HTML5
- Tailwind CSS
- JavaScript Vanilla
- Font Awesome para iconos

## Desarrollo

Para iniciar el entorno de desarrollo:

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev
```

## Despliegue en Vercel

Para desplegar este sitio en Vercel:

1. Sube el código a un repositorio Git (GitHub, GitLab, Bitbucket)
2. Conéctate a [Vercel](https://vercel.com)
3. Importa el repositorio
4. Configuración de compilación:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Haz clic en "Deploy"

La URL del proyecto desplegado es: [casadepadua.vercel.app](https://casadepadua.vercel.app)

## Estructura de Archivos

```
/
├── dist/                # Archivos compilados
│   └── output.css       # CSS compilado por Tailwind
├── src/                 # Código fuente
│   ├── js/              # Archivos JavaScript
│   │   └── main.js      # JavaScript principal
│   ├── index.html       # Página principal
│   └── input.css        # CSS de entrada para Tailwind
├── package.json         # Dependencias y scripts
└── tailwind.config.js   # Configuración de Tailwind CSS
```
