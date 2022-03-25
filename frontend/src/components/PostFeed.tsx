import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';

import { CmsFeedPost } from '../types/cms';
import getCmsMedia from '../utils/getCmsMedia';
import formatDate from '../utils/formatDate';

const PostFeed = ({ ...rest }) => {
  const { posts, title } = rest;
  return (
    <Box sx={{ width: '70%', marginBottom: '4rem' }}>
      <Typography variant="h3" fontWeight="bold" my={1.5}>
        {title}
      </Typography>
      <Box
        sx={{
          display: { lg: 'flex' },
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: '4em',
        }}
      >
        {posts.map((post: CmsFeedPost, index: number) => {
          return (
            <Card
              key={`post-${index}`}
              sx={{
                boxShadow: 'none',
                backgroundColor: 'secondary.light',
                width: '24%',
              }}
            >
              <CardActionArea
                href={`/posts/${post.slug}`}
                sx={{
                  height: '100%',
                }}
              >
                <CardMedia
                  alt={post.image.alternativeText}
                  component="img"
                  height={200}
                  image={getCmsMedia(post.image.url)}
                />
                <CardContent sx={{ color: 'palette.text.secondary' }}>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    textAlign="left"
                    color="palette.text.secondary"
                  >
                    {post.title}
                  </Typography>
                  <Typography>{post.author}</Typography>
                  <Typography>{formatDate(post.publishedAt)}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default PostFeed;
