import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
  // parameters: {
  // 	layout: 'padded',
  // },
  decorators: [
    (Story) => (
      <div className="flex w-full flex-col">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button secondary',
    variant: 'secondary',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button primary',
    className: '',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
    className: '',
  },
};
export const Gradient: Story = {
  args: {
    variant: 'gradient',
    children: 'Button',
    className: '',
  },
};
