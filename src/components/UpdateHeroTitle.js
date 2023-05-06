import React, { useState } from 'react';

const UpdateHeroTitle = () => {
  const [title, setTitle] = useState('');
  const [website, setWebsite] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5001/hero-title/${website}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, username: 'admin', password: 'password' }), // Add the username and password here
      });
  
      if (response.ok) {
        setMessage('Hero title updated successfully.');
      } else {
        setMessage('Error updating hero title.');
      }
    } catch (error) {
      setMessage('Error updating hero title.');
    }
  };
  

  return (
    <div>
      <h1>Update Hero Title</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <input
          type="text"
          placeholder="New Hero Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateHeroTitle;
