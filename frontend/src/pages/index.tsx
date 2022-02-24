import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';

import { CmsPage, CmsPost } from '../types/cms';
import cmsFetch from '../utils/cmsFetch';

interface HomeProps {
  pages: CmsPage[];
  feed: CmsPost[];
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const pageRes = await cmsFetch('/pages');
  const pageData = await pageRes.json();

  const feedRes = await cmsFetch('/feed');
  const feedData = await feedRes.json();

  return {
    props: {
      pages: pageData.data,
      feed: feedData,
    },
  };
};

const Home: NextPage<HomeProps> = ({ pages, feed }) => {
  return (
    <div>
      <Head>
        <title>Zetkin Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            display: {
              sm: 'flex',
              xs: 'block',
            },
            justifyContent: 'space-around',
            padding: 2,
            '& a:hover': {
              cursor: 'pointer',
              fontWeight: 'bold',
            },
          }}
        >
          {pages.map((page) => (
            <Box key={page.id}>
              <NextLink href={`/${page.id}`}>
                <Link>{page.attributes.title}</Link>
              </NextLink>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            color: 'primary.main',
          }}
        >
          <Typography variant="h1">
            This will be the new website of Zetkin Foundation.
          </Typography>
          <Box display="flex" flexDirection="row">
            {feed.map((post, index) => {
              return (
                <Box key={index} border={2}>
                  <Typography variant="h4">{post.title}</Typography>
                  <Typography>{post.author}</Typography>
                  <Typography>{post.publishedAt}</Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default Home;
