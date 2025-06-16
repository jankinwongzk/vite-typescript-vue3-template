import * as tseslint from "@typescript-eslint/eslint-plugin";
import pluginVue from "eslint-plugin-vue";
import js from "@eslint/js";

console.log("tseslint keys:", Object.keys(tseslint));
console.log("tseslint.default keys:", Object.keys(tseslint.default));
console.log("tseslint.default.configs:", tseslint.default.configs ? Object.keys(tseslint.default.configs) : "undefined");
console.log("pluginVue keys:", Object.keys(pluginVue));
console.log("pluginVue.configs:", pluginVue.configs ? Object.keys(pluginVue.configs) : "undefined");
console.log("js keys:", Object.keys(js));
console.log("js.configs:", js.configs ? Object.keys(js.configs) : "undefined"); 