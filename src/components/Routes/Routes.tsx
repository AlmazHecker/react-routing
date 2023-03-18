import React, { FC } from 'react';
import { Route } from '../../shared/types';

export interface RoutesProps {
  routes: Route[];
}

type ObjectRoutes = {
  [key: string]: React.ReactNode;
};

const Routes: FC<RoutesProps> = ({ routes }) => {
  const renderComponent = () => {
    const objectRoutes: ObjectRoutes = routes.reduce((acc, el) => {
      return { ...acc, [el.path]: el.component };
    }, {});

    return objectRoutes?.[window.location.pathname] || '';
  };
  return <>{renderComponent()}</>;
};

export default Routes;
