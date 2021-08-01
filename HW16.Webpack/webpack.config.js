const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist') + '/build',
  },
  plugins: [
    new HTMLWebpackPlugin({
        title: 'HW16',
        template: './index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
  optimization: {
    usedExports: true,
  },
  babelPreprocessor: {
    options: {
        presets: ['@babel/preset-env'],
        sourceMap: 'inline',
    },
    filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js')
    },
    sourceFileName: function (file) {
        return file.originalPath;
    },
},
  module: {
    rules: [
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        },
        {
            test: /\.scss$/i,
            use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
            ],
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]?[hash]',
                    },
                },
            ],
        },
        {
            test: '/.(ttf|woff|woff2|eot)$',
            use: {
                loader: 'file-loader',
                options: {
                    esModule: false,
                },
            },
        },
        {
            test: /\.(wav|mp3|mov)$/,
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]?[hash]',
            },
        },
    ],
}
};