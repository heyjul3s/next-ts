import { FormProvider, useForm } from 'react-hook-form';

import type { ReactNode } from 'react';
import type { UseFormProps } from 'react-hook-form';

type TFormProps = {
  children: ReactNode;
  config: UseFormProps;
  onSubmitForm: any;
};

export function Form({ children, config, onSubmitForm }: TFormProps) {
  const form = useForm({
    ...config
  });

  return (
    <FormProvider {...form}>
      <form noValidate onSubmit={form.handleSubmit(onSubmitForm)}>
        {children}
      </form>
    </FormProvider>
  );
}
