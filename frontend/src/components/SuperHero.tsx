import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import getCmsMedia from '../utils/getCmsMedia';
import LinkArea from './LinkArea';

const SuperHero = ({ ...block }) => {
  const { title, subheader, links, image, background } = block;

  return (
    <Box
      sx={{
        color: 'white',
        width: '100%',
        minHeight: { lg: '100vh' },
        marginTop: { lg: '-4em' },
        display: { lg: 'flex' },
        flexDirection: 'column',
        alignItems: 'center',
        background: `url(${getCmsMedia(
          background.data.attributes.url
        )}) rgba(0, 0, 0, 0.7)`,
        backgroundBlendMode: 'multiply',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginBottom: '4em',
      }}
    >
      <Typography variant="h1" fontWeight="bold" my={4}>
        {title}
      </Typography>
      <Typography variant="h4" fontWeight="bold" marginBottom={3}>
        {subheader}
      </Typography>
      <Box
        sx={{
          height: { lg: '40vw' },
          width: { lg: '50vw' },
          position: { lg: 'relative' },
          borderRadius: '2em',
          overflow: 'hidden',
          background: `url(${getCmsMedia(image.data.attributes.url)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <LinkArea {...links} />
    </Box>
  );
};

export default SuperHero;
