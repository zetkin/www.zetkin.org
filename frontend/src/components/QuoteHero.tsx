import { Typography, Card, CardMedia, CardActions, Link } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

import getCmsMedia from "../utils/getCmsMedia";
import QuoteLinkArea from "./QuoteLinkArea";

const QuoteHero = ({ ...rest }) => {
  const { quote, citation, image, background, links } = rest;

  const imageUrl = getCmsMedia(image.data.attributes.url);
  const backgroundUrl = getCmsMedia(background.data.attributes.url);

  return (
    <Card sx={{
      backgroundImage: `url(${backgroundUrl})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      display: "flex",
    }}>
      <CardMedia>
        <Image alt="tom tom tom" src={imageUrl} width={400} height={500}/>
      </CardMedia>
      <Box>
        <Typography variant="h2">{quote}</Typography>
        <Typography variant="h4">{citation}</Typography>
        <CardActions>
          <QuoteLinkArea { ...links }/>
        </CardActions>
      </Box>
    </Card>
  );
};

export default QuoteHero;
