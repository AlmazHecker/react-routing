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
      return window.location.replace(path);
    }
    if (typeof path === 'object') {
      const url = this.generateUrlWithParams(path);
      return window.location.replace(url);
    }
  };

  static back = () => {
    return window.history.back();
  };
  static goTo = (page: number) => {
    return window.history.go(page);
  };

  private static setPath = (path: string) => {
    window.location.href = path;
  };

  private static generateUrlWithParams = (url: UrlWithParams) => {
    const newUrl = new URL(url.path);

    if (url.query) {
      for (const item in url.query) {
        newUrl.searchParams.append(item, url.query[item]);
      }
    }

    return newUrl;
  };
}

export default Navigation;
