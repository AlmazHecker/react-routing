import { setLocation } from './../contexts/Router/reducer';
import { useRouterContext } from './useRouterContext';
import { NavigationOptions } from './../utils/helpers/navigation.helper';
import Navigation from '../utils/helpers/navigation.helper';

export type UseRouter = () => {
  push: (options: NavigationOptions) => void;
  replace: (options: NavigationOptions) => void;
  go: (pageNum: number) => void;
  back: () => void;
};

const useRouter: UseRouter = () => {
  const { dispatch } = useRouterContext();

  const dispatchMiddleware = (path: string) => {
    return dispatch(setLocation(path));
  };

  const navigation = new Navigation({ middleware: dispatchMiddleware });

  return {
    push: navigation.push,
    replace: navigation.replace,
    go: navigation.goTo,
    back: navigation.back,
  };
};

export default useRouter;
