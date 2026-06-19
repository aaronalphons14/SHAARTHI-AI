import React, { useState, useContext } from 'react';
import { AuthContext, AuthProvider } from './contexts/AuthContext';
import { ModeProvider } from './contexts/ModeContext';
import Landing from './components/pages/Landing';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import { Toast } from './components/shared/Toast';
import { useToast } from './hooks/useToast';
import './styles/globals.css';

function AppContent() {
  const { isAuthenticated, loading } = useContext(AuthContext);
  const [page, setPage] = useState('landing');
  const { toast } = useToast();

  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>⏳ Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div>
        {page === 'landing' && <Landing onGetStarted={() => setPage('login')} />}
        {page === 'login' && (
          <Login
            onSuccess={() => setPage('dashboard')}
            onSwitchTab={() => setPage('register')}
          />
        )}
        <Toast icon={toast?.icon} message={toast?.message} />
      </div>
    );
  }

  return (
    <div>
      <Dashboard />
      <Toast icon={toast?.icon} message={toast?.message} />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ModeProvider>
        <AppContent />
      </ModeProvider>
    </AuthProvider>
  );
}
