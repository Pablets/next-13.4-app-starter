import type { Meta, StoryObj } from '@storybook/react';
import GridStoryHelper from './GridStoryHelper';

const meta: Meta<typeof GridStoryHelper> = {
  // title: 'Example/GridStoryHelper',
  component: GridStoryHelper,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof GridStoryHelper>;

export const Default: Story = {};
