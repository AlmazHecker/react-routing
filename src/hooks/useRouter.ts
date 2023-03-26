import { useCallback } from 'react';
import { setLocation } from './../contexts/Router/reducer';
import { useRouterContext } from './useRouterContext';
import {
  back,
  go,
  PathTypes,
  push,
  replace,
  UrlWithParams,
} from './../utils/helpers/navigation.helper';

export type UseRouter = () => {
  push: (options: PathTypes) => void;
  replace: (options: string | UrlWithParams) => void;
  go: (pageNum: number) => void;
  back: () => void;
};

const useRouter: UseRouter = () => {
  const { dispatch } = useRouterContext();

  const handlePush = useCallback((url: PathTypes) => {
    const newUrl = push(url);
    if (newUrl) return dispatch(setLocation(newUrl as URL));
  }, []);

  const handleReplace = useCallback((url: UrlWithParams | string) => {
    const newUrl: URL = replace(url);
    return dispatch(setLocation(newUrl));
  }, []);

  return { push: handlePush, replace: handleReplace, go, back };
};

export default useRouter;
