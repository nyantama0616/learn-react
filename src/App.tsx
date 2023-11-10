import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LearnApexChart } from './apexcharts/LearnApexChart';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LearnApexChart />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
