import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
  const [regionData, setRegionData] = useState("");
  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

    fetch(`${apiUrl}/`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data.data[0]);
        setRegionData(data.data.data[0]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  
  return (
    <div>
      <h1>지역별 범죄율 통계</h1>
      <ul>
        {Object.entries(regionData).map(([key, value], index) => (
          <li key={index}>
            <strong>{key}: </strong>{value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App