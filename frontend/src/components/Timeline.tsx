import {Timeline as MuiTimeline} from '@mui/lab';
import { CmsTimelineNode } from '../types/cms';

import TimelineNode from './TimelineNode';

const Timeline = ({ ...rest }) => {
  const { timelineNode } = rest;
  return (
    <MuiTimeline position='alternate'>
      {timelineNode.map((node: CmsTimelineNode , index: string) => <TimelineNode key={`timelineNode-${index}`} {...node} /> )}
    </MuiTimeline>
  )
};

export default Timeline;
