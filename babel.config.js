module.exports = {
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-private-methods'
  ],
  presets: [
    ['@vue/app',
    {
      jsx: {
        injectH: false
      }
    }],
    '@vue/babel-preset-jsx',
  ]
}
