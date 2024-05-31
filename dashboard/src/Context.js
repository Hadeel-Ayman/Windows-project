

// src/context/Context.js
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const Context = createContext();

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState('');
  const token = localStorage.getItem("authToken"); // احصل على التوكن من التخزين المحلي
  if (!token) {
    throw new Error("No token found");
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get('https://windows-ux0g.onrender.com/api/v1/User/getAdminDetails',
          {
            headers: {
              'Authorization': `Bearer ${token}`, // تضمين التوكن في الهيدر
              'Content-Type': 'application/json'
            },
            withCredentials: false // تضمين بيانات الاعتماد
          });
        setIsAuthenticated(true);
        setRole(data.role);
      } catch (error) {
        setIsAuthenticated(false);
        setRole('');
      }
    };

    fetchUser();
  }, []);

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated, role }}>
      {children}
    </Context.Provider>
  );
};
