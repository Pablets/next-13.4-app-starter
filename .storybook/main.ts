import type { StorybookConfig } from '@storybook/nextjs';
const config: StorybookConfig = {
  stories: ['../src/components/**/*.mdx', '../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  previewBody: (body) => `
	${body}
	<style>
	--font-poppins: 'Poppins';
	--font-open-sans: 'Open sans';

	html {
		font-family: var(--font-poppins);
	}

	h1 {
		font-family: var(--font-open-sans);
	}
</style>
	`,
};
export default config;
