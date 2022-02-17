import { Link } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import NextLink from "next/link";
import { CmsLogo } from "../types/cms";
import getCmsMedia from "../utils/getCmsMedia";
import makePageUrl from "../utils/makePageUrl";

const LogoWall = ({ ...rest }) => {
  const { logos } = rest;

  return (
    <Box>
      {
        logos.map((logo: CmsLogo, index: number) => {
          return logo.externalUrl || logo.page ?
            <NextLink
              href={logo.externalUrl? logo.externalUrl : makePageUrl(logo.page!.data?.id)}
              key={`logo-${index}`}
              passHref
            >
              <Link>
                <Image
                  alt={`Go to ${logo.externalUrl}`}
                  height={100}
                  src={getCmsMedia(logo.image.data.attributes.formats.thumbnail.url)}
                  width={100}
                />
              </Link>
            </NextLink>
            :
            <Image
              alt={logo.image.data.attributes.alternativeText}
              height={100}
              key={`logo-${index}`}
              src={getCmsMedia(logo.image.data.attributes.formats.thumbnail.url)}
              width={100}
            />
        })
      }
    </Box>
  );
};

export default LogoWall;
