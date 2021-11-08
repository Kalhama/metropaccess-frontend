module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 10,
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "rules": {
        "no-param-reassign": "off",
        "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
        "no-var": "error",
        "prefer-const": "error",
        "react/prop-types": ["off"]
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "detect",
        },
    }
};