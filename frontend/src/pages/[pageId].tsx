import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import BlockManager from "../components/BlockManager";
import cmsFetch from "../utils/cmsFetch";
import { CmsMainMenuTab, CmsPage } from "../types/cms";
import MainMenuTab from "../components/MainMenu/MainMenuTab";

interface PageProps {
  page: CmsPage;
  mainMenu: CmsMainMenuTab[];
}

interface PageParams {
  pageId: string;
  [key: string]: string;
}

export const getServerSideProps: GetServerSideProps<
  PageProps,
  PageParams
  > = async (ctx) => {
  const pageRes = await cmsFetch("/pages/" + ctx.params!.pageId);
    const pageData = await pageRes.json();

    const mainMenuRes = await cmsFetch("/main-menus");
    const mainMenuData = await mainMenuRes.json();

  return {
    props: {
      page: pageData.data,
      mainMenu: mainMenuData.data,
    },
  };
};

const PageComponent: NextPage<PageProps> = ({ page, mainMenu }) => {
  const { attributes: pageAttributes } = page;

  return (
    <div>
      <Head>
        <title>Zetkin Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
        }}>
          {mainMenu.map((menuTab, index) => <MainMenuTab key={`menuTab-${index}`} {...menuTab} />)}
        </Box>
        <Box
          sx={{
            color: "primary.main",
          }}
        >
          <Typography variant="h2">{ pageAttributes.title }</Typography>
        </Box>
        <Box>
          <Typography variant="body1">{ pageAttributes.content }</Typography>
        </Box>
        <BlockManager blocks={pageAttributes.blocks} />
      </main>
    </div>
  );
};

export default PageComponent;
