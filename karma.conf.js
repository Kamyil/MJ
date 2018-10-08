// Karma configuration
// Generated on Fri Aug 24 2018 16:11:34 GMT+0200 (Środkowoeuropejski czas letni)
const webpackConfig = require('./webpack.test.config.js');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine-ajax', 'jasmine-jquery', 'jasmine', 'source-map-support', 'jasmine-matchers'],

        files: [
            {pattern: 'resources/typescript/**/*.spec.ts'},
            {
                pattern: 'resources/typescript/**/*.spec.html',
                watched: false,
                included: false,
                served: true
            }
        ],
        exclude: [],

        preprocessors: {
            'resources/typescript/**/*.spec.ts': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only',
            logLevel: 'silent'
        },

        colors: true,
        logLevel: config.LOG_INFO,
        reporters: [
            'coverage-istanbul',
            'mocha',
        ],

        coverageIstanbulReporter: {
            dir: './coverage',
            fixWebpackSourcePaths: true,
            reports: ['cobertura', 'lcov', 'text', 'text-summary'],
            skipFilesWithNoCoverage: true
        },

        autoWatch: false,
        singleRun: true,

        port: 9876,
        browsers: ['Chrome'],
        concurrency: Infinity
    })
};
