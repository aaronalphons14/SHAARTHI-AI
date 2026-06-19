import React, { useState } from 'react';
import { FormInput } from '../../shared/FormInput';
import { Card } from '../../shared/Card';
import { Button } from '../../shared/Button';

export function GovernmentSchemesTab() {
  const [schemes] = useState([
    { name: 'PM-Kisan', benefit: '₹6000/year', description: 'Direct income support to farmers' },
    { name: 'UJJWALA', benefit: 'Free LPG', description: 'Free cooking gas connection' },
    { name: 'MGNREGA', benefit: '100 days work', description: 'Rural employment guarantee' },
    { name: 'ABHA', benefit: 'Digital health ID', description: 'Health records access' },
  ]);

  const [selectedScheme, setSelectedScheme] = useState(null);

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>🏛️ Government Schemes</h3>

      <div style={styles.schemeList}>
        {schemes.map((scheme, i) => (
          <Card key={i} style={styles.schemeCard}>
            <h4 style={styles.schemeName}>{scheme.name}</h4>
            <p style={styles.benefit}>💰 {scheme.benefit}</p>
            <p style={styles.description}>{scheme.description}</p>
            <Button style={{ width: '100%', marginTop: '8px' }}>
              Learn More
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', flexDirection: 'column', gap: '16px' },
  title: { fontSize: '20px', fontWeight: 'bold', color: '#F4A300' },
  schemeList: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' },
  schemeCard: { cursor: 'pointer' },
  schemeName: { fontSize: '16px', fontWeight: 'bold', color: '#1a1a3e', margin: '0 0 8px 0' },
  benefit: { fontSize: '13px', color: '#F4A300', fontWeight: 'bold', margin: '0 0 4px 0' },
  description: { fontSize: '13px', color: '#666', margin: '0' },
};
