import { Link } from '@tanstack/react-router';


export function Todo() {
  return (
    <div className="p-2">
      <h3>Welcome Todo!</h3>
      <Link to="/todo/$todoId" params={{ todoId: '1' }}>
        TODO 1
      </Link>
    </div>
  );
}
