import { Box } from '@mui/system';
import Image from 'next/image';
import getCmsMedia from '../utils/getCmsMedia';
import Blurb from './Blurb';

const Feature = ({ ...block }) => {
  const { image, imagePlacement, blurb } = block;

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: imagePlacement === 'left' ? 'row' : 'row-reverse',
        minHeight: '30rem',
        marginBottom: '4em',
      }}
    >
      <Box sx={{ width: '50%', position: 'relative' }}>
        <Image
          alt={image.data.attributes.alternativeText}
          layout="fill"
          src={getCmsMedia(image.data.attributes.url)}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '3rem',
          paddingRight: '3rem',
        }}
      >
        <Blurb {...blurb} />
      </Box>
    </Box>
  );
};

export default Feature;
