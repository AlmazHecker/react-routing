import React, { FC } from 'react';
import { useRouterContext } from '../../hooks/useRouterContext';
import { Route } from '../../shared/types';

export interface RoutesProps {
  routes: Route[];
}

type ObjectRoutes = {
  [key: string]: React.ReactNode;
};

const Routes: FC<RoutesProps> = ({ routes }) => {
  const { location } = useRouterContext();

  const renderComponent = () => {
    const objectRoutes: ObjectRoutes = routes.reduce((acc, el) => {
      return { ...acc, [el.path]: el.component };
    }, {});

    console.log(objectRoutes, location, 'BIBLEOTEKA!');

    return objectRoutes?.[location.pathname] || '';
  };
  return <>{renderComponent()}</>;
};

export default Routes;
