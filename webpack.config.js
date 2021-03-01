const path = require('path');
const webpack = require('webpack');

module.exports = {
  // Punto de entrada
  entry: './public/javascript/app.js',
  // Punto de salida
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './public/dist')
  },
  // Modulos que  vamos a utilizar
  module: {
    rules: [
      {
        test: /\.m?js$/, // Esta expresion regular le dice a webpack que archivos va a procesar el modulo
        use: {
          loader: 'babel-loader', 
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}