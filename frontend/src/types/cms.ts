interface CmsDoc<Attributes> {
  id: number;
  attributes: Attributes;
}

export type CmsBlock = {
  id: number,
  __component: string,
};

export type CmsPage = CmsDoc<{
  title: string;
  content: string;
  blocks: CmsBlock[];
}>;

export type CmsLink = {
  id: number,
  label: string,
  externalUrl?: string,
  page?: CmsInternalPage,
}

interface CmsInternalPage {
  data: {
    id: number,
  }
}

export type CmsBlurb = {
  id: number,
  title: string,
  intro: string,
  icon: string,
  links: CmsLink[],
}

export type CmsTimelineNode = {
  id: number,
  title: string,
  content?: string,
  image?: CmsImage,
}

interface CmsImage {
  data: CmsImageData,
}

interface CmsImageData {
  id: number,
  attributes: CmsImageDataAttributes,
}

interface CmsImageDataAttributes {
  alternativeText: string,
  url: string,
}

export type CmsMainMenuTab = CmsDoc<{
  tabName: string,
  section1?: CmsMainMenuItem[],
  section2?: CmsMainMenuItem[],
  section3?: CmsMainMenuItem[],
}>;

export type CmsMainMenuItem = {
  id: number,
  __component: string,
  title: string,
  cta: CmsMainMenuCta,
  description?: string,
  image?: CmsImage,
  links: CmsLink[],
};

export type CmsMainMenuCta = {
  id: number,
  label?: string,
  externalUrl?: string,
  page?: CmsInternalPage,
};
