import { Navigate } from '@tanstack/react-router';
import { ReactNode } from 'react';
import { useCustomContext } from '../../app/hooks/useCustomContext';

interface Props {
  children: ReactNode;
}

export const RequireAuth = ({ children }: Props) => {
  const { loggedIn } = useCustomContext().authorization;

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};
