import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';

import { Page } from '../types/cms';
import cmsFetch from '../utils/cmsFetch';

interface HomeProps {
  pages: Page[];
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const res = await cmsFetch('/pages');
  const data = await res.json();

  return {
    props: {
      pages: data.data,
    },
  };
};

const Home: NextPage<HomeProps> = ({ pages }) => {
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
                <Link>Click here for {page.attributes.title}</Link>
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
        </Box>
      </main>
    </div>
  );
};

export default Home;
