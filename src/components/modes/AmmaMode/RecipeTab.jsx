import React, { useState } from 'react';
import { FormInput } from '../shared/FormInput';
import { Card } from '../shared/Card';
import { Button } from '../shared/Button';
import apiService from '../../services/api';
import { useToast } from '../../hooks/useToast';
import { useVoice } from '../../hooks/useVoice';

export function RecipeTab() {
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();
  const { speakMockText } = useVoice();

  const handleGenerateRecipe = async () => {
    if (!ingredients) {
      showToast('⚠️', 'Please enter ingredients');
      return;
    }

    setLoading(true);
    showToast('🔄', 'Generating recipe...');
    const result = await apiService.generateRecipe(ingredients);
    setRecipe(result);
    setLoading(false);
    speakMockText(result.voice_msg);
    showToast('✅', 'Recipe generated!');
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>🍳 Recipe Creator AI</h3>

      <Card title="Create Recipe">
        <FormInput
          label="Enter ingredients (comma separated)"
          placeholder="Tomato, onion, garlic..."
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <Button
          onClick={handleGenerateRecipe}
          disabled={loading}
          style={{ marginTop: '12px', width: '100%' }}
        >
          {loading ? '⏳ Generating...' : '✨ Generate Recipe'}
        </Button>
      </Card>

      {recipe && (
        <Card title="Your Recipe" style={{ marginTop: '16px' }}>
          <h4>{recipe.recipe_name}</h4>
          <p><strong>Time:</strong> {recipe.cooking_time}</p>
          <p><strong>Difficulty:</strong> {recipe.difficulty}</p>

          <h5 style={styles.sectionTitle}>Steps</h5>
          <ol>
            {recipe.steps.map((step, i) => <li key={i}>{step}</li>)}
          </ol>

          <h5 style={styles.sectionTitle}>Nutrition</h5>
          <div style={styles.nutrition}>
            {Object.entries(recipe.nutrition).map(([key, val]) => (
              <div key={key}>{key}: {val}g</div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}

const styles = {
  container: { display: 'flex', flexDirection: 'column', gap: '16px' },
  title: { fontSize: '20px', fontWeight: 'bold', color: '#F4A300' },
  sectionTitle: { fontSize: '14px', fontWeight: 'bold', marginTop: '12px', marginBottom: '8px' },
  nutrition: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', fontSize: '13px' },
};
