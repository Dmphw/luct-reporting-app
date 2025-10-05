import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function PLDashboard() {
  const navigate = useNavigate();
  const [user] = useState(JSON.parse(localStorage.getItem('user')));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Mock data (replace with API calls in real app)
  const courses = [
    { id: 1, name: 'Web Development', code: 'WD101', lecturer: 'Dr. Smith', status: 'Active' },
    { id: 2, name: 'Database Systems', code: 'DB201', lecturer: 'Ms. Lee', status: 'Active' },
    { id: 3, name: 'Software Engineering', code: 'SE301', lecturer: 'Pending Assignment', status: 'Unassigned' }
  ];

  const prlReports = [
    { id: 1, prl: 'Dr. Mokoena', course: 'Web Development', week: 5, date: '2025-04-08', status: 'Reviewed' },
    { id: 2, prl: 'Prof. Nkosi', course: 'Database Systems', week: 5, date: '2025-04-08', status: 'Pending' }
  ];

  const lecturers = [
    { id: 1, name: 'Dr. Smith', email: 'smith@luct.ls', courses: 2, rating: 4.5 },
    { id: 2, name: 'Ms. Lee', email: 'lee@luct.ls', courses: 1, rating: 4.2 }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        borderBottom: '2px solid #8e44ad',
        paddingBottom: '10px'
      }}>
        <h1 style={{ color: '#2c3e50' }}>Program Leader (PL) Dashboard</h1>
        <div>
          <span style={{ marginRight: '15px' }}>
            Welcome, <strong>{user?.email || 'Program Leader'}</strong>
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
            to="/pl/courses"
            style={{
              padding: '12px 20px',
              backgroundColor: '#8e44ad',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 'bold'
            }}
          >
            📚 Manage Courses & Assign Lecturers
          </Link>
          <button
            onClick={() => alert('Feature: Generate Excel report (Extra Credit)')}
            style={{
              padding: '12px 20px',
              backgroundColor: '#27ae60',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            📥 Export Reports (Excel)
          </button>
        </div>
      </section>

      {/* Courses Overview */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Courses Overview</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Course Name</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Code</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Assigned Lecturer</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id} style={{ textAlign: 'center' }}>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{course.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{course.code}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{course.lecturer}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                  <span style={{ color: course.status === 'Active' ? '#27ae60' : '#e67e22' }}>
                    {course.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* PRL Reports */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Reports from Principal Lecturers (PRL)</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>PRL</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Course</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Week</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Date</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {prlReports.map(report => (
              <tr key={report.id} style={{ textAlign: 'center' }}>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{report.prl}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{report.course}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{report.week}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{report.date}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                  <span style={{ color: report.status === 'Reviewed' ? '#27ae60' : '#f39c12' }}>
                    {report.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Lecturers List */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Lecturers Under Your Program</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Name</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Email</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Courses Taught</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Avg. Rating</th>
            </tr>
          </thead>
          <tbody>
            {lecturers.map(lec => (
              <tr key={lec.id} style={{ textAlign: 'center' }}>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{lec.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{lec.email}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{lec.courses}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                  {'⭐'.repeat(Math.round(lec.rating))} ({lec.rating})
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Rating Section */}
      <section>
        <h2>Performance Rating</h2>
        <p style={{ color: '#7f8c8d' }}>
          As Program Leader, you may rate Principal Lecturers or provide feedback on program performance.
        </p>
        <button
          onClick={() => alert('Rating form would open here (mock)')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#2980b9',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          ⭐ Submit Program Rating
        </button>
      </section>
    </div>
  );
}