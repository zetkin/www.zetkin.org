import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';

import getCmsMedia from '../utils/getCmsMedia';
import LinkArea from './LinkArea';
import { CmsImageData } from '../types/cms';

const SuperHero = ({ ...block }) => {
  const { title, subheader, links, images, background } = block;

  return (
    <Box>
      <Image
        alt={background.data.attributes.alternativeText}
        height={background.data.attributes.height}
        src={getCmsMedia(background.data.attributes.url)}
        width={background.data.attributes.width}
      />
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h3">{subheader}</Typography>
      <Carousel>
        {images.data.map((image: CmsImageData, index: number) => {
          return (
            <Image
              alt={image.attributes.alternativeText}
              height={image.attributes.height}
              key={`carouselImage-${index}`}
              src={getCmsMedia(image.attributes.url)}
              width={image.attributes.width}
            />
          );
        })}
      </Carousel>
      <LinkArea {...links} />
    </Box>
  );
};

export default SuperHero;
