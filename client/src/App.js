//import { Route,Switch } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom'

import {useEffect, useState} from 'react'
import PetPal from './PetPal'
import CreatePetForm from './CreatePetForm'
import Navbar from './Navbar'
import PetList from './PetList'
import Auth from './Auth'
import Login from './Login'

function App() {
  const [petPals, setPetPals] = useState([])
  const [errors, setErrors] = useState(false)
  const [species, setSpecies] = useState([])

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
 
  const [formData, setFormData] = useState({})
  var userId = 0

  useEffect(() => { 
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
          userId = user.id
          console.log(user)
        });
      }
    });
    fetch('/petpals')
    .then(res => res.json())
    .then(setPetPals);

  },[]);
  useEffect(() => {
      const form = {
          name: formData.name,
          species_id: formData.species_id,
          user_id: user.id,
          health: "10",
          happiness: "10",
          color: formData.color
      }
      // handlePost(form)
   },[formData])
  console.log(user)
  function handlePost(obj){
      fetch('/petpals',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(obj)
      })
      .then(res => res.json())
      .then(data => {
        if(data.errors){
          setErrors(data.errors)
        } else {
          setPetPals([...petPals,data])
        }
      })
  }

  if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>;

  return (
    <div id="App">
      <Routes>
    <Route exact path="/" element={<Navbar setUser={setUser} />, <CreatePetForm handlePost={handlePost} userId = {userId} errors={errors} setFormData={setFormData}/>}>
    </Route>
    <Route exact path="/petpals/:id" element={<PetPal />}>  
    </Route>
    <Route exact path="/sign_up" element={<Auth />}>
      
    </Route>
    <Route exact path="/login" element={ <Login />}>
         
    </Route>
    </Routes>

    </div>
  );
}

export default App;






















// import './App.css';
// import React, {useState, useEffect} from "react"
// import { Route } from 'react-router-dom'
// import Home from './Home';
// import Login from './Login';
// import Navbar from './Navbar';

// function App() {
//   const [user, setUser] = useState(null);
//   const [response, setResponse] = useState(200)

//   useEffect(() => {
//     fetch("/me").then((response) => {
//       if (response.ok) {
//         response.json().then((user) => setUser(user));
//       }
//     });
//   }, []);

//   useEffect(() => {
//     if(response.status >= 300){

//     }

//   }, [response])

//   if (user) {
//     return (
//       <>
//       <h2>Welcome, {user.username}!</h2>
//       <Navbar onLogout = {setUser} ></Navbar>
//       </>
//     );
    
//   } else {
//     return <Login onLogin={setUser} setResponse = {setResponse} />;
//   }
// }

// export default App;
