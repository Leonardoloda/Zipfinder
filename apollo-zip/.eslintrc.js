module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["google", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "require-jsdoc": off,
  },
};

