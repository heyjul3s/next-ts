import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Newsletter } from '@/components/common/index';

export default {
  title: 'Common/Newsletter',
  component: Newsletter,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Newsletter>;

const Template: ComponentStory<typeof Newsletter> = () => <Newsletter />;

export const Base = Template.bind({});
Base.args = {};
