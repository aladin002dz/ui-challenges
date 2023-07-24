//const cssnano = require('cssnano');
//const postcssNesting = require('postcss-nesting');
/*
    plugins: [
        require('postcss-import')(),
        require('tailwindcss')(),
        require('autoprefixer')(),
        cssnano({
            preset: 'default',
        }),
        postcssNesting(),
    ],*/
/*
module.exports = {
    plugins: {
        "postcss-import": {},
        'tailwindcss/nesting': 'postcss-nesting',

        "autoprefixer": {
            "grid": true
        },
        "postcss-nesting": {}
    }
}
*/

module.exports = {
    plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': 'postcss-nesting',
        tailwindcss: {},
        'postcss-preset-env': {
            features: { 'nesting-rules': false },
        },
    }
}