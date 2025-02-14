import { defineConfig } from "vite";

export default defineConfig({
    base: "/projectPortfolio/",
    plugins: [],
    resolve: {
        alias: {
            src: "/src",
        }
    },
});