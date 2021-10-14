import styled from '@emotion/styled';
import { FormControl, FormControlProps } from '@chakra-ui/react';

const FormField = styled(FormControl)<FormControlProps>`
  > input[data-invalid] {
    box-shadow: none;
    color: ${(props) => (props.isInvalid ? 'red.500' : 'black')};
    border-color: transparent;
    border-bottom-color: ${(props) => (props.isInvalid ? 'red.500' : 'black')};
  }
`;

export default FormField;
