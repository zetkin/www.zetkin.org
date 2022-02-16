import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import QuoteHero from "../components/QuoteHero";

import { CmsPage } from "../types/cms";
import cmsFetch from "../utils/cmsFetch";

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
  const res = await cmsFetch("/pages/" + ctx.params!.pageId);
  const data = await res.json();

  return {
    props: {
      page: data.data,
    },
  };
};

const PageComponent: NextPage<PageProps> = ({ page }) => {
  const getBlockComponent = ({ __component, ...rest }: { __component: string }, index: number) => {
    console.log(__component);
    switch (__component) {
      case 'blocks.quote':
        return <QuoteHero key={`${__component}-${index}`} {...rest} />;
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
            color: "primary.main",
          }}
        >
          <Typography variant="h2">{page.attributes.title}</Typography>
        </Box>
        <Box>
          {
            page.attributes.blocks.map((block, index) => getBlockComponent(block, index))
          }
        </Box>
      </main>
    </div>
  );
};

export default PageComponent;
