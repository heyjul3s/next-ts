import React from 'react';
import { useRecoilValue } from 'recoil';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { Grid, Text } from '@chakra-ui/react';

import { Layout } from '@/components/common/index';
import { usePostsQuery, fetchPosts } from '@/api/index';
import { Post, Searchbar } from '@/components/pages/Home/index';
import { selectSearchbarQuery } from '@/components/pages/Home/Searchbar/state/selectors';

import type { GetStaticPropsResult } from 'next';
import type { DehydratedState } from 'react-query/hydration';

export default function Home(): React.ReactElement {
  const searchQuery = useRecoilValue(selectSearchbarQuery);
  const posts = usePostsQuery(searchQuery);

  return (
    <Layout
      title={'My Page Title'}
      className="home-index"
      description={'My Page Description'}
    >
      <Searchbar />

      <Grid
        data-cy="search-results"
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(4, 1fr)',
          'repeat(5, 1fr)'
        ]}
        gridGap="6"
      >
        {!!posts?.data?.length &&
          posts.data.map(({ title, body, id }) => (
            <Post key={id}>
              <Text as="h2" fontWeight={900} color="brand.500">
                {title}
              </Text>

              <p>{body}</p>
            </Post>
          ))}
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
