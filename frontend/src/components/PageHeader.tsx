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
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        textAlign: 'center',
        color: 'common.white',
        paddingTop: '6.75rem',
        paddingBottom: '2rem',
        marginBottom: '4em',
        background: background,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply',
      }}
    >
      <Typography variant="h1" fontWeight="bold">
        {title}
      </Typography>
    </Box>
  );
};

export default PageHeader;
