import React, { useState, useEffect } from 'react';

function App() {
  const [heroTitle, setHeroTitle] = useState('');

  useEffect(() => {
    fetch('http://localhost:5001/hero-title/website1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.text();
      })
      .then(data => {
        setHeroTitle(data);
      })
      .catch(error => {
        console.error('Error retrieving hero title:', error);
      });
  }, []);

  return (
    <div>
      <h1>{heroTitle}</h1>
    </div>
  );
}

export default App;
