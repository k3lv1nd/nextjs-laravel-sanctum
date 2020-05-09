import React, { useState, useEffect, useContext, createContext } from "react";
import axios from 'axios';

// Where does this go? I would rather use Fetch but could not get cookies working so used Axios
// Should we use Next.js API routes? I am not sure
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000/'

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const login = (email, password) => axios.post('/login', {
    email,
    password,
  }).then(data => {
    fetchUser();

    return data;
  });

  const register = (email, password) => {}; // TODO

  const logout = () => axios.post('/logout').then(data => {
    setUser(false);

    return data;
  });

  const sendPasswordResetEmail = email => {}; // TODO

  const confirmPasswordReset = (code, password) => {}; // TODO

  const fetchUser = async () => {
    try {
      const user = await axios.get('/api/user');
      if (user.data) {
        setUser(user.data);
      } else {
        setUser(false);
      }
    } catch(error) {
      setUser(false);
    }
  };

  useEffect(() => {
    fetchUser();

    return () => fetchUser();
  }, []);

  return {
    user,
    login,
    register,
    logout,
    sendPasswordResetEmail,
    confirmPasswordReset
  };
}
