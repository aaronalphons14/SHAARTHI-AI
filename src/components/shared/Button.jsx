import React from 'react';

export function Button({ children, onClick, variant = 'primary', ...props }) {
  return (
    <button style={{ ...styles.button, ...styles[variant] }} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

const styles = {
  button: {
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: "'Poppins', sans-serif",
  },
  primary: {
    background: 'var(--imperial-gold)',
    color: 'var(--royal-indigo-deep)',
  },
  secondary: {
    background: 'var(--royal-indigo)',
    color: '#fff',
  },
  outline: {
    background: 'transparent',
    border: '2px solid var(--imperial-gold)',
    color: 'var(--imperial-gold)',
  },
};
