import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Auth/Login/Login.jsx'
import Home from './pages/Home/Home.jsx';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <Routes>  {/* Plain old Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<Signup/>} />
            <Route path="/signup" element={<div>Signup</div>} />
            <Route path="/dashboard" element={<div>Dashboard</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}