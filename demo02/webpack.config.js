const path = require('path');

module.exports = {
  mode: 'development', // 开发模式（生产环境改为 'production'）
  entry: './src/index.tsx', // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出目录
    filename: 'bundle.js' // 打包后的文件名
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'] // 支持的文件扩展名
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // 匹配 TypeScript/JSX 文件
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }], // 使用 React 自动运行时
              '@babel/preset-typescript'
            ]
          }
        }
      },
      {
        test: /\.css$/, // 处理 CSS 文件（可选）
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'), // 静态文件目录
    port: 3000, // 端口号
    open: true // 自动打开浏览器
  }
};