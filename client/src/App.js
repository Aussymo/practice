import React from 'react';
import './App.css';
import Navigation from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';
import Gear from './pages/gear';
import Supplements from './pages/sup';
import Equipment from './pages/equip';
  
function App() {
return (
    <Router>
    <Navigation />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/equip' element={<Equipment/>} />
        <Route path='/sup' element={<Supplements />} />
        <Route path='/gear' element={<Gear/>} />
    </Routes>
    <Footer/>
    </Router>
);
}
  
export default App;
