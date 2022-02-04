import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";

import { CmsBlurb } from "../types/cms";
import LinkArea from "./LinkArea";
import BlurbIcon from "./BlurbIcon";

const Blurb = (blurb: CmsBlurb) => {
  const { title, icon, intro, links } = blurb;
  return (

    <Card sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        width: "30%"
    }}>
      <BlurbIcon icon={ icon }/>
      <Typography sx={{
        fontSize: "34px",
        fontWeight: "bold",
      }}>{title}</Typography>
      <CardContent>
        <Typography>{intro}</Typography>
      </CardContent>
      <CardActionArea>
        <CardActions>
          <LinkArea {...links} />
        </CardActions>
      </CardActionArea>
    </Card>
  )
};

export default Blurb;
