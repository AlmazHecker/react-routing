import { generateUrlWithParams } from './../utils/helpers/url.helper';
import Navigation from '../utils/helpers/navigation.helper';
import { useRouterContext } from './useRouterContext';
import { useMemo } from 'react';

export type SearchParam = {
  [index: string]: any;
};

export type UseSearchParams = () => [
  params: URLSearchParams,
  setParams: (params: SearchParam) => void
];

const navigation = new Navigation({});

const useSearchParams: UseSearchParams = () => {
  const { location } = useRouterContext();

  const params = useMemo(() => {
    return new URLSearchParams(location.search.slice(1));
  }, [location]);

  const setParams = (params: SearchParam) => {
    return navigation.push({ path: '', query: params });
  };

  return [params, setParams];
};

export default useSearchParams;
