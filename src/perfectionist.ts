import perfectionistPlugin from "eslint-plugin-perfectionist";
import { defineConfig } from "eslint/config";
import type { RulesConfig } from "@eslint/core";

const rules: RulesConfig = {
  "@perfectionist/sort-jsx-props": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      type: "alphabetical"
    }
  ]
};

const config = defineConfig({
  name: "@joshuaavalon/eslint-config-react/perfectionist",
  plugins: { "@perfectionist": perfectionistPlugin },
  rules
});

export default config;
