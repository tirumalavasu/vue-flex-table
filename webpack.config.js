const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

var config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'index.js',
    library:'vue-js-popover',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        loader: 'vue-style-loader!css-loader!sass-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        use: ['svg-loader']
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        use: ['file-loader']
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: ['url-loader?limit=100000']
      }
    ]
  },
  externals: {
    vue: 'vue',
    lodash : {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_' // indicates global variable
    },
    'material-icons': {
      commonjs: 'material-icons',
      commonjs2: 'material-icons',
      amd: 'material-icons',
      root: 'material-icons' // indicates global variable
    }
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        parallel: 4,
        uglifyOptions: {
          // warnings: false,
          // compress: {
          //   warnings: false
          // },
        },
      })
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#source-map',
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
}

module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/index.js'),
    output: {
      filename: 'vue-flex-table.min.js',
      libraryTarget: 'window',
      library: 'VueFlexTable',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/VueFlexTable.vue'),
    output: {
      filename: 'vue-flex-table.js',
      libraryTarget: 'umd',
      library: 'vue-flex-table',
      umdNamedDefine: true
    }
  })
];