/// <reference types="vitest" />
import { UserConfig } from "vite";

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        dts({
            exclude: ["**/?(*.)+(spec|test).[tj]s?(x)"],
            insertTypesEntry: true,
            rollupTypes: true,
        }),
    ],
    build: {
        lib: {
            entry: "src/index.ts",
            formats: ["es", "cjs"],
            fileName(format) {
                return format === "cjs" ? "index.cjs" : "index.mjs";
            },
        },
        sourcemap: true,
        rollupOptions: {
            external: ["react", "react-dom", "@tanstack/react-query"],
        },
    },
}) satisfies UserConfig;
