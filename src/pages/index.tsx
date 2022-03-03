import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { Flex, Grid, Text } from '@chakra-ui/react';

import { Layout } from '@/components/common/index';
import { usePostsQuery, fetchPosts } from '@/requests/index';
import { Post, SearchBar } from '@/components/pages/Home/index';
import { postsState } from '@/state/posts/atoms';
import { selectPostsByQuery } from '@/state/posts/selectors';
import { selectSearchbarQuery } from '@/state/searchBar/selectors';

import type { GetStaticPropsResult } from 'next';
import type { DehydratedState } from 'react-query/hydration';
import type { TPost } from '@/requests/index';

export default function Home(): React.ReactElement {
  const searchQuery = useRecoilValue(selectSearchbarQuery);
  const setPostsState = useSetRecoilState(postsState);
  const posts = useRecoilValue(selectPostsByQuery);
  const postsResponse = usePostsQuery();

  React.useEffect(() => {
    setPostsState(postsResponse?.data as TPost[]);
  }, [postsResponse]);

  return (
    <Layout
      title={'My Page Title'}
      className="home-index"
      description={'My Page Description'}
    >
      <SearchBar />

      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(4, 1fr)',
          'repeat(5, 1fr)'
        ]}
        gap={6}
      >
        {!!posts?.length &&
          posts.map(({ title, body, id }) => (
            <Post key={id}>
              <Text as="h2" fontWeight={900} color="brand.500">
                {title}
              </Text>
              <p>{body}</p>
            </Post>
          ))}

        {!posts?.length && (
          <Flex
            width="100vw"
            minHeight="50vh"
            alignItems="center"
            justifyContent="center"
          >
            <Text>
              Search term{' '}
              <strong>
                <em>"{searchQuery}"</em>
              </strong>{' '}
              yielded no results.
            </Text>
          </Flex>
        )}
      </Grid>
    </Layout>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{ dehydratedState: DehydratedState }>
> {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('posts', fetchPosts());

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
}
