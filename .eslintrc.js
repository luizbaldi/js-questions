module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
      ecmaVersion: 2017,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    plugins: ['react'],
    extends: 'airbnb',
    rules: {
      'arrow-parens': 0,
      'comma-dangle': 'off',
      'complexity': ['error', { max: 42 }],
      'indent': ['error', 2],
      'max-depth': ['error', 4],
      'max-nested-callbacks': ['error', 3],
      'max-params': ['error', 5],
      'max-statements': ['error', 30],
      'no-undef': 'off',
      'no-unused-vars': [2, { vars: 'local' }],
      'no-use-before-define': ['error', { functions: false }],
      'object-curly-newline': 'off',
      'react/forbid-prop-types': 'off',
      'react/no-string-refs': 'off',
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'semi': 'off',
      'space-before-function-paren': ['error', 'always'],
      'jsx-quotes': [2, 'prefer-single'],
      'padded-blocks': ['error', { 'classes': 'always' }],
      'prefer-destructuring': ['error', {
        'array': false,
        'object': true
      }],
      'import/extensions': 0,
      'react/jsx-filename-extension': 0
    }
  }
  