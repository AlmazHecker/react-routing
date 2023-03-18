import { NavigationOptions } from './../utils/helpers/navigation.helper';
import Navigation from '../utils/helpers/navigation.helper';

export interface IUseRouter {
  push: (options: NavigationOptions) => void;
  replace: (options: NavigationOptions) => void;
  go: (pageNum: number) => void;
  back: () => void;
}

const useRouter = (): IUseRouter => {
  return {
    push: Navigation.push,
    replace: Navigation.replace,
    go: Navigation.goTo,
    back: Navigation.back,
  };
};

export default useRouter;
