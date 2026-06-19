import React, { useContext, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { ModeContext } from '../../contexts/ModeContext';
import { AmmaMode } from '../modes/AmmaMode';
import BusinessMode from '../modes/BusinessMode';
import SeniorMode from '../modes/SeniorMode';
import StudentMode from '../modes/StudentMode';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const { activeMode, lockedMode, switchMode, lockMode, unlockMode, modes } = useContext(ModeContext);

  useEffect(() => {
    if (!activeMode && modes) {
      switchMode('amma');
    }
  }, []);

  const renderModeComponent = () => {
    switch (activeMode) {
      case 'amma':
        return <AmmaMode />;
      case 'business':
        return <BusinessMode />;
      case 'senior':
        return <SeniorMode />;
      case 'student':
        return <StudentMode />;
      default:
        return <div style={styles.empty}>Select a mode to get started</div>;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div style={styles.profile}>
          <div style={styles.avatar}>👤</div>
          <h3 style={styles.profileName}>{user?.name || 'Welcome'}</h3>
          <p style={styles.profileEmail}>{user?.email}</p>
        </div>

        <div style={styles.modeMenu}>
          <h4 style={styles.modeTitle}>Your Modes</h4>
          {Object.values(modes).map((mode) => (
            <div key={mode.key} style={styles.modeOption}>
              <button
                onClick={() => switchMode(mode.key)}
                style={{
                  ...styles.modeButton,
                  background: activeMode === mode.key ? mode.color : '#f0f0f0',
                  color: activeMode === mode.key ? '#fff' : '#000',
                  flex: 1,
                }}
              >
                {mode.label}
              </button>
              {lockedMode === mode.key ? (
                <button
                  onClick={() => unlockMode()}
                  style={styles.lockButton}
                  title="Unlock mode"
                >
                  🔒
                </button>
              ) : (
                <button
                  onClick={() => lockMode(mode.key)}
                  style={styles.unlockButton}
                  title="Lock mode"
                >
                  🔓
                </button>
              )}
            </div>
          ))}
        </div>

        <button onClick={logout} style={styles.logoutButton}>
          🚪 Logout
        </button>
      </div>

      <div style={styles.main}>{renderModeComponent()}</div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    background: 'var(--pearl-ivory)',
  },
  sidebar: {
    width: '280px',
    background: 'var(--royal-indigo)',
    color: '#fff',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    overflowY: 'auto',
  },
  profile: {
    textAlign: 'center',
    borderBottom: '1px solid rgba(255,255,255,0.2)',
    paddingBottom: '20px',
  },
  avatar: {
    fontSize: '48px',
    marginBottom: '12px',
  },
  profileName: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '8px 0 4px 0',
  },
  profileEmail: {
    fontSize: '12px',
    opacity: 0.8,
    margin: '0',
  },
  modeMenu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  modeTitle: {
    fontSize: '12px',
    textTransform: 'uppercase',
    opacity: 0.7,
    marginBottom: '8px',
    margin: '0',
  },
  modeOption: {
    display: 'flex',
    gap: '6px',
    alignItems: 'center',
  },
  modeButton: {
    padding: '10px 12px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s',
    fontSize: '13px',
  },
  lockButton: {
    background: 'rgba(255,255,255,0.2)',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  unlockButton: {
    background: 'rgba(255,255,255,0.1)',
    color: '#fff',
    border: '1px dashed rgba(255,255,255,0.3)',
    padding: '8px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  logoutButton: {
    background: '#e11d48',
    color: '#fff',
    border: 'none',
    padding: '10px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    marginTop: 'auto',
  },
  main: {
    flex: 1,
    overflowY: 'auto',
  },
  empty: {
    textAlign: 'center',
    padding: '60px 20px',
    color: '#999',
    fontSize: '16px',
  },
};
