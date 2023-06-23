import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './TextAreaField';

const meta: Meta<typeof TextArea> = {
  // title: 'Example/TextArea',
  component: TextArea,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const TextAreaInput: Story = {
  args: {
    name: 'name',
    errorText: 'Error text',
    hasError: false,
    label: 'Test label',
  },
};
