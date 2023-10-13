import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import Home from './components/Home';
import Series from './components/Series';
import Table from './components/Table';
import Teams from './components/Teams';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <HeaderWithConditionalRendering />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/table" element={<Table />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/series" element={<Series />} />  
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

function HeaderWithConditionalRendering() {
  const location = useLocation();

  // List of routes where the header should be displayed
  const headerRoutes = ['/', '/news', '/features', '/teams', '/series', '/matches/:id'];

  // Check if the current route is in the list of headerRoutes
  if (headerRoutes.some(route => location.pathname.includes(route))) {
    return <Header />;
  } else {
    return null;
  }
}

export default App;
