import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from '@tailwindcss/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),tailwindcss(),],
  // build: {
  //   lib: {
  //     entry: "./src/main.js",  // 入口文件
  //     name: "MyVueApp",  // UMD 打包后组件的名字
  //     fileName: (format) => `q-ask-widget.${format}.js`, // 输出文件名
  //     formats: ["umd"],  // 支持的打包格式
  //   },
  //   rollupOptions: {
  //     external: ["vue"],  // vue作为外部依赖，不打包进最终的文件
  //     output: {
  //       globals: {
  //         vue: "Vue",  // vue 库在外部环境的全局变量名
  //       },
  //     },
  //   },
  // },
});
