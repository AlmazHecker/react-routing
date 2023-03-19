import { setLocation } from './../contexts/Router/reducer';
import { useRouterContext } from './useRouterContext';
import Navigation from '../utils/helpers/navigation.helper';

export type UseLocation = () => {
  location: Location;
  //   query: { [key: string]: string };
};

const useLocation: UseLocation = () => {
  const { dispatch } = useRouterContext();

  const dispatchMiddleware = (path: string) => {
    return dispatch(setLocation(path));
  };

  const navigation = new Navigation({ middleware: dispatchMiddleware });
  return {
    location: navigation.getPath(),
    // query:
  };
};

export default useLocation;
