import ContactCard from './ContactCard';
import FaqAccordion from './FaqAccordion';
import ImageBlock from './ImageBlock';
import LogoWall from './LogoWall';
import PostFeed from './PostFeed';
import QuoteHero from './QuoteHero';
import TextBlock from './TextBlock';
import Timeline from './Timeline';

const BlockComponent = ({ __component, ...block }: { __component: string }) => {
  switch (__component) {
    case 'blocks.text-block':
      return <TextBlock {...block} />;
    case 'blocks.quote':
      return <QuoteHero {...block} />;
    case 'blocks.timeline':
      return <Timeline {...block} />;
    case 'blocks.faq-accordion':
      return <FaqAccordion {...block} />;
    case 'blocks.logo-wall':
      return <LogoWall {...block} />;
    case 'blocks.contact-card':
      return <ContactCard {...block} />;
    case 'blocks.image-block':
      return <ImageBlock {...block} />;
    case 'blocks.post-feed':
      return <PostFeed {...block} />;
    default:
      return <></>;
  }
};

export default BlockComponent;
