import axios from 'axios';
import React, { useEffect } from 'react'

const App = () => {

  useEffect(() => {
    const test = async() => {
      const response = await axios.get('/api/v1/test');
      console.log(response.data);
    }
    test();
  }, []);

  return (
    <div>App</div>
  )
}

export default App