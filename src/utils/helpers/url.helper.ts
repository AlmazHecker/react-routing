import { UrlWithParams } from './navigation.helper';

export type GenerateUrlWithParams = (url: UrlWithParams) => URL;
export type GenerateURLObject = (url: string) => URL;

export const generateUrlWithParams: GenerateUrlWithParams = (url) => {
  const newUrl = generateURL(url.path);

  if (url.query) {
    for (const item in url.query) {
      newUrl.searchParams.append(item, url.query[item]);
    }
  }
  return newUrl;
};

export const generateURL: GenerateURLObject = (url) => {
  let newUrl = new URL(window.location.href);

  if (url[0] === '/') {
    newUrl.href = `${window.location.origin}${url}`;
  } else {
    newUrl.href = `${newUrl.href}/${url}`;
  }

  newUrl.search = '';

  return newUrl;
};
