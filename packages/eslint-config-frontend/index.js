module.exports = {
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js"],
        moduleDirectory: [".", "node_modules"]
      }
    },
    react: {
      version: "15.3"
    }
  },
  parser: "babel-eslint",
  extends: [
    "react-app",
    "prettier",
    "prettier/react",

    "plugin:import/errors",
    "plugin:import/warnings",
    "eslint:recommended",
    "plugin:react/all"
  ],
  plugins: ["import", "prettier", "react", "jsx-a11y"],
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    browser: true
  },
  rules: {
    "no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: false
      }
    ],
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: {
          minProperties: 1
        },
        ObjectPattern: {
          multiline: true
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3
        }
      }
    ],
    "react/no-did-mount-set-state": 0,
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-filename-extension": 0,
    "react/no-set-state": 0,
    "react/forbid-prop-types": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/no-multi-comp": 0,
    "react/jsx-no-literals": 0,
    "react/jsx-max-depth": 0,
    "react/jsx-no-bind": 0,
    "react/jsx-handler-names": 0,
    "react/sort-prop-types": 0,
    "react/jsx-sort-default-props": 0,
    "react/forbid-component-props": 0,
    "react/no-unescaped-entities": 0,
    "react/jsx-child-element-spacing": 0,
    "react/require-optimization": 0,
    "react/jsx-boolean-value": [2, "always"],
    "react/jsx-sort-props": 0
  }
};
