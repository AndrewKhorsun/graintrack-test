import { createLazyFileRoute } from '@tanstack/react-router';
import { Login } from '../app/components/login';

export const Route = createLazyFileRoute('/login')({
  component: Login,
});


