'use client'

import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      // If token exists, set the user as authenticated
      setUser({
        isAuthenticated: true,
        token
      });
    } else {
      // If no token, the user is not authenticated
      setUser({ isAuthenticated: false });
      router.push('/login'); // Redirect to the login page
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
}
