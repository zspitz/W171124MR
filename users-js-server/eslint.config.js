import globals from 'globals';
import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    {
        'plugins': {
            '@stylistic/js': stylisticJs
        },
        'rules': {
            'no-unused-vars': ['error', {
                'vars': 'all',
                'args': 'after-used',
                'caughtErrors': 'all',
                'ignoreRestSiblings': true,
                'reportUsedIgnorePattern': false
            }],
            'no-empty': ['error', {
                'allowEmptyCatch': true
            }],
            '@stylistic/js/semi': ['error', 'always'],
            '@stylistic/js/brace-style': ['error', '1tbs', {
                allowSingleLine: true
            }],
            '@stylistic/js/no-multiple-empty-lines': ['error', {
                max: 1,
                maxEOF: 0,
                maxBOF: 0
            }],
            '@stylistic/js/eol-last': ['error', 'always'],

            'quotes': ['error', 'single'],
            'comma-dangle': ['error', 'never'],
            'curly': ['error', 'all']
        }
    }
];
