import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import getCmsMedia from '../utils/getCmsMedia';

const SectionDivider = ({ ...block }) => {
  const { image, title } = block;
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
        color: 'palette.text.primary',
        paddingTop: '4rem',
        paddingBottom: '2rem',
        marginBottom: '4em',
        background: background,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply',
      }}
    >
      <Typography variant="h2" fontWeight="bold">
        {title}
      </Typography>
    </Box>
  );
};

export default SectionDivider;
