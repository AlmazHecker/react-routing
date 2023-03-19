import { generateUrlWithParams } from './../utils/helpers/url.helper';
import Navigation from '../utils/helpers/navigation.helper';

export type SearchParam = {
  [index: string]: any;
};

export type UseSearchParams = () => [
  params: URLSearchParams,
  setParams: (params: SearchParam) => void
];

const useSearchParams: UseSearchParams = () => {
  const navigation = new Navigation({});

  const params = new URLSearchParams(window.location.search.slice(1));

  const setParams = (params: SearchParam) => {
    const url = generateUrlWithParams({ path: '', query: params });
    navigation.setPath(url.href);
  };

  return [params, setParams];
};

export default useSearchParams;
