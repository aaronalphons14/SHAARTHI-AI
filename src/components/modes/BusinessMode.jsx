import React, { useState } from 'react';
import { FormInput } from '../shared/FormInput';
import { Card } from '../shared/Card';
import { Button } from '../shared/Button';
import { useToast } from '../../hooks/useToast';

export default function BusinessMode() {
  const [activeTab, setActiveTab] = useState('insights');
  const { showToast } = useToast();

  const [expenses] = useState([
    { category: 'Rent', amount: '₹15000', date: '2024-06-01' },
    { category: 'Supplies', amount: '₹5000', date: '2024-06-15' },
    { category: 'Utilities', amount: '₹2000', date: '2024-06-20' },
  ]);

  const [employees] = useState([
    { name: 'Raj Kumar', role: 'Manager', status: 'Present' },
    { name: 'Priya Singh', role: 'Executive', status: 'Present' },
    { name: 'Amit Patel', role: 'Developer', status: 'On Leave' },
  ]);

  const tabs = [
    { key: 'insights', label: '📊 Insights' },
    { key: 'customers', label: '👥 Customers' },
    { key: 'expenses', label: '💰 Expenses' },
    { key: 'employees', label: '👔 Employees' },
    { key: 'wellness', label: '❤️ Wellness' },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🏢 Sharmaji Saarthi</h2>

      <div style={styles.tabs}>
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              ...styles.tabButton,
              background: activeTab === tab.key ? '#1E1F57' : '#f0f0f0',
              color: activeTab === tab.key ? '#fff' : '#000',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={styles.content}>
        {activeTab === 'insights' && (
          <div>
            <h3>📊 Business Insights AI</h3>
            <div style={styles.statsGrid}>
              <Card title="Revenue">
                <div style={styles.stat}>₹2,45,000</div>
                <div style={styles.statChange}>+15% this month</div>
              </Card>
              <Card title="Profit Margin">
                <div style={styles.stat}>32%</div>
                <div style={styles.statChange}>-2% vs last month</div>
              </Card>
              <Card title="Growth Rate">
                <div style={styles.stat}>23%</div>
                <div style={styles.statChange}>+5% YoY</div>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'customers' && (
          <div>
            <h3>👥 Customer Log</h3>
            <Card title="Add New Customer">
              <FormInput label="Name" placeholder="Customer name" />
              <FormInput label="Contact" placeholder="Phone number" />
              <FormInput label="Purchase History" placeholder="Previous orders" />
              <Button style={{ marginTop: '12px', width: '100%' }}>
                Add Customer
              </Button>
            </Card>
          </div>
        )}

        {activeTab === 'expenses' && (
          <div>
            <h3>💰 Expense Tracking</h3>
            <div style={styles.expensesList}>
              {expenses.map((exp, i) => (
                <Card key={i} style={styles.expenseCard}>
                  <h4>{exp.category}</h4>
                  <div style={styles.expenseAmount}>{exp.amount}</div>
                  <div style={styles.expenseDate}>{exp.date}</div>
                </Card>
              ))}
            </div>
            <Button style={{ marginTop: '12px', width: '100%' }}>
              Add Expense
            </Button>
          </div>
        )}

        {activeTab === 'employees' && (
          <div>
            <h3>👔 Employee Management</h3>
            <div style={styles.employeesList}>
              {employees.map((emp, i) => (
                <Card key={i} style={styles.employeeCard}>
                  <h4>{emp.name}</h4>
                  <p>{emp.role}</p>
                  <div style={styles.status}>{emp.status}</div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'wellness' && (
          <div>
            <h3>❤️ Family Wellness</h3>
            <Card title="Health Checkup Schedule">
              <p>📅 Mom - Monthly health check</p>
              <p>🏃 Dad - Weekly exercise routine</p>
              <p>👧 Kids - School sports activities</p>
              <Button style={{ marginTop: '12px', width: '100%' }}>
                Set Reminders
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
  title: { fontSize: '28px', fontWeight: 'bold', color: '#1E1F57', marginBottom: '20px' },
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
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px', marginTop: '12px' },
  stat: { fontSize: '24px', fontWeight: 'bold', color: '#1E1F57' },
  statChange: { fontSize: '12px', color: '#999' },
  expensesList: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginTop: '12px' },
  expenseCard: { cursor: 'pointer' },
  expenseAmount: { fontSize: '18px', fontWeight: 'bold', color: '#1E1F57', margin: '8px 0' },
  expenseDate: { fontSize: '12px', color: '#999' },
  employeesList: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginTop: '12px' },
  employeeCard: { cursor: 'pointer' },
  status: { fontSize: '12px', color: '#4CAF50', fontWeight: 'bold', marginTop: '8px' },
};
