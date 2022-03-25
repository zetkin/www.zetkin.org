import { Box } from '@mui/system';
import { marked } from 'marked';
import santitizeHtml from 'sanitize-html';

const TextBlock = ({ ...rest }) => {
  const { content } = rest;
  const dirtyHTML = marked.parse(content);
  const cleanHTML = santitizeHtml(dirtyHTML);

  return (
    <Box sx={{ width: { lg: '50%' }, marginBottom: '4rem' }}>
      <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
    </Box>
  );
};

export default TextBlock;
