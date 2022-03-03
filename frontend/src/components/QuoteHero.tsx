import { CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

import getCmsMedia from '../utils/getCmsMedia';
import LinkArea from './LinkArea';

const QuoteHero = ({ ...data }) => {
  const { quote, citation, image, background, links } = data;

  const imageUrl = getCmsMedia(image.data.attributes.url);

  const backgroundImage =
    background.data &&
    `url(${getCmsMedia(background.data.attributes.url)}) rgba(0, 0, 0, 0.7)`;

  return (
    <Box
      sx={{
        backgroundColor: '#231f20',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        background: backgroundImage,
        backgroundBlendMode: 'multiply',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        marginBottom: '4em',
        padding: '2em',
      }}
    >
      <CardMedia
        component="img"
        alt={image.data.attributes.alternativeText}
        image={imageUrl}
        sx={{
          border: 4,
          borderColor: 'white',
          borderRadius: '50%',
          width: 300,
          height: 300,
        }}
      />
      <Box
        sx={{
          color: 'white',
          padding: '4em',
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          {quote}
        </Typography>
        <Typography variant="h6">{citation}</Typography>
        <LinkArea {...links} />
      </Box>
    </Box>
  );
};

export default QuoteHero;
