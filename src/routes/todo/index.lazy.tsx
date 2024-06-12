import { createLazyFileRoute } from '@tanstack/react-router';
import { Todo } from '../../app/components/todo/todo';

export const Route = createLazyFileRoute('/todo/')({
  component: Todo,
});

