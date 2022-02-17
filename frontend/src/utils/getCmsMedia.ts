const CMS_HOST = process.env.CMS_HOST || 'localhost:1337';

export default function getCmsMedia(mediaPath: string) {
  return `http://${CMS_HOST}${mediaPath}`;
}
