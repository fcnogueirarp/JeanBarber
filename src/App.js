import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Hours from './pages/Hours';
import Reserve from './pages/Reserve';
import Schedule from './pages/Schedule';
import Services from './pages/Services';
import Register from './pages/users/Register';
import Login from './pages/users/Login';

import { UserProvider } from '../src/context/userContext';
import Order from './pages/Order';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contatos" element={<Contact />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/agenda" element={<Schedule />} />
          <Route path="/horarios" element={<Hours />} />
          <Route path="/reserva" element={<Reserve />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
