module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
      "airbnb",
      "jest-enzyme"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
};