import NextLink from "next/link";
import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";

import makePageUrl from "../utils/makePageUrl";
import { CmsLink } from "../types/cms";

const LinkArea = ({ ...links }) => {
  return (
    <Box>
      {Object.values(links).map((link: CmsLink, index: number) => {
        const href = link.externalUrl ? link.externalUrl : makePageUrl(link.page!.data.id);

        return (
          <NextLink key={`link-${index}`} href={href} passHref>
            <Link>
              <Typography variant="h5">
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
