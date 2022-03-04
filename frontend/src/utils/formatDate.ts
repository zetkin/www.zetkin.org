function padStart(num: string) {
  if (num.padStart) {
    return num.padStart(2, '0');
  } else if (num.length < 2) {
    return '0' + num;
  }
  return num;
}

export default function formatDate(date: string) {
  const d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  return [year, padStart(month), padStart(day)].join('/');
}
