module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 120,
  bracketSpacing: true,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
