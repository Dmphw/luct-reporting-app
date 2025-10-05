import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function LecturerDashboard() {
  const navigate = useNavigate();
  const [user] = useState(JSON.parse(localStorage.getItem('user')));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Mock class data (replace with API call later)
  const classes = [
    { id: 1, course: 'Web Development', code: 'WD101', day: 'Monday', time: '09:00', venue: 'Lab 3' },
    { id: 2, course: 'Database Systems', code: 'DB201', day: 'Wednesday', time: '11:00', venue: 'Room 204' }
  ];

  // Mock reports (replace with backend data)
  const reports = [
    { id: 1, week: 4, course: 'Web Development', date: '2025-04-01', status: 'Submitted' },
    { id: 2, week: 5, course: 'Database Systems', date: '2025-04-08', status: 'Pending' }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        borderBottom: '2px solid #3498db',
        paddingBottom: '10px'
      }}>
        <h1 style={{ color: '#2c3e50' }}>Lecturer Dashboard</h1>
        <div>
          <span style={{ marginRight: '15px' }}>
            Welcome, <strong>{user?.email || 'Lecturer'}</strong>
          </span>
          <button
            onClick={handleLogout}
            style={{
              padding: '8px 16px',
              backgroundColor: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Quick Actions */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Quick Actions</h2>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <Link
            to="/lecturer/report"
            style={{
              padding: '12px 20px',
              backgroundColor: '#3498db',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 'bold'
            }}
          >
            ➕ Submit New Report
          </Link>
          <button
            onClick={() => alert('Feature: View feedback from PRL (mock)')}
            style={{
              padding: '12px 20px',
              backgroundColor: '#2ecc71',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            📊 View PRL Feedback
          </button>
        </div>
      </section>

      {/* My Classes */}
      <section style={{ marginBottom: '30px' }}>
        <h2>My Classes</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Course</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Code</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Day</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Time</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Venue</th>
            </tr>
          </thead>
          <tbody>
            {classes.map(cls => (
              <tr key={cls.id} style={{ textAlign: 'center' }}>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{cls.course}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{cls.code}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{cls.day}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{cls.time}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{cls.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Submitted Reports */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Submitted Reports</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Week</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Course</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Date</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map(report => (
              <tr key={report.id} style={{ textAlign: 'center' }}>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{report.week}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{report.course}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{report.date}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                  <span style={{
                    color: report.status === 'Submitted' ? '#27ae60' : '#e67e22',
                    fontWeight: 'bold'
                  }}>
                    {report.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Rating Section (Extra) */}
      <section>
        <h2>Rate Your PRL / PL</h2>
        <p style={{ color: '#7f8c8d' }}>
          As part of the system’s feedback loop, you may rate your Principal Lecturer or Program Leader.
        </p>
        <button
          onClick={() => alert('Rating form would open here (mock)')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#9b59b6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          ⭐ Submit Rating
        </button>
      </section>
    </div>
  );
}