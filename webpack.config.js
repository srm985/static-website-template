const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const PAGE_DIRECTORY = './src/pages/';

module.exports = () => {
    const {
        env: {
            WEBPACK_WATCH
        }
    } = process;

    const shouldWatchFiles = WEBPACK_WATCH === 'true';

    const fileList = fs.readdirSync(path.resolve(__dirname, PAGE_DIRECTORY));

    const filteredFileList = fileList.filter((file) => {
        const [
            fileName, // eslint-disable-line no-unused-vars
            fileExtension
        ] = file.split('.');

        return fileExtension.toLowerCase() === 'html';
    });

    const generatedHTMLPlugins = filteredFileList.map((pageName) => new HtmlWebpackPlugin({
        filename: pageName,
        template: path.resolve(__dirname, `${PAGE_DIRECTORY}/${pageName}`)
    }));

    return ({
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            hot: true,
            https: true,
            open: true,
            port: 3000
        },
        entry: './src/javascript/index.js',
        module: {
            rules: [
                {
                    exclude: /node_modules/,
                    test: /\.(js)$/,
                    use: [
                        'babel-loader'
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }
            ]
        },
        output: {
            filename: 'main.[hash].js',
            path: `${__dirname}/dist`,
            publicPath: '/'
        },
        plugins: [
            ...generatedHTMLPlugins,
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: 'styles.[hash].css'
            })
        ],
        resolve: {
            extensions: [
                '*',
                '.js'
            ]
        },
        watch: shouldWatchFiles
    });
};
