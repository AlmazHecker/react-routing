import { useRouterContext } from './useRouterContext';
import { useMemo } from 'react';
import { SearchParam } from './useSearchParams';

const useParams = (path: string): SearchParam => {
  const { state } = useRouterContext();

  const values = useMemo(() => {
    const params: SearchParam = {};
    const parts = path.split('/');

    for (let i = 0; i < parts.length; i++) {
      if (parts[i].startsWith(':')) {
        const paramName = parts[i].substring(1);
        params[paramName] = parts[i + 1];
      }
    }
    return params;
  }, [state.location]);

  return values;
};

export default useParams;
