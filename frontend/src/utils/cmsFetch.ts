const CMS_HOST = process.env.CMS_HOST || "localhost:1337";

export default async function cmsFetch(apiPath: string) {
  const url = `http://${CMS_HOST}/api${apiPath}`;
  return fetch(url);
}
