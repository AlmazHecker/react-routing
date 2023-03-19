import { UrlWithParams } from './navigation.helper';

export type GenerateUrlWithParams = (url: UrlWithParams) => URL;

export const generateUrlWithParams: GenerateUrlWithParams = (url) => {
  let newUrl;

  if (url.path.length !== 0) {
    if (url.path[0] === '/') {
      newUrl = new URL(`${window.location.origin}${url.path}`);
    } else {
      newUrl = new URL(window.location.href);
    }
  } else {
    newUrl = new URL(`${window.location.href}/${url.path}`);
  }

  newUrl.search = '';

  if (url.query) {
    for (const item in url.query) {
      newUrl.searchParams.append(item, url.query[item]);
    }
  }
  return newUrl;
};
