import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { Page } from '../types/cms';
import cmsFetch from '../utils/cmsFetch';

interface PageProps {
  page: Page;
}

interface PageParams {
  pageId: string;
  [key: string]: string;
}

export const getServerSideProps: GetServerSideProps<
  PageProps,
  PageParams
> = async (ctx) => {
  const res = await cmsFetch('/pages/' + ctx.params!.pageId);
  const data = await res.json();

  return {
    props: {
      page: data.data,
    },
  };
};

const PageComponent: NextPage<PageProps> = ({ page }) => {
  return (
    <div>
      <Head>
        <title>Zetkin Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box
          sx={{
            color: 'primary.main',
          }}
        >
          <Typography variant="h2">{page.attributes.title}</Typography>
        </Box>
        <Box>
          <Typography variant="body1">{page.attributes.content}</Typography>
        </Box>
      </main>
    </div>
  );
};

export default PageComponent;
