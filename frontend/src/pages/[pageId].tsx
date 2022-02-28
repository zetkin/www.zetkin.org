import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import FaqAccordion from '../components/FaqAccordion';
import Timeline from '../components/Timeline';
import QuoteHero from '../components/QuoteHero';
import { CmsPage } from '../types/cms';
import cmsFetch from '../utils/cmsFetch';
import LogoWall from '../components/LogoWall';
import TextBlock from '../components/TextBlock';
import ContactCard from '../components/ContactCard';
import LargeList from '../components/LargeList';
import PageHeader from '../components/PageHeader';
import ImageBlock from '../components/ImageBlock';

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
  const getBlockComponent = (
    { __component, ...rest }: { __component: string },
    index: number
  ) => {
    switch (__component) {
      case 'blocks.text-block':
        return <TextBlock key={`${__component}-${index}`} {...rest} />;
      case 'blocks.quote':
        return <QuoteHero key={`${__component}-${index}`} {...rest} />;
      case 'blocks.timeline':
        return <Timeline key={`${__component}-${index}`} {...rest} />;
      case 'blocks.faq-accordion':
        return <FaqAccordion key={`${__component}-${index}`} {...rest} />;
      case 'blocks.logo-wall':
        return <LogoWall key={`${__component}-${index}`} {...rest} />;
      case 'blocks.contact-card':
        return <ContactCard key={`${__component}-${index}`} {...rest} />;
      case 'blocks.large-list':
        return <LargeList key={`${__component}-${index}`} {...rest} />;
      case 'blocks.image-block':
        return <ImageBlock key={`${__component}-${index}`} {...rest} />;
    }
  };

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
          <PageHeader
            title={page.attributes.title}
            image={page.attributes.image}
          />
        </Box>
        <Box>
          {page.attributes.blocks.map((block, index) =>
            getBlockComponent(block, index)
          )}
        </Box>
      </main>
    </div>
  );
};

export default PageComponent;
