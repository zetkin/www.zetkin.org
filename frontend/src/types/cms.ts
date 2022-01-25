interface CmsDoc<Attributes> {
  id: number;
  attributes: Attributes;
}

export type Page = CmsDoc<{
  title: string;
  content: string;
}>;
