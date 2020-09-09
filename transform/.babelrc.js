var plugin = require('../src/index')

module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    plugin,
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-class-properties', { loose: true }]
  ]
}
