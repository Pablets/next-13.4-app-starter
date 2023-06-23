import type { Meta, StoryObj } from '@storybook/react';

import LinkButton from './LinkButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof LinkButton> = {
  title: 'Example/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
    },
  },
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
type Story = StoryObj<typeof LinkButton>;

export const Default: Story = {
  args: {
    children: 'LinkButton',
    variant: 'secondary',
    href: 'https://www.google.com',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'LinkButton',
    href: 'https://www.google.com',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'LinkButton',
    href: 'https://www.google.com',
  },
};
