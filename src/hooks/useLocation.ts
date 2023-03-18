import Navigation from '../utils/helpers/navigation.helper';

export type UseLocation = () => {
  location: Location;
  //   query: { [key: string]: string };
};

const useLocation: UseLocation = () => {
  return {
    location: Navigation.getPath(),
    // query:
  };
};

export default useLocation;
