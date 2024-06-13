import { User } from '../../app/services/ApiService';

interface Props {
  user: User;
}

export function UserItem(props: Props) {
  const { user } = props;
  return (
    <div>
      <div>USER: {user.name}</div>
    </div>
  );
}
