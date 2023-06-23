import type { Meta, StoryObj } from '@storybook/react';
import Form from './Form';
import { formText } from './mockedProps';

const meta: Meta<typeof Form> = {
  // title: 'Example/Form',
  component: Form,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {};
