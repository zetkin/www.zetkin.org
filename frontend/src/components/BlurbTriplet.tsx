import { Box } from "@mui/system";

import Blurb from "./Blurb";
import { CmsBlurb } from "../types/cms";

const BlurbTriplet = ({ ...rest }) => {
  const { blurbs } = rest;
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
    }}>
      { blurbs.map((blurb: CmsBlurb, index: number) => <Blurb {...blurb} key={index}></Blurb>)}
    </Box>
  )
};

export default BlurbTriplet;
