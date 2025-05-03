import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    base: "/projectPortfolio/",
    plugins: [vue()],
    resolve: {
        alias: {
            src: "/src",
            '@': path.resolve(__dirname, 'src')
        }
    },
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, '/index.html'),
                about: path.resolve(__dirname, '/about.html'),
                project: path.resolve(__dirname, '/project.html'),
                projects: path.resolve(__dirname, '/projects.html')
            },
        },
    },
});