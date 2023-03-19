import { generateUrlWithParams, generateURL } from './url.helper';

export type UrlWithParams = {
  path: string;
  query?: { [k: string]: any };
  replace?: boolean;
};

export type PathTypes = string | number | UrlWithParams;

export type Middleware = (path: URL) => void;

export interface NavigationParams {
  middleware?: Middleware;
}

class Navigation {
  middleware: Middleware | undefined;

  constructor({ middleware }: NavigationParams) {
    if (middleware) this.middleware = middleware;
  }

  push = (path: PathTypes) => {
    switch (typeof path) {
      case 'string':
        return this.setPath(generateURL(path));

      case 'object':
        return this.setPath(generateUrlWithParams(path));

      case 'number':
        return this.goTo(path);

      default:
        return null;
    }
  };

  replace = (path: UrlWithParams | string) => {
    const options = typeof path === 'object' ? path : { path: path };
    const url = generateUrlWithParams(options);
    if (this.middleware) this.middleware(url);

    return window.history.replaceState(null, '', url.href);
  };

  setPath = (url: URL) => {
    if (this.middleware) this.middleware(url);
    return window.history.pushState(null, '', url);
  };

  back = () => {
    return window.history.back();
  };
  goTo = (page: number) => {
    return window.history.go(page);
  };
}

export default Navigation;
