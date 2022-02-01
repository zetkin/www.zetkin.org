import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const QuoteHero = ({ ...rest }) => {
  const { quote, citation } = rest;

  return (
    <Box>
      <Typography>{quote}</Typography>
      <Typography>{citation}</Typography>
    </Box>
  );
};

export default QuoteHero;
