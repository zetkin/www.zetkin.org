import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { CmsPost } from '../../types/cms';
import cmsFetch from '../../utils/cmsFetch';
import BlockComponent from '../../components/BlockComponent';
import PageHeader from '../../components/PageHeader';
import formatDate from '../../utils/formatDate';

interface PostProps {
  post: CmsPost;
}

interface PostParams {
  slug: string;
  [key: string]: string;
}

export const getServerSideProps: GetServerSideProps<
  PostProps,
  PostParams
> = async (ctx) => {
  const res = await cmsFetch('/posts?filters[slug]=' + ctx.params!.postSlug);
  const data = await res.json();

  return {
    props: {
      post: data.data[0] ? data.data[0] : [],
    },
  };
};

const PostComponent: NextPage<PostProps> = ({ post }) => {
  return (
    <div>
      <Head>
        <title>Zetkin Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PageHeader
          title={post.attributes.title}
          image={post.attributes.image}
        />
        <Box
          sx={{
            display: { lg: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5">
            {formatDate(post.attributes.publishedAt)}
          </Typography>
          <Typography variant="h5">{post.attributes.author}</Typography>
          {post.attributes.blocks.map((block, index) => (
            <BlockComponent key={`block-${index}`} {...block} />
          ))}
        </Box>
      </main>
    </div>
  );
};

export default PostComponent;
