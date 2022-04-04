import { useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {

  const fetchSWAPI = async () => {
  const response = await fetch(`https://swapi.dev/api/people/?page=1`);
  const jsonResponse = await response.json();
  return jsonResponse;
  }

  const fetchPage2 = async() => {
    const response2 = await fetch(`https://swapi.dev/api/people/?page=2`);
    const jsonResponse2 = await response2.json();
    return jsonResponse2;
  }


  useEffect(() => {
    Promise.all([fetchSWAPI(), fetchPage2()]).then(values => console.log(values));
  }, []);
  

  return (
    <div className="App">
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
