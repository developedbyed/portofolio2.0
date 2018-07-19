module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/jsx-filename-extension": 0,
        "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"],
        "react/jsx-one-expression-per-line": 0,
    },
    "env": {
        "browser": true
    }
};