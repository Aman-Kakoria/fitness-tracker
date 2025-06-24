import { useState, useEffect } from 'react';

function useIsLoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  return [isLoggedIn, setIsLoggedIn];
}

export default useIsLoggedIn;//...