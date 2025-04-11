/// <reference types="vitest" />
import { UserConfig } from "vite";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [react(), tsconfigPaths(), checker({ typescript: true })],
    server: {
        open: true,
        port: 3002,
    },
    test: {
        globals: true,
        environment: "jsdom",
        include: ["src/**/*.spec.ts", "src/**/*.spec.tsx"],
        setupFiles: "test/vitest.setup.ts",
        testTimeout: 10000,
    },
}) satisfies UserConfig;
