import stylisticPlugin from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";
import type { PrefixRules } from "@joshuaavalon/eslint-config-javascript/utils";
import type { UnprefixedRuleOptions } from "@stylistic/eslint-plugin";

type DeprecatedRules =
  | "@stylistic/jsx-indent"
  | "@stylistic/jsx-props-no-multi-spaces"
  | "@stylistic/jsx-sort-props";

type Rules = Pick<PrefixRules<UnprefixedRuleOptions, "@stylistic/">, `@stylistic/jsx-${string}` & keyof PrefixRules<UnprefixedRuleOptions, "@stylistic/">>;

const rules: Omit<Rules, DeprecatedRules> = {
  "@stylistic/jsx-child-element-spacing": ["error"],
  "@stylistic/jsx-closing-bracket-location": ["error"],
  "@stylistic/jsx-closing-tag-location": ["error"],
  "@stylistic/jsx-curly-brace-presence": ["error", { children: "never", propElementValues: "always", props: "never" }],
  "@stylistic/jsx-curly-newline": ["error", "never"],
  "@stylistic/jsx-curly-spacing": ["error", { attributes: true, children: true, when: "never" }],
  "@stylistic/jsx-equals-spacing": ["error", "never"],
  "@stylistic/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
  "@stylistic/jsx-function-call-newline": ["error", "multiline"],
  "@stylistic/jsx-indent-props": ["error", 2],
  "@stylistic/jsx-max-props-per-line": ["error", { maximum: 1, when: "multiline" }],
  "@stylistic/jsx-newline": ["error", { allowMultilines: false, prevent: true }],
  "@stylistic/jsx-one-expression-per-line": ["error", { allow: "single-child" }],
  "@stylistic/jsx-pascal-case": ["error"],
  "@stylistic/jsx-quotes": ["error", "prefer-double"],
  "@stylistic/jsx-self-closing-comp": ["error", { component: true, html: true }],
  "@stylistic/jsx-tag-spacing": [
    "error",
    {
      afterOpening: "never",
      beforeClosing: "never",
      beforeSelfClosing: "always",
      closingSlash: "never"
    }
  ],
  "@stylistic/jsx-wrap-multilines": [
    "error",
    {
      arrow: "parens-new-line",
      assignment: "parens-new-line",
      condition: "parens-new-line",
      declaration: "parens-new-line",
      logical: "parens-new-line",
      prop: "parens-new-line",
      return: "parens-new-line"
    }
  ]
};

const config = defineConfig({
  name: "@joshuaavalon/eslint-config-react/stylistic",
  plugins: { "@stylistic": stylisticPlugin },
  rules
});

export default config;
