import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dfs from "vite-plugin-dts";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dfs()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      name: "tae-design",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
