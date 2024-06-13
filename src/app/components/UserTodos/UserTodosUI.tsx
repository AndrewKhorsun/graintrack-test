import { Todo } from '../../../types/services';

interface Props {
  todo: Todo;
}

export const UserTodosUI = ({ todo }: Props) => {
  const { title, completed } = todo;

  const isDoneBgColor = completed
    ? 'bg-gradient-to-r from-green-400 via-green-500 to-green-600'
    : 'bg-gradient-to-r from-red-400 via-red-500 to-red-600';
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div
        className={`${isDoneBgColor} rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg font-medium text-white`}
      >
        <div>
          <div className="flex mb-4 items-center">
            <p className="w-full text-grey-darkest">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
