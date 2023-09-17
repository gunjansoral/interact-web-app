'use client'

import { useUserContext } from "../contexts/userContext";

const GoogleAuth = () => {
  // const { user, setUser } = useUserContext();
  const handleGoogleAuth = async () => {
    try {
      // Make a request to your server's Google authentication endpoint
      window.location.href = 'http://localhost:8000/auth/google';

      // Handle the response data
    } catch (error) {
      // Handle any errors
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Google Authentication</h1>
      <button onClick={handleGoogleAuth}>Authenticate with Google</button>
    </div>
  );
};

export default GoogleAuth;
