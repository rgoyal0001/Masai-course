import './App.css';
import {Route,Routes} from 'react-router-dom'
import React from 'react';
import  Navbar  from './Components/Navbar';
import Home from './Components/Home'
import Login from './Components/Login'
import MovieDetails from './Components/MovieDetails'
import Booking from './Components/Booking'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
