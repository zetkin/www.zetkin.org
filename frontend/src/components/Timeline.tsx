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
  const { nodes, title } = rest;
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        textAlign: 'center',
        padding: '4em',
      }}
    >
      <Typography variant="h3">{title}</Typography>
      <MuiTimeline position="alternate">
        {nodes.map((node: CmsTimelineNode, index: string) => (
          <TimelineItem key={`node-${index}`}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h5" fontWeight="bold">
                {node.title}
              </Typography>
              <Typography variant="body1">{node.content}</Typography>
              {node.image?.data && (
                <Image
                  alt={node.image?.data?.attributes.alternativeText}
                  src={getCmsMedia(
                    node.image.data.attributes.formats.thumbnail.url
                  )}
                  height={node.image?.data?.attributes.formats.thumbnail.height}
                  width={node.image?.data.attributes.formats.thumbnail.width}
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
