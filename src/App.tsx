import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LearnApexChart } from './apexcharts/LearnApexChart';
import LearnMUI from './mui/LearnMUI';
import Layout from './Layout';
import LearnFramerMotion from './framer-motion/LearnFramerMotion';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<LearnApexChart />}></Route> */}
          {/* <Route path="/" element={<Layout mainComponent={<LearnMUI />}/>}></Route> */}
          <Route path="/learn-frame-motion" element={<Layout mainComponent={<LearnFramerMotion />}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
