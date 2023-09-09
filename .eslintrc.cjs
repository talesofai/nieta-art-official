module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@components', './src/components'],
          ['@assets', './src/assets'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.astro'],
      },
    },
  },
  extends: ['plugin:astro/recommended', 'plugin:astro/jsx-a11y-recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  // ...
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'astro/jsx-a11y/no-redundant-roles': 'off',
      },
    },
  ],
};
