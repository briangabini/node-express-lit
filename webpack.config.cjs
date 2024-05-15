const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        home: path.resolve(__dirname, 'src', 'components', 'home.ts'),
        login: path.resolve(__dirname, 'src', 'components', 'login.ts'),
        admin: path.resolve(__dirname, 'src', 'components', 'admin.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,                            // deletes the files in the dist folder
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 4000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                // include: /src\/components/,
                exclude: [/node_modules/, /src\/[^\/]*\.ts$/]
            },
            {
                test: /\.(svg|jpg|png|gif|jpeg)$/i,
                type: 'asset/resource'
            }
            /* {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            // for backwards compatibility with older browsers
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
             */

        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App - Home',
            filename: 'index.html',
            template: 'src/templates/index.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack App - Login',
            filename: 'login.html',
            template: 'src/templates/login.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack App - Admin',
            filename: 'admin.html',
            template: 'src/templates/admin.html',
        }),
    ]

}