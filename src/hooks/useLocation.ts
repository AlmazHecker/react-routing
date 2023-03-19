import { setLocation } from './../contexts/Router/reducer';
import { useRouterContext } from './useRouterContext';

export type UseLocation = () => {
  location: URL;
};

const useLocation: UseLocation = () => {
  const { dispatch, location } = useRouterContext();

  const dispatchMiddleware = (path: URL) => {
    return dispatch(setLocation(path));
  };

  return {
    location,
    // query:
  };
};

export default useLocation;
