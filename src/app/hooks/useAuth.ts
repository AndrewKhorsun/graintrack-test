import { useContext } from 'react';
import { AuthContextType, AuthContext } from '../../core/context/AuthContext';

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used inside the AuthProvider');
  }
  return context;
};
