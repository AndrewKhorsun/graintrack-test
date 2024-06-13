import { Link } from '@tanstack/react-router';
import { useCustomContext } from '../../hooks/useCustomContext';
import { UserTodosUI } from './UserTodosUI';

interface Props {
  userId: string;
}

export const UserTodos = ({ userId }: Props) => {
  const { usersData, getUsersData } = useCustomContext().users;

  if (!usersData) {
    getUsersData();
  }

  const currentUserTodos = {
    ...usersData?.filter(user => user.id === +userId)[0],
  };

  console.log('currentUserTodos', currentUserTodos);

  return (
    <div className="p-5">
      <Link
        to="/users"
        className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Back
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
        {currentUserTodos.todos?.map(todo => <UserTodosUI todo={todo} />)}
      </div>
    </div>
  );
};
