import { describe, expect, test } from 'vitest';
import { firstValueFrom } from 'rxjs';
import { getUsers, getTodos, getUsersAndTodos } from '../ApiService';
import { Todo } from '../../../types/services';

describe('Service functions', () => {
  test('getUsers returns an array of users', async () => {
    const users = await firstValueFrom(getUsers());
    expect(users).toBeDefined();
    expect(Array.isArray(users)).toBe(true);
  });

  test('getTodos returns an array of todos', async () => {
    const todos = await firstValueFrom(getTodos());
    expect(todos).toBeDefined();
    expect(Array.isArray(todos)).toBe(true);
  });

  test('getUsersAndTodos returns users with corresponding todos', async () => {
    const users = await firstValueFrom(getUsersAndTodos());
    expect(users).toBeDefined();
    expect(Array.isArray(users)).toBe(true);

    users.forEach(user => {
      expect(user.todos).toBeDefined();
      expect(Array.isArray(user.todos)).toBe(true);

      user.todos?.forEach((todo: Todo) => {
        expect(todo.userId).toBe(user.id);
      });
    });
  });
});
