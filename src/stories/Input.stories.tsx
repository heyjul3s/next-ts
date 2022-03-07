import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '@/components/common/index';

export default {
  title: 'Common/Input',
  component: Input,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Base = Template.bind({});
Base.args = {};
