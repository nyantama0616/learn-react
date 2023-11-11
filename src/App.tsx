import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LearnApexChart } from './apexcharts/LearnApexChart';
import LearnMUI from './mui/LearnMUI';
import Layout from './Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<LearnApexChart />}></Route> */}
          <Route path="/" element={<Layout mainComponent={<LearnMUI />}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
