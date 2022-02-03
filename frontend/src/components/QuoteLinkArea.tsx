import NextLink from "next/link";
import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import makePageUrl from "../utils/makePageUrl";

interface Link {
  id: number,
  label: string,
  externalUrl?: string,
  page?: Page,
}

interface Page {
  data: {
    id: number,
  }
}

const QuoteLinkArea = ({ ...links }) => {
  return (
    <Box>
      {Object.values(links).map((link: Link, index: number) => {
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

export default QuoteLinkArea;
