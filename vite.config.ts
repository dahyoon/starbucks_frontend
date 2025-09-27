import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";

// Vite 설정
export default defineConfig(({ mode }) => {
  // .env 파일 읽기
  const env = loadEnv(mode, process.cwd());

  // 추후 백엔드 있을 경우 기본값 설정
  const backendPort = env.VITE_BACKEND_PORT || "8080";

  return {
    plugins: [vue(), vueDevTools(), tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      proxy: {
        "/api": {
          target: `http://localhost:${backendPort}`,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    test: {
      environment: "jsdom",
      exclude: ["node_modules", "dist", "e2e/**"],
      root: fileURLToPath(new URL("./", import.meta.url)),
    },
  };
});
