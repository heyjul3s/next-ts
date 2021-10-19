import React from 'react';
import { useRecoilValue } from 'recoil';
import { GetStaticPropsResult } from 'next';
import { QueryClient } from 'react-query';
import { dehydrate, DehydratedState } from 'react-query/hydration';
import { Grid, Text } from '@chakra-ui/react';

import { Layout } from '@/components/common/index';
import { usePostsQuery, fetchPosts } from '@/api/index';
import { S, Searchbar } from '@/components/pages/Home/index';
import { selectSearchbarQuery } from '@/components/pages/Home/Searchbar/state/selectors';

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

      <Grid gridTemplateColumns="repeat(3, 1fr)" gridGap="1em">
        {!!posts?.data?.length &&
          posts.data.map(({ title, body, id }) => (
            <S.Post key={id}>
              <Text as="h2" fontWeight={900} color="brand.500">
                {title}
              </Text>
              <p>{body}</p>
            </S.Post>
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
