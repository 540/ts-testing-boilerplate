'use strict'

module.exports = {
    root: true,
    plugins: ['@typescript-eslint', 'jest', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:jest/recommended',
        'prettier'
    ],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            generators: true,
            impliedStrict: true,
            experimentalObjectRestSpread: true
        }
    },
    rules: {
        'no-unused-vars': "warn"
    },
    globals: {
        process: true,
        fetchMock: true
    }
}
