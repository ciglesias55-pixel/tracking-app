#!/bin/bash
echo "🚀 Iniciando Tracking App..."
# Navegar al directorio correcto usando la ruta absoluta
cd "/Users/carlosiglesiasseoane/.gemini/antigravity/playground/ancient-perigee/tracking-app"

# Iniciar el navegador y el servidor
(sleep 3 && open http://localhost:5173) &
npm run dev
