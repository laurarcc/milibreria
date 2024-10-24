// vite.config.ts
import { defineConfig } from "file:///D:/2%C2%BADAM/DAD/ProjectsReact/milibreria/node_modules/vite/dist/node/index.js";
import dts from "file:///D:/2%C2%BADAM/DAD/ProjectsReact/milibreria/node_modules/vite-plugin-dts/dist/index.mjs";

// package.json
var peerDependencies = {
  react: "^18.3.1"
};

// vite.config.ts
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      // Especifica el punto de entrada
      name: "milibreria",
      // Establece el nombre de la biblioteca generada.
      fileName: (format) => `index.${format}.js`,
      // Genera el nombre del archivo de salida según el formato.
      formats: ["cjs", "es"]
      // Especifica los formatos de salida (módulos CommonJS y ES).
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)]
      // Define dependencias externas para rollup.
    },
    sourcemap: true,
    // Genera sourcemaps para depurar.
    emptyOutDir: true
    // Borra el directorio de salida antes de compilar.
  },
  plugins: [dts()],
  // Utiliza el complemento 'vite-plugin-dts' para generar archivos de declaración de TypeScript (d.ts).
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcMlx1MDBCQURBTVxcXFxEQURcXFxcUHJvamVjdHNSZWFjdFxcXFxtaWxpYnJlcmlhXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFwyXHUwMEJBREFNXFxcXERBRFxcXFxQcm9qZWN0c1JlYWN0XFxcXG1pbGlicmVyaWFcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LzIlQzIlQkFEQU0vREFEL1Byb2plY3RzUmVhY3QvbWlsaWJyZXJpYS92aXRlLmNvbmZpZy50c1wiOy8vLyA8cmVmZXJlbmNlIHR5cGVzPVwidml0ZXN0XCIgLz5cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XHJcbmltcG9ydCB7IHBlZXJEZXBlbmRlbmNpZXMgfSBmcm9tIFwiLi9wYWNrYWdlLmpzb25cIjtcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgbGliOiB7XHJcbiAgICAgICAgICAgIGVudHJ5OiBcIi4vc3JjL2luZGV4LnRzXCIsIC8vIEVzcGVjaWZpY2EgZWwgcHVudG8gZGUgZW50cmFkYVxyXG4gICAgICAgICAgICBuYW1lOiBcIm1pbGlicmVyaWFcIiwgLy8gRXN0YWJsZWNlIGVsIG5vbWJyZSBkZSBsYSBiaWJsaW90ZWNhIGdlbmVyYWRhLlxyXG4gICAgICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2AsIC8vIEdlbmVyYSBlbCBub21icmUgZGVsIGFyY2hpdm8gZGUgc2FsaWRhIHNlZ1x1MDBGQW4gZWwgZm9ybWF0by5cclxuICAgICAgICAgICAgICAgIGZvcm1hdHM6IFtcImNqc1wiLCBcImVzXCJdLCAvLyBFc3BlY2lmaWNhIGxvcyBmb3JtYXRvcyBkZSBzYWxpZGEgKG1cdTAwRjNkdWxvcyBDb21tb25KUyB5IEVTKS5cclxufSxcclxucm9sbHVwT3B0aW9uczoge1xyXG4gICAgZXh0ZXJuYWw6IFsuLi5PYmplY3Qua2V5cyhwZWVyRGVwZW5kZW5jaWVzKV0sIC8vIERlZmluZSBkZXBlbmRlbmNpYXMgZXh0ZXJuYXMgcGFyYSByb2xsdXAuXHJcbn0sXHJcbnNvdXJjZW1hcDogdHJ1ZSwgLy8gR2VuZXJhIHNvdXJjZW1hcHMgcGFyYSBkZXB1cmFyLlxyXG4gICAgZW1wdHlPdXREaXI6IHRydWUsIC8vIEJvcnJhIGVsIGRpcmVjdG9yaW8gZGUgc2FsaWRhIGFudGVzIGRlIGNvbXBpbGFyLlxyXG59LFxyXG5wbHVnaW5zOiBbZHRzKCldLCAvLyBVdGlsaXphIGVsIGNvbXBsZW1lbnRvICd2aXRlLXBsdWdpbi1kdHMnIHBhcmEgZ2VuZXJhciBhcmNoaXZvcyBkZSBkZWNsYXJhY2lcdTAwRjNuIGRlIFR5cGVTY3JpcHQgKGQudHMpLlxyXG4gICAgdGVzdDoge1xyXG4gICAgICAgIGdsb2JhbHM6IHRydWUsXHJcbiAgICAgICAgZW52aXJvbm1lbnQ6IFwianNkb21cIixcclxuICAgICAgICBzZXR1cEZpbGVzOiBcIi4vc2V0dXBUZXN0cy50c1wiLFxyXG4gICAgfSxcclxufSk7IiwgIntcbiAgXCJuYW1lXCI6IFwibWlsaWJyZXJpYVwiLFxuICBcInZlcnNpb25cIjogXCIxLjAuMFwiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJtYWluXCI6IFwiZGlzdC9pbmRleC5janMuanNcIixcbiAgXCJtb2R1bGVcIjogXCJkaXN0L2luZGV4LmVzLmpzXCIsXG4gIFwidHlwZXNcIjogXCJkaXN0L2luZGV4LmQudHNcIixcbiAgXCJmaWxlc1wiOiBbXG4gICAgXCIvZGlzdFwiXG4gIF0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJ0ZXN0XCI6IFwidml0ZXN0IHJ1blwiLFxuICAgIFwidGVzdC13YXRjaFwiOiBcInZpdGVzdFwiLFxuICAgIFwidGVzdDp1aVwiOiBcInZpdGVzdCAtLXVpXCIsXG4gICAgXCJmb3JtYXRcIjogXCJwcmV0dGllciAtLXdyaXRlIC0tcGFyc2VyIHR5cGVzY3JpcHQgJyoqLyoue3RzLHRzeH0nXCIsXG4gICAgXCJsaW50XCI6IFwiZXNsaW50IC4gLS1leHQgLnRzLC50c3ggLS1pZ25vcmUtcGF0aCAuZ2l0aWdub3JlIC0tZml4XCIsXG4gICAgXCJidWlsZFwiOiBcInRzYyAmJiB2aXRlIGJ1aWxkXCIsXG4gICAgXCJzdG9yeWJvb2tcIjogXCJzdG9yeWJvb2sgZGV2IC1wIDYwMDZcIixcbiAgICBcImJ1aWxkLXN0b3J5Ym9va1wiOiBcInN0b3J5Ym9vayBidWlsZFwiXG4gIH0sXG4gIFwia2V5d29yZHNcIjogW10sXG4gIFwiYXV0aG9yXCI6IFwiXCIsXG4gIFwibGljZW5zZVwiOiBcIklTQ1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBjaHJvbWF0aWMtY29tL3N0b3J5Ym9va1wiOiBcIl4xLjkuMFwiLFxuICAgIFwiQGVtb3Rpb24vcmVhY3RcIjogXCJeMTEuMTMuM1wiLFxuICAgIFwiQGVtb3Rpb24vc3R5bGVkXCI6IFwiXjExLjEzLjBcIixcbiAgICBcIkBtdWkvaWNvbnMtbWF0ZXJpYWxcIjogXCJeNi4xLjNcIixcbiAgICBcIkBtdWkvbWF0ZXJpYWxcIjogXCJeNi4xLjNcIixcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tZXNzZW50aWFsc1wiOiBcIl44LjMuNVwiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1pbnRlcmFjdGlvbnNcIjogXCJeOC4zLjVcIixcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tbGlua3NcIjogXCJeOC4zLjVcIixcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tb25ib2FyZGluZ1wiOiBcIl44LjMuNVwiLFxuICAgIFwiQHN0b3J5Ym9vay9ibG9ja3NcIjogXCJeOC4zLjVcIixcbiAgICBcIkBzdG9yeWJvb2svcmVhY3RcIjogXCJeOC4zLjVcIixcbiAgICBcIkBzdG9yeWJvb2svcmVhY3Qtdml0ZVwiOiBcIl44LjMuNVwiLFxuICAgIFwiQHN0b3J5Ym9vay90ZXN0XCI6IFwiXjguMy41XCIsXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L2plc3QtZG9tXCI6IFwiXjYuNS4wXCIsXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L3JlYWN0XCI6IFwiXjE2LjAuMVwiLFxuICAgIFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE4LjMuMTFcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luXCI6IFwiXjguOC4xXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyXCI6IFwiXjguOC4xXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeOC41Ny4xXCIsXG4gICAgXCJlc2xpbnQtY29uZmlnLXByZXR0aWVyXCI6IFwiXjkuMS4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXByZXR0aWVyXCI6IFwiXjUuMi4xXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0XCI6IFwiXjcuMzcuMVwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdC1ob29rc1wiOiBcIl40LjYuMlwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1zdG9yeWJvb2tcIjogXCJeMC45LjBcIixcbiAgICBcImpzZG9tXCI6IFwiXjI1LjAuMVwiLFxuICAgIFwicHJldHRpZXJcIjogXCJeMy4zLjNcIixcbiAgICBcInN0b3J5Ym9va1wiOiBcIl44LjMuNVwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjYuM1wiLFxuICAgIFwidml0ZVwiOiBcIl41LjQuOFwiLFxuICAgIFwidml0ZS1wbHVnaW4tZHRzXCI6IFwiXjQuMi4zXCIsXG4gICAgXCJ2aXRlc3RcIjogXCJeMi4xLjJcIlxuICB9LFxuICBcInBlZXJEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwicmVhY3RcIjogXCJeMTguMy4xXCJcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUzs7O0FDdURkLHVCQUFvQjtBQUFBLEVBQ2xCLE9BQVM7QUFDWDs7O0FEdkRGLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLE9BQU87QUFBQSxJQUNILEtBQUs7QUFBQSxNQUNELE9BQU87QUFBQTtBQUFBLE1BQ1AsTUFBTTtBQUFBO0FBQUEsTUFDTixVQUFVLENBQUMsV0FBVyxTQUFTLE1BQU07QUFBQTtBQUFBLE1BQ2pDLFNBQVMsQ0FBQyxPQUFPLElBQUk7QUFBQTtBQUFBLElBQ3JDO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDWCxVQUFVLENBQUMsR0FBRyxPQUFPLEtBQUssZ0JBQWdCLENBQUM7QUFBQTtBQUFBLElBQy9DO0FBQUEsSUFDQSxXQUFXO0FBQUE7QUFBQSxJQUNQLGFBQWE7QUFBQTtBQUFBLEVBQ2pCO0FBQUEsRUFDQSxTQUFTLENBQUMsSUFBSSxDQUFDO0FBQUE7QUFBQSxFQUNYLE1BQU07QUFBQSxJQUNGLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxJQUNiLFlBQVk7QUFBQSxFQUNoQjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==