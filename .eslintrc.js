module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use
      version: "detect",
    },
  },
  extends: [
    // Uses the recommended rules from @eslint-plugin-react
    "plugin:react/recommended",
    // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    // Place to specify ESLint rules.
    // Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "semi": [2, "always"],
    "indent": ["error", 2],
    "space-in-parens": ["error", "never"],
    "array-bracket-spacing": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "template-curly-spacing": ["error", "never"],
    "comma-dangle": ["error", "always-multiline"],
    "no-return-await": 0,
    "max-len": ["error", { "code": 100 }],
    "quotes": [2, "double", "avoid-escape"],
    "space-before-function-paren": [
      2,
      {
        "named": "never",
        "anonymous": "never",
        "asyncArrow": "always",
      },
    ],
  },
};
