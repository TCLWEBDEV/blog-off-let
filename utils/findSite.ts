export const findSite = (str: string) => {
  // let regexp = /[A-Z]/;
  // let key = str.search(regexp)
  const link = str.split('/', 3)
  console.log('link', link[2]);
  const linkless = link[2]?.split('www.');
  console.log('link final', linkless);
  if (linkless?.[1]) {
    return linkless?.[1]
  }
  return linkless?.[0]
}
