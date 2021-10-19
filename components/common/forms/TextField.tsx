import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { useController, UseControllerProps } from 'react-hook-form';
import { FormControlProps, FormLabelProps, InputProps } from '@chakra-ui/react';
import { isEmpty } from 'lodash';

import { S } from './styled';

type TextFieldProps = {
  name: string;
  onBlurField?: React.FocusEventHandler<HTMLInputElement>;
  onChangeField?: React.ChangeEventHandler<HTMLInputElement>;
  onFocusField?: React.FocusEventHandler<HTMLInputElement>;
  onKeyUpField?: React.KeyboardEventHandler<HTMLInputElement>;
  labelText: string;
  type: 'text' | 'email' | 'url' | 'search' | 'password';
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
  onBlurField,
  onChangeField,
  placeholder,
  rules,
  type
}: TextFieldProps): React.ReactElement {
  const {
    field: {
      ref,
      name: fieldName,
      value = '',
      onChange,
      onBlur,
      ...fieldProps
    },
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

  const onChangeTextField = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!!onChangeField) {
      onChangeField(e);
    }

    onChange(e);
  };

  const onBlurTextField = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!!onBlurField) {
      onBlurField(e);
    }

    onBlur();
  };

  return (
    <S.FormField id={id} mb="16px" isInvalid={!isValid}>
      <S.FieldLabel>
        {labelText}

        <S.InputField
          id={id}
          ref={ref}
          className="text-input"
          type={type}
          placeholder={placeholder}
          name={fieldName}
          value={value}
          onChange={onChangeTextField}
          onBlur={onBlurTextField}
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
