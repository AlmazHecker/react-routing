export type UrlWithParams = {
  path: string;
  query?: { [k: string]: any };
  replace?: boolean;
};

export type NavigationOptions = string | number | UrlWithParams;

export type Push = (path: NavigationOptions) => void;

class Navigation {
  static push: Push = (path) => {
    if (typeof path === 'string') {
      return this.setPath(path);
    }

    if (typeof path === 'object') {
      const url = this.generateUrlWithParams(path);
      return this.setPath(url.href);
    }

    if (typeof path === 'number') {
      return this.goTo(path);
    }
  };

  static replace = (path: NavigationOptions) => {
    if (typeof path === 'string') {
      return window.history.replaceState(null, '', path);
    }
    if (typeof path === 'object') {
      const url = this.generateUrlWithParams(path);
      return window.history.replaceState(null, '', url);
    }
  };

  static back = () => {
    return window.history.back();
  };
  static goTo = (page: number) => {
    return window.history.go(page);
  };

  static setPath = (path: string) => {
    return window.history.pushState(null, '', path);
  };

  public static getPath = () => {
    return window.location;
  };

  static generateUrlWithParams = (url: UrlWithParams) => {
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
}

export default Navigation;
