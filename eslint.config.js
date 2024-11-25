import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import path from "path";
import { fileURLToPath } from "url";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname, // optional; default: process.cwd()
  resolvePluginsRelativeTo: __dirname, // optional
  recommendedConfig: js.configs.recommended, // optional unless you're using "eslint:recommended"
  allConfig: js.configs.all, // optional unless you're using "eslint:all"
});

export default [
  ...compat.extends(
    "prettier",
    "next",
    "next/core-web-vitals",
    "next/typescript",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ),
  ...compat.plugins("react", "react-hooks", "@typescript-eslint"),
  ...compat.config({
    settings: {
      react: {
        pragma: "React",
        version: "detect",
      },
    },
    parser: "@typescript-eslint/parser",
    rules: {
      "import/no-anonymous-default-export": "off",
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      semi: "warn",
      indent: ["warn", 2],
      "react/display-name": "off",
      "react/prop-types": "off",
      "react-hooks/exhaustive-deps": "warn",
    },
  }),
];
