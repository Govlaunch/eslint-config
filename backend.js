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
    "airbnb-base",
    "prettier",
    "prettier/flowtype",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  plugins: ["import", "prettier", "flowtype"],
  env: {
    node: true,
    es6: true,
    mocha: true,
  },
  rules: {
    "no-unused-vars": ["error"],
    quotes: ["error", "double"],
    "no-plusplus": 0,
    "no-shadow": 0,
    "no-global-assign": 0,
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
