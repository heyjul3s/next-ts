import styled from '@emotion/styled';
import { Input, InputProps } from '@chakra-ui/react';
import { AppTheme, theme } from '@/theme/index';

type TInputFieldProps = {
  theme?: AppTheme;
} & InputProps;

const InputField = styled(Input)((props: TInputFieldProps) => {
  return {
    color: props?.theme?.colors?.black,
    fontSize: '0.88rem',
    paddingLeft: 0,
    border: 'none',
    borderRadius: 0,
    borderBottom: `1px dashed ${theme.colors.black}`,
    appearance: 'none',
    outline: 'none',
    boxShadow: 'none !important',
    transition: 'border 300ms ease-out',
    minWidth: '225px',

    '&::placeholder': {
      color: theme.colors.gray[200]
    },

    '&:focus': {
      borderBottom: `1px solid ${theme.colors.brand['500']}`,
      appearance: 'none',
      outline: 'none',
      boxShadow: 'none'
    }
  };
});

export default InputField;
