import { Object } from './../utils/helpers/navigation.helper';
import { getQueryParams } from './../utils/helpers/url.helper';
import { useMemo } from 'react';
import { useRouterContext } from './useRouterContext';

export type UseLocation = () => {
  location: URL;
  query: Object;
};

const useLocation: UseLocation = () => {
  const { state } = useRouterContext();

  const values = useMemo(() => {
    return { location: state.location, query: getQueryParams(state.location) };
  }, [state.location]);

  return values;
};

export default useLocation;
