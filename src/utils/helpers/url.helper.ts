import { UrlWithParams, Object } from './navigation.helper';

export type GenerateUrlWithParams = (url: UrlWithParams) => URL;
export type GenerateURLObject = (url: string) => URL;

export const generateUrlWithParams: GenerateUrlWithParams = (url) => {
  const newUrl = generateURL(url.path);
  const params = new URLSearchParams();

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

export const getQueryParams = (url: URL) => {
  const queries: Object = {};
  const params = new URLSearchParams(url.search);

  params.forEach((value, key) => (queries[key] = value));
  return queries;
};
