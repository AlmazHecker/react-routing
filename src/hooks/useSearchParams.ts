import { useRouterContext } from './useRouterContext';
import { useMemo } from 'react';
import { push } from '../utils/helpers/navigation.helper';

export type SearchParam = {
  [index: string]: any;
};

export type UseSearchParams = () => [
  params: URLSearchParams,
  setParams: (params: SearchParam) => void
];

const useSearchParams: UseSearchParams = () => {
  const { state } = useRouterContext();

  const params = useMemo(() => {
    return new URLSearchParams(state.location.search.slice(1));
  }, [location]);

  const setParams = (params: SearchParam) => {
    return push({ path: '', query: params });
  };

  return [params, setParams];
};

export default useSearchParams;
