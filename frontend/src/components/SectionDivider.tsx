import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

import getCmsMedia from '../utils/getCmsMedia';

const SectionDivider = ({ ...block }) => {
  const { image, title } = block;
  return (
    <Box>
      <Typography variant="h2">{title}</Typography>
      {image.data && (
        <Image
          alt={image.data.attributes.alternativeText}
          height={image.data.attributes.height}
          src={getCmsMedia(image.data.attributes.url)}
          width={image.data.attributes.width}
        />
      )}
    </Box>
  );
};

export default SectionDivider;
