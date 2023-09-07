module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@components', './src/components'],
          // 添加其他别名映射关系
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.astro'],
      },
    },
  },
  extends: ['airbnb-base', 'plugin:astro/recommended', 'plugin:astro/jsx-a11y-recommended', 'prettier'],
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
