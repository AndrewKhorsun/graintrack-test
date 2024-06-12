import { createRootRoute } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { AppRouter } from '../app/components/AppRouter';

export const Route = createRootRoute({
  component: AppRouter,
});
