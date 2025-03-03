import { ConfigEnv, loadEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { viteVConsole } from "vite-plugin-vconsole";
import viteCompression from "vite-plugin-compression";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { VantResolver } from "@vant/auto-import-resolver";

import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";

const CWD = process.cwd();

export default ({ mode }: ConfigEnv): UserConfig => {
  const { VITE_DROP_CONSOLE } = loadEnv(mode, CWD);

  console.log("VITE_DROP_CONSOLE---->", VITE_DROP_CONSOLE);

  return {
    build: {
      target: "esnext", // 'modules', // 'es2020',
      cssTarget: "chrome79",
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          chunkFileNames: "js/[name]-[hash].js", // 引入文件名的名称
          entryFileNames: "js/[name]-[hash].js", // 包的入口文件名称
          assetFileNames: "[ext]/[name]-[hash].[ext]", // 资源文件像 字体，图片等
          manualChunks: {
            vue: ["vue", "vue-router"],
          },
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/variables.scss";`,
        },
      },
    },
    plugins: [
      vue(),
      AutoImport({
        // 自动导入 Icon 组件
        imports: ["vue", "vue-router"],
        eslintrc: {
          enabled: false,
          filepath: "./.eslintrc-auto-import.json",
          globalsPropValue: true,
        },
      }),
      Components({
        dirs: ["src/components"],
        resolvers: [
          VantResolver(),
          IconsResolver({
            prefix: false, // 不使用前缀，直接使用 Icon 组件
          }),
        ],
      }),
      Icons({
        autoInstall: true, // 自动安装图标依赖
      }),
      viteVConsole({
        entry: resolve("src/main.ts"),
        localEnabled: true,
        enabled: VITE_DROP_CONSOLE === "false",
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: "gzip",
        ext: ".gz",
        deleteOriginFile: false,
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
};
