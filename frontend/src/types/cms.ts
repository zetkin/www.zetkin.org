interface CmsDoc<Attributes> {
  id: number;
  attributes: Attributes;
  data: {
    id: number;
  };
}

export type CmsPage = CmsDoc<{
  title: string;
  blocks: CmsBlock[];
}>;

export type CmsLink = {
  id: number;
  label: string;
  externalUrl?: string;
  page?: CmsPage;
};

interface CmsBlock {
  id: number;
  __component: string;
}

export type CmsTimelineNode = {
  id: number;
  title: string;
  content?: string;
  image?: CmsImage;
};

interface CmsImage {
  data: CmsImageData;
}

type CmsImageData = CmsDoc<{
  alternativeText: string;
  url: string;
}>;

export type CmsAccordionItem = {
  id: number;
  title: string;
  content: string;
};
