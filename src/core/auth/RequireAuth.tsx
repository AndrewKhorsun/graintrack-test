import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from '@tanstack/react-router';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const RequireAuth = ({ children }: Props) => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  console.log('isLoading', isLoading);
  console.log('isAuthenticated', isAuthenticated);
  console.log('user', user);

  if (isLoading) {
    return (
      <div className="w-full h-[100vh] bg-blue-600/[.06] flex justify-center items-center">
        <div className='text-2xl font-bold'>Loading...</div>{' '}
      </div>
    );
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};
