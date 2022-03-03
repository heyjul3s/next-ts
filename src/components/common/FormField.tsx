import styled from '@emotion/styled';
import { FormControl } from '@chakra-ui/react';
import type { FormControlProps } from '@chakra-ui/react';

export const FormField = styled(FormControl)<FormControlProps>`
  > input[data-invalid] {
    box-shadow: none;
    color: ${(props) => (props.isInvalid ? 'red.500' : 'black')};
    border-color: transparent;
    border-bottom-color: ${(props) => (props.isInvalid ? 'red.500' : 'black')};
  }
`;
