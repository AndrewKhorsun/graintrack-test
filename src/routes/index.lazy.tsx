import { createLazyFileRoute } from '@tanstack/react-router';
import { Home } from '../app/components/home';

export const Route = createLazyFileRoute('/')({
  component: Home,
});

