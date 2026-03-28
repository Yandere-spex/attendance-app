import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='container'>
                <Link to="/" className='logo'>
                    Attendance Pro
                </Link>
                <div className='links'>
                    <Link to="/" className='link'>Home</Link>
                    <Link to="/login" className='link'>Login</Link>
                    <Link to="/signup" className='link'>Signup</Link>
                </div>
            </div>
        </nav>
    )
}