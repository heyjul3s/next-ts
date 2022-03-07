import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AnchorLink } from '@/components/common/index';

export default {
  title: 'Common/AnchorLink',
  component: AnchorLink,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof AnchorLink>;

const Template: ComponentStory<typeof AnchorLink> = (args) => (
  <AnchorLink {...args}>My Link</AnchorLink>
);

export const Internal = Template.bind({});
Internal.args = {
  href: '/'
};

export const External = Template.bind({});
External.args = {
  href: '/',
  isExternal: true
};
