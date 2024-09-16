// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    mocha: true,
    node: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  // add your custom rules here
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    'quotes':[2, 'single'],
    'semi': [2, 'always'],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
