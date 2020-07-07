module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'linebreak-style': 0,
    'max-len': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'comma-style': ['error', 'last'],
    'no-trailing-spaces': 'error',
    // "function-paren-newline": ["error", { "minItems": 3 }],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    'no-unused-vars': 'off',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'no-empty-function': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'no-duplicate-imports': 'error',
    'object-curly-newline': [
      'error',
      {
        minProperties: 2,
      },
    ],
    'object-property-newline': 'error',
    'react/prop-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'import/no-extraneous-dependencies': 0,
    semi: ['error', 'never'],
    'import/extensions': [
      'off',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'eol-last': ['error', 'always'],
    'import/no-unresolved': 'off',
  },
}
