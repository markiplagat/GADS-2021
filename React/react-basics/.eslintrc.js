module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
            impliedStrict: true,
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        "prettier/prettier": ["error"],
        "comma-dangle": 1,
        "no-debugger": 0,
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [".js", ".jsx"]
            }
        ],
        "react/no-array-index-key": 0,
        "import/prefer-default-export": 0,
        "max-len": [1, 80],
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "react/forbid-prop-types": 0,
        "no-case-declarations": 0
    },
};
