module.exports = {
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js"],
        moduleDirectory: [".", "node_modules"],
      },
    },
  },
  parser: "babel-eslint",
  extends: [
    "react-app",
    "prettier",
    "prettier/react",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["import", "prettier", "react", "jsx-a11y"],
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
  },
  rules: {
    "no-unused-vars": ["error"],
    quotes: ["error", "double"],
    "no-shadow": 0,
    "no-underscore-dangle": 0,
    "no-param-reassign": 0,
    "react/jsx-boolean-value": ["error", "always"],
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: {
          minProperties: 1,
        },
        ObjectPattern: {
          multiline: true,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      },
    ],
  },
};
