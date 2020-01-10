const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
    plugins: [
        autoprefixer({
            preset: 'default'
        }),
        cssnano({
            preset: 'default'
        })
    ]
};
