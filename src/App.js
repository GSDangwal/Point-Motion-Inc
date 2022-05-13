import React, { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ManageProducts from './Manage_Products';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/manage_products" element={<ManageProducts />} />
      </Routes>
    </div>
  );
}

export default App;
