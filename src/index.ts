import tsConfig from "@joshuaavalon/eslint-config-typescript";
import reactDomPlugin from "eslint-plugin-react-dom";
// import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactXPlugin from "eslint-plugin-react-x";
import { defineConfig } from "eslint/config";
import perfectionistConfig from "./perfectionist.js";
import stylisticConfig from "./stylistic.js";

const config = defineConfig({
  extends: [
    tsConfig,
    stylisticConfig,
    perfectionistConfig,
    // https://github.com/jsx-eslint/eslint-plugin-react/issues/3977
    // {
    //   ...reactPlugin.configs.flat.recommended,
    //   name: "eslint-plugin-react/recommended"
    // },
    // {
    //   ...reactPlugin.configs.flat["jsx-runtime"],
    //   name: "eslint-plugin-react/jsx-runtime"
    // },
    {
      ...reactXPlugin.configs.recommended,
      name: "eslint-plugin-react-x"
    },
    {
      ...reactDomPlugin.configs.recommended,
      name: "eslint-plugin-react-dom"
    },
    {
      ...reactHooksPlugin.configs.flat.recommended,
      name: "eslint-plugin-react-hooks"
    }
  ],
  name: "@joshuaavalon/eslint-config-react"
});

export default config;
