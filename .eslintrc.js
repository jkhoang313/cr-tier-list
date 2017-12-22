module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard"
  ],
  parser: "babel-eslint",
  plugins: ["react"],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": 0,
    "react/jsx-no-bind": [
      "error",
      {
        allowArrowFunctions: false,
        allowFunctions: false,
        allowBind: false
      }
    ]
  }
};
