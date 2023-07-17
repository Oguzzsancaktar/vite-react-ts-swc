

module.exports = {
  root: true,
  extends: ['eslint:recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:@typescript-eslint/recommended-requiring-type-checking',
   'plugin:react-hooks/recommended', 'prettier'],
  plugins: ['react-hooks', 'react-refresh'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['!.*', 'src/vendor', '.github/actions/**/index.js', 'desktop/dist/*.js', 'dist/*.js', 'node_modules/.bin/**', 'node_modules/.cache/**', '.git/**'],
  env: {
    browser: true, es2020: true,
      jest: true,
  },
  settings: {
      'import/resolver': {
          node: {
              extensions: ['.js', '.website.js', '.desktop.js', '.native.js', '.ios.js', '.android.js', '.config.js'],
          },
      },
  },
  globals: {
      __DEV__: 'readonly',
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
      'no-restricted-imports': [
          'error',
          {
              paths: [
                  {
                      name: 'react-native',
                      importNames: ['useWindowDimensions', 'StatusBar', 'TouchableOpacity', 'TouchableWithoutFeedback', 'TouchableNativeFeedback', 'TouchableHighlight', 'Pressable'],
                      message: [
                          '',
                          "For 'useWindowDimensions', please use 'src/hooks/useWindowDimensions' instead.",
                          "For 'TouchableOpacity', 'TouchableWithoutFeedback', 'TouchableNativeFeedback', 'TouchableHighlight', 'Pressable', please use 'PressableWithFeedback' and/or 'PressableWithoutFeedback' from 'src/components/Pressable' instead.",
                          "For 'StatusBar', please use 'src/libs/StatusBar' instead.",
                      ].join('\n'),
                  },
              ],
          },
      ],
      
  },
};
