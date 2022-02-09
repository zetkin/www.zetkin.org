import { Box } from "@mui/system";
import { Link, Typography } from "@mui/material";
import NextLink from 'next/link';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import makePageUrl from "../../utils/makePageUrl";
import { CmsLink, CmsMainMenuCta } from "../../types/cms";

interface LinkGroupProps {
  links: CmsLink[],
  cta: CmsMainMenuCta,
}

const MainMenuLinkGroup = (props: LinkGroupProps) => {
  const { links, cta } = props;

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      {links.map((link, index) => {
        const href = link.externalUrl ? link.externalUrl : makePageUrl(link.page!.data.id);
        return <NextLink key={`groupedLink-${index}`} href={href} passHref>
            <Link>
              {link.label}
            </Link>
          </NextLink>
      })}
      <Typography variant="h6">{ cta.label }<DoubleArrowIcon /></Typography>
    </Box>
  )}

export default MainMenuLinkGroup;
