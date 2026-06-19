import React, { useState } from 'react';
import { Card } from '../../shared/Card';
import { Button } from '../../shared/Button';
import { useToast } from '../../../hooks/useToast';

export function CommunityTab() {
  const [groups] = useState([
    { name: 'Mahila Mandal', members: 45, focus: 'Women Empowerment', meetings: 'Weekly' },
    { name: 'SHG - Craft', members: 32, focus: 'Handmade Products', meetings: 'Bi-weekly' },
    { name: 'Savings Circle', members: 28, focus: 'Microfinance', meetings: 'Monthly' },
  ]);

  const { showToast } = useToast();

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>👥 Community & Self-Help Groups</h3>

      <div style={styles.groupsList}>
        {groups.map((group, i) => (
          <Card key={i} style={styles.groupCard}>
            <h4 style={styles.groupName}>{group.name}</h4>
            <div style={styles.groupInfo}>
              <span>👥 {group.members} members</span>
              <span>📌 {group.focus}</span>
              <span>📅 {group.meetings}</span>
            </div>
            <Button
              onClick={() => showToast('✅', 'Joined group!')}
              style={{ width: '100%', marginTop: '8px' }}
            >
              Join Group
            </Button>
          </Card>
        ))}
      </div>

      <Card title="Start Your Own Group" style={{ marginTop: '16px' }}>
        <p>Connect with neighbors and create economic opportunities</p>
        <Button style={{ width: '100%', marginTop: '8px' }}>
          Create New Group
        </Button>
      </Card>
    </div>
  );
}

const styles = {
  container: { display: 'flex', flexDirection: 'column', gap: '16px' },
  title: { fontSize: '20px', fontWeight: 'bold', color: '#F4A300' },
  groupsList: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' },
  groupCard: { cursor: 'pointer' },
  groupName: { fontSize: '15px', fontWeight: 'bold', color: '#1a1a3e', margin: '0 0 8px 0' },
  groupInfo: { display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px', color: '#666' },
};
