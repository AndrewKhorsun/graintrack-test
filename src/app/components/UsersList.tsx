import { useEffect } from 'react';
import { useCustomContext } from '../hooks/useCustomContext';
import { UserCard } from './UserCard';

const UserList = () => {
  const { usersData, getUsersData } = useCustomContext().users;
  console.log('users', usersData);

  useEffect(() => {
    if (!usersData) {
      getUsersData();
    }
  }, [getUsersData, usersData]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {usersData?.map(user => <UserCard user={user} />)}
    </div>
  );
};

export default UserList;
