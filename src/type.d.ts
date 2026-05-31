/* eslint-disable @typescript-eslint/naming-convention */
import type { Linter } from "eslint";

declare module "eslint-plugin-react-hooks" {
  export const configs: {
    flat: {
      recommended: Linter.Config;
      "recommended-latest": Linter.Config;
    };
    recommended: Linter.Config;
    "recommended-latest": Linter.Config;
  };
}
