module.exports = {
    "extends": "airbnb",
    "rules": {
        // enable additional rules
        "max-len": ["error", { "code": 220 }],
        "one-var": ["error", "always"],
        "no-unused-expressions": ["error", { "allowShortCircuit": true }],
        "react/prop-types": 0,
        "linebreak-style": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "import/no-named-as-default": 0,
        "no-alert": 0,
        "no-undef": 0,
        "no-console": 0,
        "jsx-a11y/label-has-associated-control": [ "error", {
        "required": {
          "some": [ "name", "id"  ]
        }
      }],
      "jsx-a11y/label-has-for": [ "error", {
        "required": {
          "some": [ "name", "id"  ]
        }
      }],
    },
    "parser": "babel-eslint",
    "globals": {
      "document": true
    }
};
