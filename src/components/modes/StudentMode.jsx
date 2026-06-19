import React, { useState } from 'react';
import { FormInput } from '../shared/FormInput';
import { Card } from '../shared/Card';
import { Button } from '../shared/Button';
import apiService from '../../services/api';
import { useToast } from '../../hooks/useToast';

export default function StudentMode() {
  const [activeTab, setActiveTab] = useState('productivity');
  const { showToast } = useToast();

  const [pomodoroTime, setPomodoroTime] = useState(25);
  const [isRunning, setIsRunning] = useState(false);

  const [scholarships] = useState([
    { name: 'National Merit Scholarship', amount: '₹1,00,000', deadline: '2024-07-15' },
    { name: 'State Scholarship', amount: '₹50,000', deadline: '2024-07-30' },
    { name: 'Merit-based Grant', amount: '₹75,000', deadline: '2024-08-10' },
  ]);

  const tabs = [
    { key: 'productivity', label: '⏱️ Productivity' },
    { key: 'notes', label: '📝 Notes' },
    { key: 'scholarships', label: '🎓 Scholarships' },
    { key: 'finance', label: '💰 Finance' },
    { key: 'career', label: '🚀 Career' },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🎓 Student Saarthi</h2>

      <div style={styles.tabs}>
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              ...styles.tabButton,
              background: activeTab === tab.key ? '#4F46E5' : '#f0f0f0',
              color: activeTab === tab.key ? '#fff' : '#000',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={styles.content}>
        {activeTab === 'productivity' && (
          <div>
            <h3>⏱️ Productivity Coach</h3>
            <Card title="Pomodoro Timer">
              <div style={styles.timer}>
                <div style={styles.timerDisplay}>{pomodoroTime}:00</div>
                <div style={styles.buttonGroup}>
                  <Button onClick={() => setIsRunning(!isRunning)}>
                    {isRunning ? '⏸️ Pause' : '▶️ Start'}
                  </Button>
                  <Button onClick={() => setPomodoroTime(25)}>🔄 Reset</Button>
                </div>
              </div>
            </Card>
            <Card title="Study Tips" style={{ marginTop: '12px' }}>
              <p>✅ Break large topics into small chunks</p>
              <p>✅ Take breaks every 25 minutes</p>
              <p>✅ Review notes daily for retention</p>
              <p>✅ Form study groups with peers</p>
            </Card>
          </div>
        )}

        {activeTab === 'notes' && (
          <div>
            <h3>📝 Notes Summarizer</h3>
            <Card title="Generate Summary">
              <FormInput label="Topic" placeholder="Enter topic name" />
              <FormInput label="Subject" placeholder="Math, Science, History..." />
              <Button style={{ marginTop: '12px', width: '100%' }}>
                Summarize
              </Button>
            </Card>
          </div>
        )}

        {activeTab === 'scholarships' && (
          <div>
            <h3>🎓 Scholarship & Internship Finder</h3>
            <div style={styles.scholarshipsList}>
              {scholarships.map((sch, i) => (
                <Card key={i} style={styles.scholarshipCard}>
                  <h4>{sch.name}</h4>
                  <div style={styles.amount}>{sch.amount}</div>
                  <div style={styles.deadline}>📅 Deadline: {sch.deadline}</div>
                  <Button style={{ marginTop: '8px', width: '100%' }}>
                    Apply Now
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'finance' && (
          <div>
            <h3>💰 Student Finance Assistant</h3>
            <Card title="Budget Tracker">
              <p>💸 Monthly allowance: ₹5,000</p>
              <p>📚 Books & materials: ₹1,200</p>
              <p>🍽️ Food & essentials: ₹2,000</p>
              <p>✨ Savings: ₹1,800</p>
              <Button style={{ marginTop: '12px', width: '100%' }}>
                View Expenses
              </Button>
            </Card>
          </div>
        )}

        {activeTab === 'career' && (
          <div>
            <h3>🚀 Career Navigator</h3>
            <Card title="Career Path Planning">
              <p>🎯 Recommended careers based on interests</p>
              <p>📊 Skill requirements & certifications</p>
              <p>🏢 Top companies hiring in your field</p>
              <p>💼 Internship opportunities</p>
              <Button style={{ marginTop: '12px', width: '100%' }}>
                Explore Careers
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
  title: { fontSize: '28px', fontWeight: 'bold', color: '#4F46E5', marginBottom: '20px' },
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
  timer: { textAlign: 'center', padding: '20px' },
  timerDisplay: { fontSize: '48px', fontWeight: 'bold', color: '#4F46E5', marginBottom: '16px' },
  buttonGroup: { display: 'flex', gap: '8px', justifyContent: 'center' },
  scholarshipsList: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginTop: '12px' },
  scholarshipCard: { cursor: 'pointer' },
  amount: { fontSize: '18px', fontWeight: 'bold', color: '#4F46E5', margin: '8px 0' },
  deadline: { fontSize: '12px', color: '#999' },
};
