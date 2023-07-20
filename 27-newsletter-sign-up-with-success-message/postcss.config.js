const cssnano = require('cssnano');
const postcssNesting = require('postcss-nesting');
module.exports = {
    plugins: [
        require('postcss-import')(),
        require('tailwindcss')(),
        require('autoprefixer')(),
        /*
        cssnano({
            preset: 'default',
        }),*/
        postcssNesting(),
    ],
}