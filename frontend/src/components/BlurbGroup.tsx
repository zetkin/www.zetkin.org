import { Box } from '@mui/system';
import { CmsBlurb } from '../types/cms';
import Blurb from './Blurb';

const BlurbGroup = ({ ...block }) => {
  const { blurbs } = block;
  return (
    <Box>
      {blurbs.map((blurb: CmsBlurb, index: number) => {
        <Blurb key={`blurbGroup-${index}`} {...blurb} />;
      })}
    </Box>
  );
};

export default BlurbGroup;
