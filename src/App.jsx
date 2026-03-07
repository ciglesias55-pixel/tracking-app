import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verificamos si las llaves de Firebase ya han sido puestas o si siguen siendo placeholders
  const isFirebaseConfigured = !import.meta.env.VITE_FIREBASE_API_KEY || !import.meta.env.VITE_FIREBASE_API_KEY.includes('REPLACE_');
  // En este caso, como las pusimos en firebase.js directamente:
  const hasKeys = !auth.config?.apiKey?.includes('REPLACE_');

  useEffect(() => {
    // Si no hay llaves reales, dejamos de cargar inmediatamente para mostrar el dashboard
    if (auth.config?.apiKey?.includes('REPLACE_')) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'white' }}>
        Cargando Academia...
      </div>
    );
  }

  // Si no hay llaves reales puestas, entramos directamente (Bypass de emergencia)
  const showDashboard = user || auth.config?.apiKey?.includes('REPLACE_');

  return (
    <div className="app-container">
      {showDashboard ? <Dashboard user={user} /> : <Login />}
    </div>
  );
}

export default App;
