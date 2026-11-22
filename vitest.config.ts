import { transformSync } from "esbuild";
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  plugins: [
    {
      // App tsconfig keeps jsx as "preserve" for Next. Tests that import TSX need a transform.
      name: "linaw-tsx-for-vitest",
      enforce: "pre",
      transform(code, id) {
        const filename = id.split("?")[0];
        if (!filename.endsWith(".tsx") || filename.includes("node_modules")) {
          return null;
        }
        const result = transformSync(code, {
          loader: "tsx",
          jsx: "automatic",
          format: "esm",
          sourcefile: filename,
        });
        return { code: result.code, map: result.map || null };
      },
    },
  ],
  test: {
    environment: "node",
    include: ["**/*.{test,spec}.{ts,tsx}"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
