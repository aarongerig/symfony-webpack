module.exports = {
  plugins: {
    autoprefixer: {},
    stylelint: {
      'ignoreFiles': '**/node_modules/**/*',
      'rules': {
        'block-no-empty': true,
        'color-no-invalid-hex': true,
        'declaration-colon-space-after': 'always',
        'declaration-colon-space-before': 'never',
        'function-comma-space-after': 'always',
        'function-url-quotes': 'always',
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-no-vendor-prefix': true,
        'max-empty-lines': 5,
        'number-leading-zero': 'always',
        'number-no-trailing-zeros': true,
        'declaration-block-trailing-semicolon': 'always',
        'declaration-block-semicolon-space-before': 'never',
        'selector-list-comma-space-before': 'never',
      }
    }
  }
};