import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Questions from './components/pages/Questions';
import Footer from './components/Footer';

function App() {
  return (
    
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path ='/' element = 
      { <Home />} />
      <Route path = '/Questions' element =
      { <Questions />} />
    </Routes>
    <Footer />
    </Router>    
    
    </>
    
  );
}

export default App;
