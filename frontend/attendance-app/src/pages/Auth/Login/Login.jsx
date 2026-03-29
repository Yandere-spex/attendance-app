import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors({})
    setLoading(true)
    
    // Validation
    const newErrors = {}
    if (!formData.email) newErrors.email = 'Email required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email'
    
    if (!formData.password) newErrors.password = 'Password required'
    else if (formData.password.length < 6) newErrors.password = 'Password too short'
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setLoading(false)
      return
    }
    
    // Simulate login
    setTimeout(() => {
      console.log('Login:', formData)
      alert('Login successful! Redirecting...')
      navigate('/dashboard')
      setLoading(false)
    }, 1500)
  }
  
  return (
 
      <div className="login-container">
        <span className='h1-attendance'>Attendance</span>
        <span className='h1-management'>Management</span>
        <span className='h1-system'>System</span>
        
        <div className="login-card">
          <h1 className="login-title">Login</h1>
          <p className="login-subtitle">Welcome Back</p>
          
          <form onSubmit={handleSubmit} className="login-form">
            {/* Email */}
            <div className="form-group">
              <label className='label-input'>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="your@email.com"
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            
            {/* Password */}
            <div className="form-group">
              <label className='label-input'>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
                placeholder="Enter your password"
              />
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>
            
            {/* Submit */}
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
          
          <div className="form-footer">
            <p>
              Don't have an account? 
              <Link to="/signup" className="link">Register</Link>
            </p>
          </div>
        </div>
      </div>

  )
}