import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { CmsLogo } from "../types/cms";
import getCmsMedia from "../utils/getCmsMedia";

const LogoWall = ({ ...rest }) => {
  const { logos } = rest;

  return (
    <Box>
      {
        logos.map((logo: CmsLogo, index: number) =>
          <Image
            alt={logo.image.data.attributes.alternativeText}
            height={100}
            key={`logo-${index}`}
            src={getCmsMedia(logo.image.data.attributes.formats.thumbnail.url)}
            width={100}
          />
        )
      }
    </Box>
  );
};

export default LogoWall;
