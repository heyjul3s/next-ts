import React from 'react';
import { useFormContext } from 'react-hook-form';
import type { UseFormReturn, FieldValues } from 'react-hook-form';

type TConnectFormProps = {
  children(props: UseFormReturn<FieldValues, object>): React.ReactElement;
};

export function ConnectForm({ children }: TConnectFormProps) {
  const formContext = useFormContext();
  return children({ ...formContext });
}
