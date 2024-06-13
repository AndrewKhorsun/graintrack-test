import { createLazyFileRoute } from '@tanstack/react-router';
import { Users } from '../../pages/Users/Users';

export const Route = createLazyFileRoute('/users/')({
  component: Users,
});
