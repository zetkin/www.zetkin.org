import Image from "next/image";
import { TimelineItem, TimelineDot, TimelineSeparator, TimelineContent, TimelineConnector } from "@mui/lab";
import { Typography } from "@mui/material";
import { CmsTimelineNode } from "../types/cms";
import getCmsMedia from "../utils/getCmsMedia";

const TimelineNode = ({ title, content, image }: CmsTimelineNode) => {
  const imageUrl = image?.data? getCmsMedia(image.data.attributes.url) : '';

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
        </TimelineSeparator>
      <TimelineContent>
        <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
        <Typography>{content}</Typography>
        {image?.data &&
          <Image
            alt={image?.data?.attributes.alternativeText}
            height="150"
            src={imageUrl}
            width="200"
          />
        }
      </TimelineContent>
    </TimelineItem>
  )
};

export default TimelineNode;
