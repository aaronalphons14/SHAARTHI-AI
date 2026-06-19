import { useState, useCallback } from 'react';

export const useToast = () => {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((icon, message, duration = 3000) => {
    setToast({ icon, message });
    setTimeout(() => setToast(null), duration);
  }, []);

  return { toast, showToast };
};
