// eslint.config.mts
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      // Additional strict rules (optional)
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',
      'no-console': 'warn',
      'semi': ['error', 'always'],
      'indent': ['warn', 4],
      'quotes': ['warn', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
];
