import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'

export default function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        role: 'student',
        name: '',
        section: '',
        course: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    
    const [errors, setErrors] = useState({})
    const [checked, setChecked] = useState(false)
    const navigate = useNavigate()
    
    const roles = ['student', 'teacher', 'admin']
    
    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors({})
        
        // Validation
        const newErrors = {}
        
        if (!formData.username) newErrors.username = 'Username required'
        if (!formData.name) newErrors.name = 'Full name required'
        if (!formData.email) newErrors.email = 'Email required'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalid'
        
        if (!formData.password) newErrors.password = 'Password required'
        else if (formData.password.length < 6) newErrors.password = 'Password min 6 chars'
        
        if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords don't match"
        }
        
        if (!checked) newErrors.checkbox = 'Accept terms required'
        
        if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        return
        }
        
        // Simulate API call
        setTimeout(() => {
        console.log('Signup:', formData)
        alert('Account created! Redirecting to login...')
        navigate('/login')
        }, 1500)
    }
    
    return (
    <div className='sign-div-main'> 
        <span className='h1-attendance'>Attendance</span>
        <span className='h1-management'>Management</span>
        <span className='h1-system'>System</span>

        <div className="signup-container">
        <div className="signup-card">
            <h1 className="signup-title">Register</h1>
            <p className="signup-subtitle">Join Attendance Management System</p>
            
            <form onSubmit={handleSubmit} className="signup-form">
            
             {/* Role Select */}
            <div className="form-group">
                <label className='label-input'>Role</label>
                <select name="role" value={formData.role} onChange={handleChange}>
                {roles.map(role => (
                    <option key={role} value={role}>
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                    </option>
                ))}
                </select>
            </div>
            
            
            
            {/* Username */}
            <div className="form-group">
                <label className='label-input'>Username</label>
                <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={errors.username ? 'error' : ''}
                placeholder="Enter username"
                />
                {errors.username && <span className="error-text">{errors.username}</span>}
            </div>
            
            
            {/* Name */}
            <div className="form-group">
                <label className='label-input'>Full Name</label>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                placeholder="Enter full name"
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            
            {/* Section */}
            <div className="form-group">
                <label>Section</label>
                <input
                type="text"
                name="section"
                value={formData.section}
                onChange={handleChange}
                placeholder="e.g., A-101"
                />
            </div>
            
            {/* Course */}
            <div className="form-group">
                <label>Course</label>
                <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                placeholder="e.g., Computer Science"
                />
            </div>
            
            {/* Email */}
            <div className="form-group">
                <label>Email</label>
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
                <label>Password</label>
                <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
                placeholder="Min 6 characters"
                />
                {errors.password && <span className="error-text">{errors.password}</span>}
            </div>
            
            {/* Confirm Password */}
            <div className="form-group">
                <label>Confirm Password</label>
                <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? 'error' : ''}
                placeholder="Repeat password"
                />
                {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
            </div>
            
            {/* Checkbox */}
            <div className="form-group checkbox-group">
                <label className="checkbox-label">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                />
                <span className="checkmark"></span>
                I agree to Terms & Conditions
                </label>
                {errors.checkbox && <span className="error-text">{errors.checkbox}</span>}
            </div>
            
            {/* Submit */}
            <button type="submit" className="submit-btn">
                Create Account
            </button>
            </form>
            
            <div className="form-footer">
            <p>Already have account? <Link to="/login" className="link">Login</Link></p>
            </div>
        </div>
        </div>
    </div>
    )
}