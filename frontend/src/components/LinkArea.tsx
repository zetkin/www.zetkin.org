import { Box } from '@mui/system';
import NextLink from 'next/link';
import { Link, Typography } from '@mui/material';

import makePageUrl from '../utils/makePageUrl';
import { CmsLink } from '../types/cms';

const LinkArea = ({ ...links }) => {
  return (
    <Box>
      {Object.values(links).map((link: CmsLink, index: number) => {
        //jag låtsas att vi kan kontrollera i strapi att man ALLTID fyller i ena lr andra
        const href = link.externalUrl ? link.externalUrl : makePageUrl(link.page!.data.id);

        return (
          <NextLink key={`link-${index}`} href={href} passHref>
            <Link>
              <Typography>
                {link.label}
              </Typography>
            </Link>
        </NextLink>
        )
      })}
    </Box>
  );
};

export default LinkArea;
