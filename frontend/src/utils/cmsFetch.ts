export default async function cmsFetch(apiPath: string) {
  const url = `http://cms:1337/api${apiPath}`;
  return fetch(url);
}
