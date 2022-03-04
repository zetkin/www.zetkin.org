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
  const { posts } = rest;
  return (
    <Box>
      {posts.map((post: CmsFeedPost, index: number) => {
        return (
          <Card key={`post-${index}`}>
            <CardActionArea href={`/posts/${post.slug}`}>
              <CardMedia
                alt={post.image.alternativeText}
                component="img"
                height={200}
                image={getCmsMedia(post.image.url)}
              />
              <CardContent>
                <Typography variant="h4">{post.title}</Typography>
                <Typography>{post.author}</Typography>
                <Typography>{formatDate(post.publishedAt)}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Box>
  );
};

export default PostFeed;
