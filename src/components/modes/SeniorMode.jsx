import React, { useState } from 'react';
import { Card } from '../shared/Card';
import { Button } from '../shared/Button';
import { FormInput } from '../shared/FormInput';
import { useToast } from '../../hooks/useToast';

export default function SeniorMode() {
  const [activeTab, setActiveTab] = useState('sos');
  const { showToast } = useToast();

  const [emergencyContacts] = useState([
    { name: 'Dr. Sharma', phone: '9876543210', type: 'Doctor' },
    { name: 'Hospital', phone: '9876543211', type: 'Emergency' },
    { name: 'Son', phone: '9876543212', type: 'Family' },
  ]);

  const [medicines] = useState([
    { name: 'Blood Pressure Medicine', time: '8:00 AM', status: '✅' },
    { name: 'Diabetes Medicine', time: '1:00 PM', status: '✅' },
    { name: 'Heart Medicine', time: '8:00 PM', status: '⏳' },
  ]);

  const tabs = [
    { key: 'sos', label: '🆘 SOS' },
    { key: 'medicine', label: '💊 Medicine' },
    { key: 'memory', label: '🧠 Memory' },
    { key: 'guide', label: '📖 Guide' },
    { key: 'benefits', label: '💰 Benefits' },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>👴 Senior Saarthi</h2>

      <div style={styles.tabs}>
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              ...styles.tabButton,
              background: activeTab === tab.key ? '#7FB7BE' : '#f0f0f0',
              color: activeTab === tab.key ? '#fff' : '#000',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={styles.content}>
        {activeTab === 'sos' && (
          <div>
            <h3>🆘 Emergency SOS Dialer</h3>
            <div style={styles.emergencyList}>
              {emergencyContacts.map((contact, i) => (
                <div key={i} style={styles.contactItem}>
                  <div>
                    <strong style={styles.largeText}>{contact.name}</strong>
                    <p style={styles.smallText}>{contact.phone}</p>
                  </div>
                  <button style={styles.sosButton} onClick={() => showToast('📞', 'Calling ' + contact.name)}>
                    📞 CALL
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'medicine' && (
          <div>
            <h3>💊 Medical Reminders</h3>
            <div style={styles.medicineList}>
              {medicines.map((med, i) => (
                <div key={i} style={styles.medicineItem}>
                  <div>
                    <strong style={styles.largeText}>{med.name}</strong>
                    <p style={styles.smallText}>Take at {med.time}</p>
                  </div>
                  <span style={styles.status}>{med.status}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'memory' && (
          <div>
            <h3>🧠 Memory Management</h3>
            <Card title="Important Dates">
              <p>👨‍👩‍👧 Family birthdays</p>
              <p>💉 Doctor appointments</p>
              <p>💊 Medicine refill dates</p>
              <Button style={{ marginTop: '12px', width: '100%' }}>
                Add Memory
              </Button>
            </Card>
          </div>
        )}

        {activeTab === 'guide' && (
          <div>
            <h3>📖 Digital Companion Guide</h3>
            <Card title="How to Use Digital Services">
              <p>📱 Mobile phone basics</p>
              <p>🌐 Internet browsing</p>
              <p>📞 Video calling with family</p>
              <p>💳 Online banking safely</p>
              <Button style={{ marginTop: '12px', width: '100%' }}>
                Watch Video Guide
              </Button>
            </Card>
          </div>
        )}

        {activeTab === 'benefits' && (
          <div>
            <h3>💰 Government Benefits</h3>
            <Card title="Eligible Schemes">
              <p>🏛️ Senior Citizen Pension</p>
              <p>💊 Free Health Insurance</p>
              <p>🏠 Housing Benefits</p>
              <p>💰 Old Age Benefits</p>
              <Button style={{ marginTop: '12px', width: '100%' }}>
                Apply Now
              </Button>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: '20px' },
  title: { fontSize: '28px', fontWeight: 'bold', color: '#7FB7BE', marginBottom: '20px' },
  tabs: { display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' },
  tabButton: {
    padding: '10px 16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '600',
    transition: 'all 0.3s',
  },
  content: { background: '#fff', padding: '20px', borderRadius: '12px' },
  emergencyList: { display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' },
  contactItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    background: '#f0f8f9',
    borderRadius: '8px',
  },
  largeText: { fontSize: '16px', display: 'block' },
  smallText: { fontSize: '13px', color: '#999', margin: '4px 0 0 0' },
  sosButton: {
    padding: '12px 24px',
    background: '#e11d48',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '14px',
  },
  medicineList: { display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' },
  medicineItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '16px',
    background: '#f0f8f9',
    borderRadius: '8px',
  },
  status: { fontSize: '20px' },
};
