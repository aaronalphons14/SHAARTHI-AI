import React from 'react';

export function Toast({ icon, message }) {
  if (!message) return null;

  return (
    <div style={styles.toast}>
      <span style={styles.icon}>{icon}</span>
      <span>{message}</span>
    </div>
  );
}

const styles = {
  toast: {
    position: 'fixed',
    bottom: '24px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#1E1F57',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    zIndex: 9999,
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    animation: 'slideInUp 0.3s ease-out',
  },
  icon: {
    fontSize: '18px',
  },
};
