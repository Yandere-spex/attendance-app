import { createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'

// Modern nested router setup
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div className="error">404 - Page Not Found</div>,
        children: [
        // Home as index route (/)
        { index: true, element: <Home /> },
        
        // Auth routes (future)
        { path: 'login', element: <div>Login Page</div> },
        { path: 'signup', element: <div>Signup Page</div> },
        
        // Dashboard (future)
        { 
            path: 'dashboard', 
            element: <div>Dashboard</div> 
        }
        ]
    }
])