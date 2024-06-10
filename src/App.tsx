
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  console.log('isAuthenticated', isAuthenticated);

  return (
    <>
      <button onClick={() => loginWithRedirect()}>Log In</button>;
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    </>
  );
};

export default LoginButton;
