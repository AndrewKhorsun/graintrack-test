import { Navigate } from '@tanstack/react-router';
import { ReactNode } from 'react';
import { useAuth } from '../../app/hooks/useAuth';

interface Props {
  children: ReactNode;
}

export const RequireAuth = ({ children }: Props) => {
  const { loggedIn } = useAuth();

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};
