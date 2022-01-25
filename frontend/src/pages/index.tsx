import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
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
          <Typography variant="h1">
            This will be the new website of Zetkin Foundation.
          </Typography>
        </Box>
      </main>
    </div>
  );
};

export default Home;
