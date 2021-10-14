import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { useController, UseControllerProps } from 'react-hook-form';
import { FormControlProps, FormLabelProps, InputProps } from '@chakra-ui/react';
import { isEmpty } from 'lodash';

import { S } from './styled';

type TextFieldProps = {
  name: string;
  onBlurTextField?: React.FocusEventHandler<HTMLInputElement>;
  onChangeTextField?: React.ChangeEventHandler<HTMLInputElement>;
  onFocusTextField?: React.FocusEventHandler<HTMLInputElement>;
  onKeyUpTextField?: React.KeyboardEventHandler<HTMLInputElement>;
  labelText: string;
  type: 'text' | 'email' | 'url' | 'search' | 'password';
  labelProps?: FormLabelProps;
  inputProps?: InputProps;
} & InputProps &
  FormLabelProps &
  FormControlProps &
  UseControllerProps;

export default function TextField({
  id,
  control,
  defaultValue,
  labelText,
  name,
  placeholder,
  rules,
  type,
  labelProps = {},
  inputProps = {}
}: TextFieldProps): React.ReactElement {
  const {
    field: { ref, name: fieldName, value = '', ...fieldProps },
    formState
  } = useController({
    name,
    control,
    rules,
    defaultValue: defaultValue
  });

  // * NOTE: formState.isValid runs infinitely for some reason,
  // * running check on errors object instead as workaround
  const isValid = isEmpty(formState.errors);

  return (
    <S.FormField id={id} mb="16px" isInvalid={!isValid}>
      <S.FieldLabel {...labelProps}>
        {labelText}

        <S.InputField
          id={id}
          ref={ref}
          className="text-input"
          type={type}
          placeholder={placeholder}
          name={fieldName}
          value={value}
          {...inputProps}
          {...fieldProps}
        />

        <ErrorMessage
          errors={formState.errors ?? formState.errors}
          name={name}
          render={({ message }) => (
            <S.FieldErrorMessage>{message}</S.FieldErrorMessage>
          )}
        />
      </S.FieldLabel>
    </S.FormField>
  );
}
