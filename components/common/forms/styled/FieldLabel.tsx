import styled from '@emotion/styled';
import { FormLabel } from '@chakra-ui/react';
import { AppTheme } from '@/theme/index';

type FieldLabelProps = {
  theme?: AppTheme;
};

const FieldLabel = styled(FormLabel)(({ theme }: FieldLabelProps) => {
  return {
    color: theme?.colors?.brand['500'],
    fontWeight: 500,
    fontSize: '0.8rem',
    textTransform: 'uppercase'
  };
});

export default FieldLabel;
