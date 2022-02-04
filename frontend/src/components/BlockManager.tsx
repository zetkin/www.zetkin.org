import QuoteHero from "./QuoteHero";
import { CmsBlock } from "../types/cms";
import BlurbTriplet from "./BlurbTriplet";

const getBlockComponent = ({ __component, ...rest }: { __component: string }, index: number) => {
  switch (__component) {
    case 'block.quote':
      return <QuoteHero key={`${__component}-${index}`} {...rest} />;
    case 'block.blurb-triplet':
      return <BlurbTriplet key={`${__component}-${index}`} {...rest}/>
  }
};

const BlockManager = ({ blocks }: { blocks: CmsBlock[] }) => {
  return <div>{blocks.map((block, index) => getBlockComponent(block, index))}</div>
};

BlockManager.defaultProps = {
  blocks: [],
};

export default BlockManager;
