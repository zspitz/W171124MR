import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import preferArrow from 'eslint-plugin-prefer-arrow'
import stylistic from '@stylistic/eslint-plugin'

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ignores: ['eslint.config.js'],
        languageOptions: {
            parserOptions: {
                projectService: true
            }
        },
        plugins: {
            'prefer-arrow': preferArrow,
            'stylistic': stylistic,
            'tseslint': tseslint
        },
        rules: {
            'quotes': ['error', 'single'],
            'semi': ['error', 'never'],
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

            '@typescript-eslint/no-confusing-void-expression': ['off'],
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
            '@typescript-eslint/restrict-template-expressions': ['error', {
                allowAny: false,
                allowArray: false,
                allowBoolean: true,
                allowNever: false,
                allowNullish: true,
                allowNumber: true,
                allowRegExp: false,
                allow: ['ObjectId']
            }],
            '@typescript-eslint/no-non-null-assertion': ['off'],
            '@typescript-eslint/no-floating-promises': ['off'],
            '@typescript-eslint/no-misused-promises': ['error', {
                checksConditionals: true,
                checksVoidReturn: {
                    arguments: false,
                    attributes: false,
                    properties: false,
                    variables: false
                },
                checksSpreads: true
            }],
            '@typescript-eslint/consistent-type-imports': ['warn']
        }
    }
]
