import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login/Login.jsx';  
import Signup from './pages/Auth/Signup/Signup.jsx'; 
import Home from './pages/Home/Home.jsx';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/signup" element={<Signup />} />   
            <Route path="/dashboard" element={<div>Dashboard</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}