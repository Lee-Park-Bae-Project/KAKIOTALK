module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'airbnb-base',
    // 'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    // 'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:import/typescript',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
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
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-unused-vars': 0,
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  env: {
    browser: true,
    jest: true,
  },
}
