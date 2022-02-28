import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import dayjs from 'dayjs';

import { CmsFeedPost } from '../types/cms';
import getCmsMedia from '../utils/getCmsMedia';
import makePostUrl from '../utils/makePostUrl';

const PostFeed = ({ ...rest }) => {
  const { posts } = rest;
  return (
    <Box>
      {posts.map((post: CmsFeedPost, index: number) => {
        return (
          <Card key={`post-${index}`}>
            <CardActionArea href={makePostUrl(post.id)}>
              <CardMedia
                alt={post.image.alternativeText}
                component="img"
                height={200}
                image={getCmsMedia(post.image.url)}
              />
              <CardContent>
                <Typography variant="h4">{post.title}</Typography>
                <Typography>{post.author}</Typography>
                <Typography>
                  {dayjs(post.publishedAt).format('DD/MM/YYYY')}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Box>
  );
};

export default PostFeed;
