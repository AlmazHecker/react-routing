import { NavigationOptions } from './../utils/helpers/navigation.helper';
import Navigation from '../utils/helpers/navigation.helper';

export type UseRouter = () => {
  push: (options: NavigationOptions) => void;
  replace: (options: NavigationOptions) => void;
  go: (pageNum: number) => void;
  back: () => void;
};

const useRouter: UseRouter = () => {
  return {
    push: Navigation.push,
    replace: Navigation.replace,
    go: Navigation.goTo,
    back: Navigation.back,
  };
};

export default useRouter;
