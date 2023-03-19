import { useMemo } from 'react';
import { setLocation } from './../contexts/Router/reducer';
import { useRouterContext } from './useRouterContext';
import { PathTypes, UrlWithParams } from './../utils/helpers/navigation.helper';
import Navigation from '../utils/helpers/navigation.helper';

export type UseRouter = () => {
  push: (options: PathTypes) => void;
  replace: (options: string | UrlWithParams) => void;
  go: (pageNum: number) => void;
  back: () => void;
};

const useRouter: UseRouter = () => {
  const { dispatch } = useRouterContext();

  const dispatchMiddleware = (path: URL) => {
    return dispatch(setLocation(path));
  };

  const navigation = useMemo(() => {
    return new Navigation({ middleware: dispatchMiddleware });
  }, []);

  return {
    push: navigation.push,
    replace: navigation.replace,
    go: navigation.goTo,
    back: navigation.back,
  };
};

export default useRouter;
