import styled from '@emotion/styled';
import { GridItem } from '@chakra-ui/react';
import type { AppTheme } from '@/theme/index';

type PostProps = {
  theme?: AppTheme;
};

const Post = styled(GridItem)(({ theme }: PostProps) => {
  return {
    border: `1px solid ${theme?.colors?.brand?.['500']}`,
    padding: theme?.space?.['4'],
    marginBottom: theme?.space?.['1']
  };
});

export default Post;
