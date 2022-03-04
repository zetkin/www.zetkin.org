import Blurb from '../components/Blurb';
import ContactCard from './ContactCard';
import FaqAccordion from './FaqAccordion';
import ImageBlock from './ImageBlock';
import LargeList from '../components/LargeList';
import LogoWall from './LogoWall';
import PostFeed from './PostFeed';
import QuoteHero from './QuoteHero';
import SuperHero from '../components/SuperHero';
import TextBlock from './TextBlock';
import Timeline from './Timeline';
import BlurbGroup from '../components/BlurbGroup';
import Feature from '../components/Feature';

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
    case 'blocks.blurb':
      return <Blurb {...block} />;
    case 'blocks.large-list':
      return <LargeList {...block} />;
    case 'blocks.super-hero':
      return <SuperHero {...block} />;
    case 'blocks.blurb-group':
      return <BlurbGroup {...block} />;
    case 'blocks.feature':
      return <Feature {...block} />;
    default:
      return <></>;
  }
};

export default BlockComponent;
