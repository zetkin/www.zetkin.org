interface CmsDoc<Attributes> {
  id: number;
  attributes: Attributes;
  data: {
    id: number;
  };
}

export type CmsPage = CmsDoc<{
  title: string;
  image: CmsImage;
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
  formats: CmsImageFormats;
  height: number;
  width: number;
}>;

export type CmsAccordionItem = {
  id: number;
  title: string;
  content: string;
};

export type CmsLogo = {
  id: number;
  externalUrl?: string;
  image: CmsImage;
  page?: CmsPage;
};

interface CmsImageFormats {
  thumbnail: CmsImageThumbnail;
}

interface CmsImageThumbnail {
  url: string;
}

export type CmsPost = {
  title: string;
  author: string;
  publishedAt: string;
  blocks: CmsBlock[];
};
