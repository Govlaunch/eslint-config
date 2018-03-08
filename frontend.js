module.exports = {
  parser: "babel-eslint",
  plugins: ["prettier", "prettier/flowtype", "prettier/react", "react-app"],
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    node: true
  },
  rules: {
    "prettier/prettier": "error"
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    "prettier/prettier": "error",
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: {
          consistent: true
        }
      }
    ]
  }
};
