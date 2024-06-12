import { Link, Outlet } from '@tanstack/react-router';
import { RequireAuth } from '../../core/auth/RequireAuth';
import { useAuth0 } from '@auth0/auth0-react';

export function AppRouter() {
  const { logout } = useAuth0();
  return (
    <>
      <RequireAuth>
        <nav className="flex items-center justify-between p-2">
          <div className="flex gap-2">
            <Link to="/" className="[&.active]:font-bold">
              Home
            </Link>
            <Link to="/about" className="[&.active]:font-bold">
              About
            </Link>
            <Link to="/todo" className="[&.active]:font-bold">
              Todo
            </Link>
          </div>
          <div>
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </div>
        </nav>
        <hr />
      </RequireAuth>
      <Outlet />
    </>
  );
}
