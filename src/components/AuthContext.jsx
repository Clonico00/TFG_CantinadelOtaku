import { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase'; // Ruta a tu archivo firebase.js

// Crea el contexto de autenticación
export const AuthContext = createContext();

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Configura un efecto para observar los cambios en la autenticación del usuario
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Limpia el efecto al desmontar el componente
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
