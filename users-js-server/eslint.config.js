import globals from 'globals';
import pluginJs from '@eslint/js';
import preferArrow from 'eslint-plugin-prefer-arrow';
import stylistic from '@stylistic/eslint-plugin';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    {
        'plugins': {
            'prefer-arrow': preferArrow,
            'stylistic': stylistic
        },
        'rules': {
            'no-unused-vars': ['error', {
                'vars': 'all',
                'args': 'after-used',
                'caughtErrors': 'all',
                'ignoreRestSiblings': true,
                'reportUsedIgnorePattern': false
            }],

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
