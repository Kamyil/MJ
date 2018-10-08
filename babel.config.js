module.exports = function(api){

    api.cache(true);

    return {
        sourceMaps: true,
        presets: [
            ['@babel/preset-env', {
                modules: "commonjs",
                useBuiltIns: 'usage',
                debug: false,
            }]
        ],
        plugins: [
            ['@babel/plugin-proposal-object-rest-spread', {useBuiltIns: 'usage'}],
        ]
    }
};
