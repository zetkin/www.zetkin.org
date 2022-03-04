import { Box } from '@mui/system';
import Image from 'next/image';
import getCmsMedia from '../utils/getCmsMedia';
import Blurb from './Blurb';

const Feature = ({ ...block }) => {
  const { image, blurb } = block;

  return (
    <Box>
      <Image
        alt={image.data.attributes.alternativeText}
        height={image.data.attributes.height}
        src={getCmsMedia(image.data.attributes.url)}
        width={image.data.attributes.width}
      />
      <Blurb {...blurb} />
    </Box>
  );
};

export default Feature;
