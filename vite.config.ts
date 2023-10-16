import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { join } from "path";
import builtins from "builtin-modules";

import packageJson from "./package.json" assert { type: "json" };
import dts from "vite-plugin-dts";

const { dependencies, peerDependencies } = packageJson;

export default defineConfig({
  build: {
    lib: {
      entry: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
      formats: ["es", "cjs"],
      fileName: "index",
    },
    rollupOptions: {
      external: [
        ...Object.keys(dependencies ?? {}),
        ...Object.keys(peerDependencies ?? {}),
        ...builtins,
      ],
    },
  },
  plugins: [
    react({ jsxImportSource: "@emotion/react" }),
    dts({
      tsconfigPath: join(__dirname, "tsconfig.build.json"),
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
});
