import QuoteHero from "./QuoteHero";
import { Block } from "../types/cms";

const getBlockComponent = ({ __component, ...rest }: { __component: string }) => {
  switch (__component) {
    case 'block.quote':
      return <QuoteHero {...rest}/>;
  }
};

const BlockManager = ({ blocks }: { blocks: Block[] }) => {
  return <div>{blocks.map(block => getBlockComponent(block))}</div>
};

BlockManager.defaultProps = {
  blocks: [],
};

export default BlockManager;
