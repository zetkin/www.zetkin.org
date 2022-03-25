import { Box } from '@mui/system';
import Image from 'next/image';
import getCmsMedia from '../utils/getCmsMedia';

const ImageBlock = ({ ...rest }) => {
  const { description, image, size } = rest;

  const setImageSize = () => {
    switch (size) {
      case 'small':
        return {
          height: image.data.attributes.height,
          width: image.data.attributes.width,
        };
      case 'medium':
        return {
          height: image.data.attributes.height,
          width: image.data.attributes.width,
        };
      case 'large':
        return {
          height: image.data.attributes.height,
          width: image.data.attributes.width,
        };
      default:
        return {
          height: image.data.attributes.height,
          width: image.data.attributes.width,
        };
    }
  };

  const imageSize = setImageSize();

  return (
    <Box component="figure" sx={{ marginBottom: '4rem' }}>
      <Image
        alt={description ? description : image.data.attributes.alternativeText}
        height={imageSize.height}
        src={getCmsMedia(image.data.attributes.url)}
        width={imageSize.width}
      />
      {description && <figcaption>{description}</figcaption>}
    </Box>
  );
};

export default ImageBlock;
