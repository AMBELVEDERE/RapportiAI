// postcss.config.js
// Importa esplicitamente il plugin di Tailwind per PostCSS
import tailwindcss from '@tailwindcss/postcss'; // O @tailwindcss/postcss-legacy se l'errore persiste

import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(), // Usalo come una funzione qui
    autoprefixer(),
  ],
};