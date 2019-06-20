module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: "airbnb",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    semi: ["error", "never"],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "global-require": "off",
    "no-console": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": 0,
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_"
      }
    ],
    "space-before-function-paren": ["error", "always"],
    "no-use-before-define": 0
  }
};
