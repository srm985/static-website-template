module.exports = {
    plugins: [
        require('autoprefixer')({
            preset: 'default',
        }),
        require('cssnano')({
            preset: 'default',
        })
    ]
};
