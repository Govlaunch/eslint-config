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
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: {
          minProperties: 1,
        },
        ObjectPattern: {
          multiline: true,
        },
        ImportDeclaration: "never",
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      },
    ],
  },
};
