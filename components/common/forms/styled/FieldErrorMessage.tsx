import styled from '@emotion/styled';
import { FormHelperText } from '@chakra-ui/react';
import { theme } from '@/theme/index';

const FieldErrorMessage = styled(FormHelperText)`
  font-size: 0.63rem;
  text-transform: capitalize;
  color: ${theme.colors.orange['100']};
`;

export default FieldErrorMessage;
