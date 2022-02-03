import QuoteHero from "./QuoteHero";
import { Block } from "../types/cms";

const getBlockComponent = ({ __component, ...rest }: { __component: string }, index: number) => {
  switch (__component) {
    case 'block.quote':
      return <QuoteHero key={`${__component}-${index}`} {...rest}/>;
  }
};

const BlockManager = ({ blocks }: { blocks: Block[] }) => {
  return <div>{blocks.map((block, index) => getBlockComponent(block, index))}</div>
};

BlockManager.defaultProps = {
  blocks: [],
};

export default BlockManager;
