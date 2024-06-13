import { Link, Outlet } from '@tanstack/react-router';
import { RequireAuth } from './core/auth/RequireAuth';
import { useCustomContext } from './app/hooks/useCustomContext';

export function Layout() {
  const { logout } = useCustomContext().authorization;
  return (
    <main>
      <RequireAuth>
        <aside>
          <nav className="flex items-center justify-between p-2">
            <div className="flex gap-2">
              <Link to="/" className="[&.active]:font-bold">
                Home
              </Link>
              <Link to="/about" className="[&.active]:font-bold">
                About
              </Link>
              <Link to="/users" className="[&.active]:font-bold">
                Users
              </Link>
            </div>
            <div>
              <button onClick={() => logout()}>Log Out</button>
            </div>
          </nav>
          <hr />
        </aside>
      </RequireAuth>
      <section>
        <Outlet />
      </section>
    </main>
  );
}
