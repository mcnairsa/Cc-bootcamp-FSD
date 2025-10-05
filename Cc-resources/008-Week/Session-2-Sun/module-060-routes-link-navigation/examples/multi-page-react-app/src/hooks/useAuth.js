import { useState, useCallback } from 'react';

function useAuth(user, setUser) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!user);

  const login = useCallback((credentials) => {
    // Simulate authentication - in real app, this would call an API
    const { email, password } = credentials;

    if (email && password) {
      const userData = {
        id: Date.now(),
        email,
        name: email.split('@')[0],
        joinDate: new Date().toISOString(),
        preferences: {
          notifications: true,
          theme: 'light'
        }
      };

      setUser(userData);
      setIsAuthenticated(true);
      return { success: true, user: userData };
    }

    return { success: false, error: 'Invalid credentials' };
  }, [setUser]);

  const logout = useCallback(() => {
    setUser(null);
    setIsAuthenticated(false);
  }, [setUser]);

  const updateUser = useCallback((updates) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      return updatedUser;
    }
    return null;
  }, [user, setUser]);

  return {
    isAuthenticated,
    user,
    login,
    logout,
    updateUser
  };
}

export default useAuth;