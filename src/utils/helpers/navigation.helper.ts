import { generateUrlWithParams, generateURL } from './url.helper';

export type Object = {
  [index: string]: any;
};

export type UrlWithParams = {
  path: string;
  query?: Object;
  replace?: boolean;
};

export type PathTypes = string | number | UrlWithParams;

export const push = (path: PathTypes) => {
  switch (typeof path) {
    case 'string':
      return setPath(generateURL(path));

    case 'object':
      return setPath(generateUrlWithParams(path));

    case 'number':
      return go(path);

    default:
      return null;
  }
};

export const setPath = (url: URL) => {
  window.history.pushState(null, '', url);
  return url;
};

export const go = (page: number) => {
  return window.history.go(page);
};

export const back = () => {
  return window.history.back();
};

export const replace = (path: UrlWithParams | string) => {
  const options = typeof path === 'object' ? path : { path: path };
  const url = generateUrlWithParams(options);

  window.history.replaceState(null, '', url.href);
  return url;
};
