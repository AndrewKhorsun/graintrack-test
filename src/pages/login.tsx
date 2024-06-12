import { useAuth0 } from '@auth0/auth0-react';

export function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="p-2 w-full h-[100vh] flex justify-center items-center gap-2">
      <span className='text-2xl'>Please </span>
      <span onClick={() => loginWithRedirect()} className='font-bold cursor-pointer hover:text-cyan-600 text-2xl'>log in</span>
    </div>
  );
}
