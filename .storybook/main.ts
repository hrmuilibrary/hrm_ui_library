import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
    framework: '@storybook/react-webpack5',
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    typescript: {
        check: false,
        reactDocgen: 'react-docgen',
    },
    addons: [
        { name: 'storybook-design-token', options: { preserveCSSVars: true } },
        '@storybook/addon-viewport',
        '@storybook/addon-controls',
        '@storybook/addon-links'
    ],
    webpackFinal: async (config, { configType }) => {
        // @ts-ignore
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../')
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
            include: path.resolve(__dirname, '../'),
            exclude: /node_modules/,
        });
        // @ts-ignore
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: [
                            require.resolve('@babel/preset-env'),
                            require.resolve('@babel/preset-react'),
                            require.resolve('@babel/preset-typescript'),
                        ],
                    },
                },
            ],
        });
        // @ts-ignore
        config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx', '.css', '.scss');
        return config
    }
};
export default config;