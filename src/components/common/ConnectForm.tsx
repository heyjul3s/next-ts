import React from 'react';
import { useFormContext } from 'react-hook-form';

import type {
  FieldValues,
  FormState,
  UseFormRegister,
  UseFormReturn
} from 'react-hook-form';

type TConnectFormProps = {
  children(props: UseFormReturn<FieldValues, object>): React.ReactElement;
};

export type TConnectFormCallback = {
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
};

export function ConnectForm({ children }: TConnectFormProps) {
  const formContext = useFormContext();
  return children({ ...formContext });
}
