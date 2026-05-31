import jsConfig from "@joshuaavalon/eslint-config-javascript";
import tsRules from "@joshuaavalon/eslint-config-typescript";
import globals from "globals";
import typescript from "typescript-eslint";
import { defineConfig, globalIgnores } from 'eslint/config'


export default [
  { ignores: ["**/node_modules", "**/dist"] },
  {
    ...jsConfig,
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: { globals: { ...globals.node } }
  },
  {
    ...tsRules,
    files: ["**/*.ts"],
    languageOptions: {
      parser: typescript.parser,
      parserOptions: {
        projectService: true,
        tsconfigDirName: import.meta.dirname
      }
    }
  }
];
