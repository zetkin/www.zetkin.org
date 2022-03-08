import { Box } from '@mui/system';
import NextLink from 'next/link';
import { Button } from '@mui/material';

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
            <Button
              sx={{
                borderRadius: '2em',
                textTransform: 'none',
                fontSize: '18pt',
                padding: '0.5em 1.5em',
              }}
              variant="contained"
            >
              {link.label}
            </Button>
          </NextLink>
        );
      })}
    </Box>
  );
};

export default LinkArea;
