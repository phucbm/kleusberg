import path from "path";
import react from '@vitejs/plugin-react-swc';
import {defineConfig} from "vite";

const basenameProd = process.env.BASE_URL || '/';
// https://vitejs.dev/config/
export default defineConfig(({command}) => {
    const isProd = command === 'build';

    return {
        base: isProd ? basenameProd : '',
        plugins: [react()],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
        define: {
            global: {
                basename: isProd ? basenameProd : '',
            },
        }
    };
});
