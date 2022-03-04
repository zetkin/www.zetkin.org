import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import { CmsImage } from '../types/cms';
import getCmsMedia from '../utils/getCmsMedia';

const PageHeader = ({ title, image }: { title: string; image: CmsImage }) => {
  const background = image.data
    ? `url(${getCmsMedia(image.data.attributes.url)}) rgba(0, 0, 0, 0.7)`
    : 'secondary.main';
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingTop: '6.75rem',
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginBottom: '4em',
        width: '100%',
        background: background,
        backgroundBlendMode: 'multiply',
      }}
    >
      <Typography variant="h1">{title}</Typography>
    </Box>
  );
};

export default PageHeader;
