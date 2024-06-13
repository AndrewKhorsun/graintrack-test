import { createFileRoute } from '@tanstack/react-router';
import { UserTodos } from '../../app/components/UserTodos/UserTodos';

export const Route = createFileRoute('/users/$userId')({
  component: UserIdHandler,
});

function UserIdHandler() {
  const { userId } = Route.useParams();

  return <UserTodos userId={userId} />;
}
