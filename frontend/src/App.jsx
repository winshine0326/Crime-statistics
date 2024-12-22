import React from 'react'
import {useState, useEffect} from 'react'

const App = ()=>{
  const [message, setMassage] = useState("");

  useEffect(()=>{
    const apiUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

    fetch(`${apiUrl}/`)
      .then((res)=>res.json())
      .then((data)=>setMassage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  },[]);

  return <div>{message}</div>
}

export default App