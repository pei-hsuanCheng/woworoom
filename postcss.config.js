module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-css-variables'),
    require('postcss-calc'),
    require('postcss-nested'),
    require('postcss-apply-class'),
    require('tailwindcss'),
    require('postcss-hexrgba'),
    require('postcss-assets'),
    require('postcss-pxtorem'),
    require('autoprefixer'),
  ]
}
