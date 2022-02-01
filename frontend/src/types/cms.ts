interface CmsDoc<Attributes> {
  id: number;
  attributes: Attributes;
}

export type Block = {
  id: number,
  __component: string,
};

export type Page = CmsDoc<{
  title: string;
  content: string;
  blocks: Block[];
}>;
