import logo from './logo.svg';
import search from './shared/images/search.png';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import WeatherDetails from './components/weatherDetails/weatherDetails';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/weather/:city" exact element={<WeatherDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
