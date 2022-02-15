import './App.css';
import React, {useState, useEffect} from "react"
import { Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';

function App() {
  const [user, setUser] = useState(null);
  const [response, setResponse] = useState(200)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    if(response.status >= 300){

    }

  }, [response])

  if (user) {
    return (
      <>
      <h2>Welcome, {user.username}!</h2>
      <Navbar onLogout = {setUser} ></Navbar>
      </>
    );
    
  } else {
    return <Login onLogin={setUser} setResponse = {setResponse} />;
  }
}

export default App;
