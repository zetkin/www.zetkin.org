import NextLink from 'next/link';
import { Box, Link, Typography } from "@mui/material";

import { CmsMainMenuItem } from "../../types/cms";
import makePageUrl from "../../utils/makePageUrl";
import Image from 'next/image';
import getCmsMedia from '../../utils/getCmsMedia';
import MainMenuLinkGroup from './MainMenuLinkGroup';

const MainMenuItem = ({ title, cta, description, image, links }: CmsMainMenuItem) => {
  const ctaHref = cta.externalUrl ? cta.externalUrl : makePageUrl(cta.page!.data.id);
  const imageUrl = image?.data ? getCmsMedia(image.data.attributes.url) : '';

  return (
    <NextLink href={ctaHref} passHref>
      <Link underline='none'>
        <Box sx={{
          '&:hover': {
            backgroundColor: '#dac4a0',
          }
        }}>
          {image?.data && <Image
            alt={image?.data.attributes.alternativeText}
            src={imageUrl}
            height='300'
            width='400'
          />}
          <Typography variant="h5">{title}</Typography>
          {description && <Typography variant="subtitle1">{description}</Typography>}
          {links.length > 0 && <MainMenuLinkGroup links={links} cta={ cta }/>}
        </Box>
      </Link>
    </NextLink>
  )
};

export default MainMenuItem;
