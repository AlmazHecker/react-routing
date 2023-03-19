import React, { FC, useMemo } from 'react';
import { useRouterContext } from '../../hooks/useRouterContext';

export type Route = {
  path: string;
  component: React.ReactNode;
};

export interface RoutesProps {
  routes: Route[];
}

type ObjectRoutes = {
  [key: string]: React.ReactNode;
};

const Routes: FC<RoutesProps> = ({ routes }) => {
  const { state } = useRouterContext();

  const renderComponent = useMemo(() => {
    const objectRoutes: ObjectRoutes = {};

    for (const i of routes) {
      objectRoutes[i.path] = i.component;
    }

    return objectRoutes?.[state.location.pathname] || null;
  }, [state.location]);
  return <>{renderComponent}</>;
};

export default Routes;
