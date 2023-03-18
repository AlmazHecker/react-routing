import Navigation from '../utils/helpers/navigation.helper';

export type SearchParam = {
  [index: string]: any;
};

export type UseSearchParams = () => [
  params: URLSearchParams,
  setParams: (params: SearchParam) => void
];

const useSearchParams: UseSearchParams = () => {
  const params = new URLSearchParams(window.location.search.slice(1));

  const setParams = (params: SearchParam) => {
    const url = Navigation.generateUrlWithParams({ path: '', query: params });
    Navigation.setPath(url.href);
  };

  return [params, setParams];
};

export default useSearchParams;
