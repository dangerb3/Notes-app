module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'react/jsx-filename-extension': 'off',
    'no-shadow': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/jsx-no-bind': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-props-no-spreading': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/button-has-type': 'off',
    'react/no-access-state-in-setstate': 'off',
    'comma-dangle': 'off',
    'function-paren-newline': 'off',
    'func-names': 'off',
    'no-plusplus': 'off',
  },
};
