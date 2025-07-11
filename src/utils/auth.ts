// Utility functions for authentication

export const isAuthenticated = (): boolean => {
  try {
    const authStatus = localStorage.getItem('rapporti_auth');
    const authTime = localStorage.getItem('rapporti_auth_time');
    
    if (!authStatus || authStatus !== 'authenticated') {
      return false;
    }
    
    // Check if login is expired (24 hours)
    if (authTime) {
      const loginTime = parseInt(authTime);
      const now = Date.now();
      const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
      
      if (now - loginTime > twentyFourHours) {
        // Session expired, clean up
        logout();
        return false;
      }
    }
    
    return true;
  } catch (error) {
    console.error('Error checking authentication status:', error);
    return false;
  }
};

export const logout = (): void => {
  try {
    localStorage.removeItem('rapporti_auth');
    localStorage.removeItem('rapporti_auth_time');
  } catch (error) {
    console.error('Error during logout:', error);
  }
};

export const refreshSession = (): void => {
  try {
    if (isAuthenticated()) {
      localStorage.setItem('rapporti_auth_time', Date.now().toString());
    }
  } catch (error) {
    console.error('Error refreshing session:', error);
  }
};