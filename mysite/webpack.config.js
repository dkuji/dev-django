var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var VueLoaderPlugin = require('vue-loader/lib/plugin')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')


module.exports = {
  mode: "development",
  context: __dirname,
  entry: './src/js/main.js',
  output: {
      path: path.resolve('./assets/webpack_bundles/'),
      filename: "[name]-[hash].js",
      publicPath: path.resolve('./assets/webpack_bundles/'),
  },
  devServer: {
    contentBase: path.resolve('./assets/webpack_bundles'),
    hot: true,
    proxy: {
      //'!/static/webpack_bundles/**': {
      '**': {
        target: 'http://localhost:8000', // points to django dev server
        changeOrigin: true,
      },
    },
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],

  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue': path.resolve('./node_modules/vue/dist/vue.js'),
      'vue$': 'vue/dist/vue.common.js',
      '@': path.resolve(__dirname, 'src'),
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env"]
        }
      },
      {
          test: /\.vue$/,
          loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            // Requires sass-loader@^7.0.0
            options: {
              implementation: require('sass'),
              fiber: require('fibers'),
              indentedSyntax: true // optional
            },
            // Requires sass-loader@^8.0.0
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
                indentedSyntax: true // optional
              },
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ],
  },
}
