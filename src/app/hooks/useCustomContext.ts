import { useContext } from 'react';
import { ContextType, Context } from '../../core/context/AuthContext';

export const useCustomContext = (): ContextType => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('useCustomContext must be used inside the AuthProvider');
  }
  return context;
};
