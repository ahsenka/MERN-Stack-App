import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Backend API'sinden veri çekiyoruz
    axios.get('http://localhost:5000') // Backend adresi
      .then((response) => setMessage(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Backend API Test</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
