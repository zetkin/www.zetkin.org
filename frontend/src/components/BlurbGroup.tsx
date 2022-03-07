import { Box } from '@mui/system';
import { CmsBlurb } from '../types/cms';
import Blurb from './Blurb';

const BlurbGroup = ({ ...block }) => {
  const { blurbs } = block;

  const length = blurbs.length;
  console.log(length);
  return (
    <Box
      sx={
        blurbs.length > 3
          ? {
              display: 'grid',
              width: '70%',
              gridTemplateColumns: '50% 50%',
              justifyItems: 'center',
              marginBottom: '4em',
            }
          : {
              display: 'flex',
              width: '70%',
              marginBottom: '4em',
            }
      }
    >
      {blurbs.map((blurb: CmsBlurb, index: number) => {
        return <Blurb key={`blurbGroup-${index}`} {...blurb} />;
      })}
    </Box>
  );
};

export default BlurbGroup;
