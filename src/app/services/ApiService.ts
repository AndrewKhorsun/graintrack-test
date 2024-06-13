import { Observable, forkJoin, map } from 'rxjs';
import { Todo, User } from '../../types/services';

export const getUsers = (): Observable<User[]> => {
  return new Observable<User[]>(subscriber => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        subscriber.next(data);
        subscriber.complete();
      })
      .catch(error => subscriber.error(error)); 
  });
};

export const getTodos = (): Observable<Todo[]> => {
  return new Observable<Todo[]>(subscriber => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        subscriber.next(data);
        subscriber.complete();
      })
      .catch(error => subscriber.error(error));
  });
};

export const getUsersAndTodos = (): Observable<User[]> => {
  const users$ = getUsers();
  const todos$ = getTodos();

  return forkJoin([users$, todos$]).pipe(
    map(([users, todos]) => {
      const usersWithTodos = users.map(user => ({
        ...user,
        todos: todos.filter(todo => todo.userId === user.id),
      }));
      return usersWithTodos;
    }),
  );
};
