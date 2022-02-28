const CMS_HOST = process.env.CMS_HOST || 'localhost:3000';

export default function makePostUrl(postId: number) {
  return `http://${CMS_HOST}/posts/${postId}`;
}
