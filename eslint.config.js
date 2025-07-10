import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';

export default [
    {
        ignores: [
            'build',
            'node_modules',
            '.github',
            '**/storybook/**',
            '**/stories/**',
        ],

        files: ['**/*.{js,jsx,ts,tsx}'],

        languageOptions: {
            parser: parserTs,
            parserOptions: {
                ecmaVersion: 12,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        plugins: {
            react: eslintPluginReact,
            'react-hooks': eslintPluginReactHooks,
            '@typescript-eslint': eslintPluginTs,
        },

        rules: {
            'react/prop-types': 'off',
            'no-var': 'error',
            'prefer-const': 'error',
            'no-extra-bind': 'error',
            'no-implicit-globals': 'error',
            'react-hooks/rules-of-hooks': 'error',
            'react/no-unknown-property': ['error', { ignore: ['class'] }],
            'quotes': ['error', 'single', { avoidEscape: true }],
            'indent': 'off',
        },

        settings: {
            react: {
                version: 'detect',
            },
        },

        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
    },
];
