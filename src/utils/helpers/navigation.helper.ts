import { generateUrlWithParams } from './url.helper';
export type UrlWithParams = {
  path: string;
  query?: { [k: string]: any };
  replace?: boolean;
};

export type NavigationOptions = string | number | UrlWithParams;

export type Push = (path: NavigationOptions) => void;

export type Middleware = (path: string) => void | null;

export interface NavigationParams {
  middleware?: Middleware;
}

class Navigation {
  middleware: Middleware | undefined;

  constructor({ middleware }: NavigationParams) {
    if (middleware) {
      this.middleware = middleware;
    }
  }

  push: Push = (path) => {
    if (typeof path === 'string') {
      return this.setPath(path);
    }

    if (typeof path === 'object') {
      const url = generateUrlWithParams(path);
      return this.setPath(url.href);
    }

    if (typeof path === 'number') {
      return this.goTo(path);
    }
  };

  replace = (path: NavigationOptions) => {
    if (typeof path === 'string') {
      if (this.middleware) this.middleware(path);

      return window.history.replaceState(null, '', path);
    }
    if (typeof path === 'object') {
      const { href } = generateUrlWithParams(path);
      if (this.middleware) this.middleware(path.path);

      return window.history.replaceState(null, '', href);
    }
  };

  back = () => {
    return window.history.back();
  };
  goTo = (page: number) => {
    return window.history.go(page);
  };

  setPath = (path: string) => {
    if (this.middleware) this.middleware(path);
    return window.history.pushState(null, '', path);
  };

  getPath = () => {
    return window.location;
  };
}

export default Navigation;
