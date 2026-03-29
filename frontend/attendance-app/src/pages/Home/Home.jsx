import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (


            

            <div className="home-div-main">
                
                <Link to="/login" className='home-nav'>Login</Link>
                <Link to="/signup" className='home-nav'>Signup</Link>

                <h1 className='home-h1'>Attendance </h1>
                <h1 className='home-h1'>Management</h1>
                <h1 className='home-h2'>System</h1>
            </div>

    );
}