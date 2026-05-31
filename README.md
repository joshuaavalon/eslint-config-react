# @joshuaavalon/eslint-config-react

[![NPM Version](https://img.shields.io/npm/v/%40joshuaavalon%2Feslint-config-react)](https://www.npmjs.com/package/@joshuaavalon/eslint-config-react)

This is the opinionated ESLint configuration repository that used by myself.
Not support is guaranteed. Use as your own risk.

This configuration include both lint and format rules which may cause conflicts with other formatter like Prettier.

> For <10.0.0, please check https://github.com/joshuaavalon/eslint-config.

## Getting Started

```
npm i -D eslint @joshuaavalon/eslint-config-react
```

```js
import jsConfig from "@joshuaavalon/eslint-config-javascript";
import reactConfig from "@joshuaavalon/eslint-config-react";
import tsConfig from "@joshuaavalon/eslint-config-typescript";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

export default defineConfig([
  globalIgnores(["**/node_modules", "**/dist"], "Ignore Default Files"),
  {
    extends: [jsConfig],
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: { globals: { ...globals.node } },
    name: "JavaScript Config"
  },
  {
    extends: [tsConfig],
    files: ["**/*.ts"],
    languageOptions: { globals: { ...globals.node } },
    name: "TypeScript Config"
  },
  {
    extends: [reactConfig],
    files: ["**/*.tsx"],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser
      }
    },
    name: "React Config"
  }
]);

```
