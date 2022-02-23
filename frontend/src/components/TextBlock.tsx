import { marked } from 'marked';
import santitizeHtml from 'sanitize-html';

const TextBlock = ({ ...rest }) => {
  const { content } = rest;
  const dirtyHTML = marked.parse(content);
  const cleanHTML = santitizeHtml(dirtyHTML);

  return <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />;
};

export default TextBlock;
