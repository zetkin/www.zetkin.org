import { Box } from '@mui/system';
import NextLink from 'next/link';
import { Link, Typography } from '@mui/material';

import { CmsLink } from '../types/cms';

const LinkArea = ({ ...links }) => {
  return (
    <Box
      sx={{
        paddingTop: '1rem',
      }}
    >
      {Object.values(links).map((link: CmsLink, index: number) => {
        //jag låtsas att vi kan kontrollera i strapi att man ALLTID fyller i ena lr andra
        const href = link.externalUrl
          ? link.externalUrl
          : `/${link.page!.data.id}`;

        return (
          <NextLink key={`link-${index}`} href={href} passHref>
            <Link underline="none">
              <Typography variant="h6" fontWeight="bold">
                {link.label}
              </Typography>
            </Link>
          </NextLink>
        );
      })}
    </Box>
  );
};

export default LinkArea;
