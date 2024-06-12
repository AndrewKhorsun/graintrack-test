// UserList.tsx
import { useEffect, useState } from 'react';
import { User, getUsersAndTodos } from '../services/ApiService';

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  console.log('users', users);
  useEffect(() => {
    getUsersAndTodos().subscribe(data => {
      setUsers(data);
    });
  }, []);

  return (
    <div>
      <h2>Список користувачів</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
