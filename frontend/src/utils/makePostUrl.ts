const CMS_HOST = process.env.CMS_HOST || 'localhost:3000';

export default function makePostUrl(slug: string) {
  return `http://${CMS_HOST}/posts/${slug}`;
}
