import styled from '@emotion/styled';
import { FormLabel } from '@chakra-ui/react';
import { theme } from '@/theme/index';

export const Label = styled(FormLabel)`
  color: ${theme.colors.brand['500']};
  font-weight: 500;
  font-size: 0.8rem;
  text-transform: uppercase;
`;
