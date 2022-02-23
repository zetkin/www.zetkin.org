import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

import getCmsMedia from '../utils/getCmsMedia';
import LinkArea from './LinkArea';

const QuoteHero = ({ ...data }) => {
  const { quote, citation, image, background, links } = data;

  const imageUrl = getCmsMedia(image.data.attributes.url);
  const backgroundUrl = getCmsMedia(background.data.attributes.url);

  return (
    <Box>
      {background.data && (
        <Image
          alt={background.data.attributes.alternativeText}
          height={background.data.attributes.height}
          src={backgroundUrl}
          width={background.data.attributes.width}
        />
      )}
      <Image
        alt={image.data.attributes.alternativeText}
        height={image.data.attributes.height}
        src={imageUrl}
        width={image.data.attributes.width}
      />
      <Typography>{quote}</Typography>
      <Typography>{citation}</Typography>
      <LinkArea {...links} />
    </Box>
  );
};

export default QuoteHero;
