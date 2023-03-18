import { FC } from 'react';

export type Route = {
  path: string;
  component: React.ReactNode;
};

export type ChildrenOnly = FC<{ children: React.ReactNode }>;
