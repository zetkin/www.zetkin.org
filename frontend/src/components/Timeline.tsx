import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { CmsTimelineNode } from '../types/cms';
import Image from 'next/image';

import getCmsMedia from '../utils/getCmsMedia';

const Timeline = ({ ...rest }) => {
  const { nodes } = rest;
  return (
    <Box>
      <MuiTimeline>
        {nodes.map((node: CmsTimelineNode, index: string) => (
          <TimelineItem key={`node-${index}`}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography>{node.title}</Typography>
              <Typography>{node.content}</Typography>
              {node.image?.data && (
                <Image
                  alt={node.image?.data?.attributes.alternativeText}
                  height="150"
                  src={getCmsMedia(node.image.data.attributes.url)}
                  width="200"
                />
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </MuiTimeline>
    </Box>
  );
};

export default Timeline;
