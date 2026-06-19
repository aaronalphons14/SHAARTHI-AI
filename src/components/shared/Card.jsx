import React from 'react';

export function Card({ title, children, ...props }) {
  return (
    <div style={styles.card} {...props}>
      {title && <h3 style={styles.title}>{title}</h3>}
      {children}
    </div>
  );
}

const styles = {
  card: {
    background: '#fff',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: 'var(--royal-indigo)',
  },
};
