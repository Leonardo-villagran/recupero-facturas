import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Carpeta de salida para los archivos construidos
    assetsDir: 'assets', // Carpeta donde se colocarán los activos (imágenes, etc.)
    minify: 'terser', // Minificar usando Terser
    sourcemap: false, // Desactivar mapas de origen para producción
  },
  base : '/recupero-facturas/' // Ruta base para el despliegue en GitHub Pages
})
