module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    indent: ['error', 2],
    semi: ['error', 'always'],
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'vue/html-indent': ['error', 2],
    'vue/script-indent': ['error', 2],
    // 'no-console': ['error', { allow: ['warn', 'error'] }],
  },
}
