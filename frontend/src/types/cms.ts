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
