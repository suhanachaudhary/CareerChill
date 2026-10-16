import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served at https://<user>.github.io/CareerChill/ on GitHub Pages.
export default defineConfig({ base: '/CareerChill/', plugins: [react()] })
