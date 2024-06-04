import React from 'react';
import Homepage from './pages/homepage/Homepage';
import Product from './pages/product/Product';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Payout from './pages/Payout';
import Rewards from './pages/Rewards/Rewards';
import Rewardselect from './pages/product/Productselect'

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Homepage />} /> 
      <Route path="/product" element={<Product />} />
      <Route path="/Payout" element={<Payout />} />
      <Route path="/Rewards" element={<Rewards/>}/>
      <Route path='/Productselect' element={<Rewardselect/>}  />
    </Routes>
  </Router>
  );
}

export default App;
