import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Label } from '@/components/common/index';

export default {
  title: 'Common/Label',
  component: Label,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
  <Label {...args}>My Label</Label>
);

export const Base = Template.bind({});
Base.args = {};
