import type { Linter } from "eslint";

declare module "eslint-plugin-react-hooks" {
  export const configs: {
    recommended: Linter.Config,
    'recommended-latest': Linter.Config,
    flat: {
      recommended: Linter.Config,
      'recommended-latest': Linter.Config
    }
  };
}
