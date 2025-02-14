import { defineConfig } from "vite";
import path from 'path';

export default defineConfig({
    base: "/projectPortfolio/",
    plugins: [],
    resolve: {
        alias: {
            src: "/src",
        }
    },
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, '/index.html'),
                about: path.resolve(__dirname, '/about.html'),
                project: path.resolve(__dirname, '/project.html'),
            },
        },
    },
});