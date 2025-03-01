import { ConfigEnv, loadEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { viteVConsole } from "vite-plugin-vconsole";
import { VantResolver } from "@vant/auto-import-resolver";
import viteCompression from "vite-plugin-compression";
import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";

const CWD = process.cwd();
// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const { VITE_DROP_CONSOLE } = loadEnv(mode, CWD);

  console.log("VITE_DROP_CONSOLE---->", VITE_DROP_CONSOLE);

  return {
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue", "vue-router"],
        eslintrc: {
          enabled: false, // Default `false`
          filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
      }),
      Components({
        // 自定义组件全局挂载，默认是src/components
        dirs: ["src/components"],
        // ui库解析器
        resolvers: [VantResolver()],
      }),
      // VConsole 调试工具配置，若没有此配置，则调试工具控制台不会打印日志
      viteVConsole({
        entry: resolve("src/main.ts"), // 入口文件，或者可以使用这个配置: [path.resolve('src/main.ts')]
        localEnabled: true, // 本地是否启用
        enabled: VITE_DROP_CONSOLE === "false", // 是否启用
      }),
      viteCompression({
        verbose: true, // 是否在控制台中输出压缩结果
        disable: false,
        threshold: 10240, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
        algorithm: "gzip", // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
        ext: ".gz",
        deleteOriginFile: false, // 源文件压缩后是否删除(我为了看压缩后的效果，先选择了true)
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
};
