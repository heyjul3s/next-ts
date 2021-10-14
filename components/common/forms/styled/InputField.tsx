import styled from '@emotion/styled';
import { Input, InputProps } from '@chakra-ui/react';
import { theme } from '@/theme/index';

const InputField = styled(Input)<InputProps>`
  color: ${theme.colors.black};
  font-size: 0.88rem;
  padding-left: 0;
  border: none;
  border-radius: 0;
  border-bottom: 1px dashed ${theme.colors.black};
  appearance: none;
  outline: none;
  box-shadow: none !important;
  transition: border 300ms ease-out;
  min-width: 225px;
  &::placeholder {
    color: ${theme.colors.gray[200]};
  }
  &:focus {
    border-bottom: 1px solid #232bbe;
    appearance: none;
    outline: none;
    box-shadow: none;
  }
`;

export default InputField;
