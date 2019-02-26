module.exports = {
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true,
        "modules": true,
        "experimentalObjectRestSpread": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
    "plugins": [
      "react",
      "react-native"
    ],
    "rules": {
      // general
      "indent": ["error", 2],
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "comma-dangle": ["error", {
        "arrays": "never",
        "objects": "never",
        "imports": "never",
        "exports": "never",
        "functions": "ignore"
      }],
      "object-curly-spacing": ["error", "always"],
      "eol-last": ["error", "always"],
      "no-console": "off",
      "no-restricted-syntax": [
          "error",
          {
              "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(warn|error|info|trace|disableYellowBox|tron)$/]",
              "message": "Unexpected property on console object was called"
          }
      ],
      "complexity": ["error", { "max": 4 }],
      "eqeqeq": ["error", "always"],
      // react
      "react/no-unescaped-entities": ["error", {"forbid": ['>', '"', '}']}],
      "react/prop-types": [2, {"ignore": ['action', 'dispatch', 'nav', 'navigation']}],
      "react/display-name": 2,
      "react/jsx-boolean-value": 2,
      "react/jsx-no-undef": 2,
      "react/jsx-uses-react": 2,
      "react/jsx-sort-props": [2, {
        "callbacksLast": true,
        "shorthandFirst": true,
        "ignoreCase": true,
        "noSortAlphabetically": true,
      }],
      "react/jsx-pascal-case": 2,
      // react-native specific rules
      "react-native/no-unused-styles": 2,
      "react-native/no-inline-styles": 2,
      "react-native/no-color-literals": 2,
      "react-native/no-raw-text": 2
    },
    // Map from global var to bool specifying if it can be redefined
    "globals": {
      "__DEV__": true,
      "__dirname": false,
      "__fbBatchedBridgeConfig": false,
      "alert": false,
      "cancelAnimationFrame": false,
      "cancelIdleCallback": false,
      "clearImmediate": true,
      "clearInterval": false,
      "clearTimeout": false,
      "console": false,
      "document": false,
      "escape": false,
      "Event": false,
      "EventTarget": false,
      "exports": false,
      "fetch": false,
      "FormData": false,
      "global": false,
      "Map": true,
      "module": false,
      "navigator": false,
      "process": false,
      "Promise": true,
      "requestAnimationFrame": true,
      "requestIdleCallback": true,
      "require": false,
      "Set": true,
      "setImmediate": true,
      "setInterval": false,
      "setTimeout": false,
      "window": false,
      "XMLHttpRequest": false,
    },
    settings: {
      react: {
          version: require('./package.json').dependencies.react,
      }
    }
  };