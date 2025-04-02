import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import preferArrow from 'eslint-plugin-prefer-arrow';
import stylistic from '@stylistic/eslint-plugin';

export default [
    { ignores: ['dist'] },
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module'
            }
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'prefer-arrow': preferArrow,
            'stylistic': stylistic
        },
        rules: {
            ...js.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true }
            ],
            'quotes': ['error', 'single'],
            'semi': ['off'],
            'comma-dangle': ['error', 'never'],
            'curly': ['error', 'all'],
            'prefer-arrow/prefer-arrow-functions': ['warn'],
            'no-empty': ['error', {
                'allowEmptyCatch': true
            }],
            'no-console': ['warn'],
            'no-alert': ['warn'],
            'no-debugger': ['warn'],

            'stylistic/brace-style': ['error', '1tbs', {
                allowSingleLine: true
            }],
            'stylistic/no-multiple-empty-lines': ['error', {
                max: 1,
                maxEOF: 0,
                maxBOF: 0
            }],
            'stylistic/eol-last': ['error', 'always'],
            'stylistic/member-delimiter-style': ['error', {
                multiline: {
                    delimiter: 'none',
                    requireLast: true
                },
                singleline: {
                    delimiter: 'comma',
                    requireLast: false
                }
            }],
            'stylistic/semi': ['error', 'always']
        }
    }
];
