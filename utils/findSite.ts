export const findSite = (str: string) => {
  // let regexp = /[A-Z]/;
  // let key = str.search(regexp)
  const indexAmazon = str.indexOf("amazon.com");
  if (indexAmazon > -1) {
    return 'amazon';
  }
  const indexWalmart = str.indexOf("walmart.com");
  if(indexWalmart > -1) {
    return 'walmart';
  }
  const indexAliexpress = str.indexOf("aliexpress.com");
  if(indexAliexpress > -1) {
    return 'aliexpress';
  }
  const indexBestBuy = str.indexOf("bestbuy.com");
  if(indexBestBuy > -1) {
    return 'bestbuy';
  }
}
