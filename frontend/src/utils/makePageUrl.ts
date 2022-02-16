const CMS_HOST = process.env.CMS_HOST || 'localhost:1337';

export default function makePageUrl(pageId: number) {
  return `http://${CMS_HOST}/${pageId}`;
}
