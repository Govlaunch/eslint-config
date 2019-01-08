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
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  plugins: ["import", "prettier"],
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
    "no-param-reassign": 0,
    "no-else-return": 0,
    camelcase: [
      "error",
      {
        properties: "never",
      },
    ],
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
    "import/no-dynamic-require": 0,
    "global-require": 0,
    "no-underscore-dangle": 0,
  },
};
