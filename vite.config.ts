import { defineConfig } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import reactRefresh from '@vitejs/plugin-react-refresh';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/graintrack-test/',
  plugins: [react(), TanStackRouterVite(), reactRefresh()],
});
