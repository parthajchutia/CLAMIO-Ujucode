import React from 'react';
import Homepage from './pages/homepage/Homepage';
import Product from './pages/Product';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Payout from './pages/Payout';
import Rewards from './pages/Rewards/Rewards';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Homepage />} /> 
      <Route path="/product" element={<Product />} />
      <Route path="/Payout" element={<Payout />} />
      <Route path="/Rewards" element={<Rewards/>}/>
    </Routes>
  </Router>
  );
}

export default App;
