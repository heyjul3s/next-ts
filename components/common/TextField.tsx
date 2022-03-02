import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import styled from '@emotion/styled';
import { FormHelperText } from '@chakra-ui/react';

import { Input } from './Input';
import { Label } from './Label';
import { FormField } from './FormField';
import { theme } from '@/theme/index';
import { ConnectForm } from './ConnectForm';

import type { RegisterOptions } from 'react-hook-form';

import type {
  FormControlProps,
  FormLabelProps,
  InputProps
} from '@chakra-ui/react';

import type { TConnectFormCallback } from './ConnectForm';

type TTextFieldProps = {
  id?: string;
  name: string;
  labelText?: string;
  type?: 'text' | 'email' | 'url' | 'search' | 'password';
} & InputProps &
  FormLabelProps &
  FormControlProps &
  RegisterOptions;

export function TextField({
  disabled,
  id,
  labelText,
  name,
  onChange,
  onBlur,
  pattern,
  placeholder,
  validate,
  value,
  valueAsNumber,
  valueAsDate,
  shouldUnregister,
  type = 'text'
}: TTextFieldProps): React.ReactElement {
  return (
    <ConnectForm>
      {({
        register,
        formState: { errors, isDirty, isValid }
      }: TConnectFormCallback) => (
        <FormField id={id} mb="16px" isInvalid={isDirty && !isValid}>
          <Label>
            {!!labelText && labelText}

            <Input
              id={id || name}
              type={type}
              placeholder={placeholder}
              {...register(name, {
                disabled,
                onChange,
                onBlur,
                pattern,
                shouldUnregister,
                value,
                validate,
                valueAsNumber,
                valueAsDate
              })}
            />

            <ErrorMessage
              errors={errors ?? errors}
              name={name}
              render={({ message }) => (
                <FieldErrorMessage>{message}</FieldErrorMessage>
              )}
            />
          </Label>
        </FormField>
      )}
    </ConnectForm>
  );
}

const FieldErrorMessage = styled(FormHelperText)`
  font-size: 0.63rem;
  text-transform: capitalize;
  color: ${theme.colors.orange['100']};
`;
