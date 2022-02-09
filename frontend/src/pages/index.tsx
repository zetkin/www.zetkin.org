import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import MainMenuTab from "../components/MainMenu/MainMenuTab";

import { CmsMainMenuTab, CmsPage } from "../types/cms";
import cmsFetch from "../utils/cmsFetch";

interface HomeProps {
  pages: CmsPage[];
  mainMenu: CmsMainMenuTab[];
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const res = await cmsFetch("/pages");
  const data = await res.json();

  const mainMenuRes = await cmsFetch("/main-menus");
  const mainMenuData = await mainMenuRes.json();

  return {
    props: {
      pages: data.data,
      mainMenu: mainMenuData.data,
    },
  };
};

const Home: NextPage<HomeProps> = ({ pages, mainMenu }) => {
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
            backgroundColor: "secondary.main",
            display: {
              sm: "flex",
              xs: "block",
            },
            justifyContent: "space-around",
            padding: 2,
            "& a:hover": {
              cursor: 'pointer',
              fontWeight: "bold",
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
            color: "primary.main",
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
