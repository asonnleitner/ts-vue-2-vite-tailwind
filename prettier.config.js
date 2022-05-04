module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js',
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json'
      }
    }
  ]
}
