import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student' // Default role
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, role } = formData;

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email.');
      return;
    }

    // Mock authentication logic
    // In real app: send to backend (Node.js + SQL)
    const mockUsers = {
      student: { email: 'student@luct.ls', password: '123456' },
      lecturer: { email: 'lecturer@luct.ls', password: '123456' },
      prl: { email: 'prl@luct.ls', password: '123456' },
      pl: { email: 'pl@luct.ls', password: '123456' }
    };

    const user = mockUsers[role];

    if (user && user.email === email && user.password === password) {
      // Save user to localStorage (for ProtectedRoute)
      localStorage.setItem('user', JSON.stringify({ email, role }));
      setError('');
      navigate(`/${role}`); // Redirect to role-specific dashboard
    } else {
      setError('Invalid email, password, or role combination.');
    }
  };

  return (
    <div style={{
      maxWidth: '450px',
      margin: '60px auto',
      padding: '30px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#2c3e50' }}>
        LUCT Reporting System — Login
      </h2>

      {error && (
        <div style={{
          backgroundColor: '#f8d7da',
          color: '#721c24',
          padding: '10px',
          borderRadius: '4px',
          marginBottom: '15px'
        }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="role" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          >
            <option value="student">Student</option>
            <option value="lecturer">Lecturer</option>
            <option value="prl">Principal Lecturer (PRL)</option>
            <option value="pl">Program Leader (PL)</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: 'grey',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Login
        </button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>
          Don’t have an account?{' '}
          <a href="/register" style={{ color: '#3498db', textDecoration: 'none' }}>
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}