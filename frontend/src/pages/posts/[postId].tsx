import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import dayjs from 'dayjs';

import { CmsPost } from '../../types/cms';
import cmsFetch from '../../utils/cmsFetch';
import getCmsMedia from '../../utils/getCmsMedia';
import BlockComponent from '../../components/BlockComponent';

interface PostProps {
  post: CmsPost;
}

interface PostParams {
  postId: string;
  [key: string]: string;
}

export const getServerSideProps: GetServerSideProps<
  PostProps,
  PostParams
> = async (ctx) => {
  const res = await cmsFetch('/posts/' + ctx.params!.postId);
  const data = await res.json();

  return {
    props: {
      post: data.data,
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
        <Box
          sx={{
            color: 'primary.main',
          }}
        >
          <Typography variant="h2">{post.attributes.title}</Typography>
          {post.attributes.image.data && (
            <Image
              alt={post.attributes.image.data.attributes.alternativeText}
              height={post.attributes.image.data.attributes.height}
              src={getCmsMedia(post.attributes.image.data.attributes.url)}
              width={post.attributes.image.data.attributes.width}
            />
          )}
          <Typography>
            {dayjs(post.attributes.publishedAt).format('DD/MM/YYYY')}
          </Typography>
          <Typography>{post.attributes.author}</Typography>
        </Box>
        <Box>
          {post.attributes.blocks.map((block, index) => (
            <BlockComponent key={`block-${index}`} {...block} />
          ))}
        </Box>
      </main>
    </div>
  );
};

export default PostComponent;
