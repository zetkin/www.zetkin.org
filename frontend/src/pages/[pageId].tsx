import { Box } from '@mui/system';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { CmsPage } from '../types/cms';
import cmsFetch from '../utils/cmsFetch';
import BlockComponent from '../components/BlockComponent';
import PageHeader from '../components/PageHeader';

interface PageProps {
  page: CmsPage;
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
        <Box>
          <PageHeader
            title={page.attributes.title}
            image={page.attributes.image}
          />
        </Box>
        <Box>
          {page.attributes.blocks.map((block, index) => (
            <BlockComponent key={`block-${index}`} {...block} />
          ))}
        </Box>
      </main>
    </div>
  );
};

export default PageComponent;
