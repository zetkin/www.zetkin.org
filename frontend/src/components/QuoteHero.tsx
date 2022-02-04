import { Typography, Card, CardMedia, CardActions } from "@mui/material";
import { Box } from "@mui/system";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import getCmsMedia from "../utils/getCmsMedia";
import LinkArea from "./LinkArea";

const QuoteHero = ({ ...rest }) => {
  const { quote, citation, image, background, links } = rest;

  const imageUrl = getCmsMedia(image.data.attributes.url);
  const backgroundUrl = getCmsMedia(background.data.attributes.url);

  return (
    <Card sx={{
      background: `url(${backgroundUrl}) rgba(0, 0, 0, 0.4)`,
      backgroundBlendMode: "multiply",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      display: "flex",
    }}>
        <CardMedia
          component="img"
          alt={image.data.attributes.alternativeText}
          image={imageUrl}
          sx={{
            border: 4,
            borderColor: "white",
            borderRadius: "50%",
            width: 300,
            height: 300,
          }}/>
      <Box sx={{ color: "white" }}>
        <FormatQuoteIcon
          fontSize="large"
          sx={{ color: "primary.main" }}
        />
        <Typography variant="h2">{quote}</Typography>
        <Typography variant="h5">{citation}</Typography>
        <CardActions>
          <LinkArea { ...links }/>
        </CardActions>
      </Box>
    </Card>
  );
}

export default QuoteHero;
