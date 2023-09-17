'use client'

import Logout from './components/LogOut';
import { UserContextProvider } from './contexts/userContext';

export default function Home() {
  return (
    <>
      <UserContextProvider>
        <div>
          You are inside logged in routes
          <Logout />
        </div>
      </UserContextProvider>
    </>
  );
}
