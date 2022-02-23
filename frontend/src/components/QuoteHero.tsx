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
          height={150}
          src={backgroundUrl}
          width={200}
        />
      )}
      <Image
        alt={image.data.attributes.alternativeText}
        height={150}
        src={imageUrl}
        width={200}
      />
      <Typography>{quote}</Typography>
      <Typography>{citation}</Typography>
      <LinkArea {...links} />
    </Box>
  );
};

export default QuoteHero;
