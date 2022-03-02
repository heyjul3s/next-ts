import { useState } from 'react';

import {
  FormProvider as ReactHookFormProvider,
  useForm
} from 'react-hook-form';

import { joiResolver } from '@hookform/resolvers/joi';

import type { ReactNode } from 'react';
import type { FormProviderProps, UseFormProps } from 'react-hook-form';

export interface IFormProps {
  children: ReactNode;
  config: UseFormProps;
  schema: any;
  onSubmitForm: (values: any) => Promise<void | IOnSubmitResult>;
}
export interface IOnSubmitResult {
  FORM_ERROR?: string;
  [prop: string]: any;
}

type TFormProviderProps = FormProviderProps & {
  submissionError?: string | null;
};

export const FORM_ERROR = 'FORM_ERROR';

const FormProvider = ({ children, ...props }: TFormProviderProps) => (
  <ReactHookFormProvider {...props}>{children}</ReactHookFormProvider>
);

export function Form({ children, config, onSubmitForm, schema }: IFormProps) {
  const form = useForm({
    ...(!!config?.resolver && { resolver: joiResolver(schema) }),
    ...config
  });

  const [formSubmissionError, setFormSubmissionError] = useState<string | null>(
    null
  );

  return (
    <FormProvider {...form} submissionError={formSubmissionError}>
      <form
        noValidate
        onSubmit={form.handleSubmit(async (values) => {
          const result = (await onSubmitForm(values)) || {};

          if (!!result.FORM_ERROR) {
            setFormSubmissionError(result.FORM_ERROR);
          }
        })}
      >
        {children}
      </form>
    </FormProvider>
  );
}
