export default async function cmsFetch(apiPath: string) {
  const url = `http://localhost:1337/api${apiPath}`;
  return fetch(url);
}
