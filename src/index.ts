import tsConfig from "@joshuaavalon/eslint-config-typescript";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import perfectionistConfig from "./perfectionist.js";
import stylisticConfig from "./stylistic.js";

const config = defineConfig({
  extends: [
    tsConfig,
    stylisticConfig,
    perfectionistConfig,
    {
      ...reactPlugin.configs.flat.recommended,
      name: "eslint-plugin-react/recommended"
    },
    {
      ...reactPlugin.configs.flat["jsx-runtime"],
      name: "eslint-plugin-react/jsx-runtime"
    },
    {
      ...reactHooksPlugin.configs.flat.recommended,
      name: "eslint-plugin-react-hooks"
    }
  ],
  name: "@joshuaavalon/eslint-config-react"
});

export default config;
