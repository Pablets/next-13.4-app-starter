import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  // title: 'Example/Input',
  component: Input,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    type: 'text',
    name: 'name',
    defaultValue: 'sarasa',
    className:
      'peer absolute bottom-[15%] inline-block h-7 w-full bg-transparent align-bottom font-body leading-[1.75] text-neutral-100 opacity-100 outline-none transition-all duration-200 ease-linear invalid:text-red-500 focus:bottom-[15%] focus:placeholder:opacity-100',
  },
};
