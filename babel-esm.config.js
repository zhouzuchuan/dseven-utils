module.exports = {
  ignore: ['node_modules/**/*'],
  presets: [
    ['@babel/preset-typescript'],
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime'],
}
