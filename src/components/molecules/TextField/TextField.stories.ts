import type { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';

const meta: Meta<typeof TextField> = {
  // title: 'Example/TextField',
  component: TextField,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const TextInput: Story = {
  args: {
    name: 'name',
    errorText: 'Error text',
    hasError: false,
    label: 'Test label',
  },
};

export const UrlInput: Story = {
  args: {
    name: 'linkedin',
    defaultText: '',
    errorText: 'Enter a valid linkedin url',
    hasError: false,
    label: 'Linkedin url',
    type: 'url',
    pattern: '^(https://)?(www.)?linkedin.com(/[a-zA-Z0-9%]+((-|_|/)[a-zA-Z0-9%]+)*)/?$',
  },
};

export const EmailInput: Story = {
  args: {
    name: 'email',
    defaultText: '',
    errorText: 'Enter a valid email',
    hasError: false,
    label: 'Email',
    type: 'email',
    pattern: '^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+(.[a-zA-Z]{2,5}(.[a-zA-Z]{2,5})?)$',
  },
};
