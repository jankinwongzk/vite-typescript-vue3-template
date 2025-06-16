import * as tseslint from "@typescript-eslint/eslint-plugin";

console.log("tseslint keys:", Object.keys(tseslint));
console.log(
  "tseslint.configs:",
  tseslint.configs ? Object.keys(tseslint.configs) : "undefined",
);
