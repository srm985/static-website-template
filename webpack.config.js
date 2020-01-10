const glob = require('glob');
const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PAGE_DIRECTORY = './src/pages/';

module.exports = () => {
    const {
        env: {
            NODE_ENV
        }
    } = process;

    const isDevelopment = NODE_ENV === 'development';

    const fileList = fs.readdirSync(path.resolve(__dirname, PAGE_DIRECTORY));

    const filteredFileList = fileList.filter((file) => {
        const [
            fileName,
            fileExtension
        ] = file.split('.');

        return fileExtension.toLowerCase() === 'html';
    });

    const generatedHTMLPlugins = filteredFileList.map((pageName) => new HtmlWebpackPlugin({
        filename: pageName,
        template: path.resolve(__dirname, `${PAGE_DIRECTORY}/${pageName}`)
    }));

    return ({
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
                            loader: 'style-loader'
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
            filename: 'main.js',
            path: `${__dirname}/dist`,
            publicPath: '/'
        },
        plugins: [
            ...generatedHTMLPlugins
        ],
        resolve: {
            extensions: [
                '*',
                '.js'
            ]
        },
        watch: isDevelopment
    });
};
