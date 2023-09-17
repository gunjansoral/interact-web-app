'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Logout = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the authentication cookie
    Cookies.remove('token');

    // Redirect the user to the login page
    router.push('/login');
  };

  return (
    <div>
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
