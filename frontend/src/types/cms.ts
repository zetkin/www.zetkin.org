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
