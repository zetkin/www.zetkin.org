import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import getCmsMedia from '../utils/getCmsMedia';

const ImageBlock = ({ ...rest }) => {
  const { description, image, size } = rest;

  const setImageSize = () => {
    switch (size) {
      case 'small':
        return { height: 100, width: 150 };
      case 'medium':
        return { height: 200, width: 300 };
      case 'large':
        return { height: 300, width: 450 };
      default:
        return { height: 200, width: 300 };
    }
  };

  const imageSize = setImageSize();

  return (
    <Box>
      <Image
        alt={description ? description : image.data.attributes.alternativeText}
        height={imageSize.height}
        src={getCmsMedia(image.data.attributes.url)}
        width={imageSize.width}
      />
      {description && <Typography>{description}</Typography>}
    </Box>
  );
};

export default ImageBlock;
