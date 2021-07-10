/**
 * @author rafaelvictor01
 * - Este arquivo é necessário para que: o plugin de imagens funcione adequadamente
 * - A documentação oficial não me ajudou... Foi necessário seguir o "see"
 */
const withImages = require('next-images')
const withReactSvg = require('next-react-svg')
const withPlugins = require('next-compose-plugins')
const path = require('path')

/**
 * @author rafaelvictor01
 * @todo compreender e concertar a linha:
 * include: path.resolve(__dirname, 'src/common/assets'),
 *
 * Essa pasta já nem existe mais...
 */
module.exports = withPlugins([
  [withImages, {
    esModule: true,
    webpack(config, options) {
      return config
    }
  }],
  [withReactSvg, {
    include: path.resolve(__dirname, 'src/common/assets'),
    webpack(config, options) {
      return config
    }
  }]
],
{
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      loader: 'url-loader?limit=100000' }]
  },
})
