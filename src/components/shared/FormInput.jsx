import React from 'react';

export function FormInput({ label, type = 'text', placeholder, value, onChange, ...props }) {
  return (
    <div style={styles.container}>
      {label && <label style={styles.label}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={styles.input}
        {...props}
      />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#1a1a3e',
  },
  input: {
    padding: '10px 12px',
    border: '2px solid #ddd',
    borderRadius: '8px',
    fontSize: '14px',
    fontFamily: "'Poppins', sans-serif",
    transition: 'all 0.3s ease',
  },
};
