import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form, TextField } from '@/components/common/index';

export default {
  title: 'Common/TextField',
  component: TextField,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
  const onSubmitForm = (values: any) => {
    console.log('submitted', values);
  };

  return (
    <Form
      onSubmitForm={onSubmitForm}
      config={{
        defaultValues: { email: '' }
      }}
    >
      <form>
        <TextField {...args} />
      </form>
    </Form>
  );
};

export const Base = Template.bind({});
Base.args = {
  type: 'email',
  name: 'email',
  labelText: 'E-mail',
  placeholder: 'E-mail'
};
