import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function PRLDashboard() {
  const navigate = useNavigate();
  const [user] = useState(JSON.parse(localStorage.getItem('user')));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Mock data — replace with API calls in real app
  const courses = [
    { id: 1, name: 'Web Development', code: 'WD101', lecturer: 'Dr. Smith', stream: 'DIT' },
    { id: 2, name: 'Database Systems', code: 'DB201', lecturer: 'Ms. Lee', stream: 'DIT' },
    { id: 3, name: 'Software Engineering', code: 'SE301', lecturer: 'Dr. Brown', stream: 'BSc BIT' }
  ];

  const reports = [
    {
      id: 1,
      lecturer: 'Dr. Smith',
      course: 'Web Development',
      week: 5,
      date: '2025-04-08',
      studentsPresent: 42,
      totalRegistered: 45,
      topic: 'React Components',
      status: 'Pending Feedback',
      feedback: ''
    },
    {
      id: 2,
      lecturer: 'Ms. Lee',
      course: 'Database Systems',
      week: 5,
      date: '2025-04-08',
      studentsPresent: 38,
      totalRegistered: 40,
      topic: 'SQL Joins',
      status: 'Reviewed',
      feedback: 'Good coverage. Include more practical examples next time.'
    }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        borderBottom: '2px solid #e67e22',
        paddingBottom: '10px'
      }}>
        <h1 style={{ color: '#2c3e50' }}>Principal Lecturer (PRL) Dashboard</h1>
        <div>
          <span style={{ marginRight: '15px' }}>
            Welcome, <strong>{user?.email || 'PRL'}</strong>
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
            to="/prl/reports"
            style={{
              padding: '12px 20px',
              backgroundColor: '#e67e22',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 'bold'
            }}
          >
            📋 View & Assess Reports
          </Link>
          <button
            onClick={() => alert('Search functionality (Extra Credit)')}
            style={{
              padding: '12px 20px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            🔍 Search Reports or Lecturers
          </button>
        </div>
      </section>

      {/* Courses Under My Stream */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Courses Under My Stream</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ backgroundColor: '#fef9e7' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Course Name</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Code</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Lecturer</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Stream</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id} style={{ textAlign: 'center' }}>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{course.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{course.code}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{course.lecturer}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{course.stream}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Pending Reports */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Reports Requiring Feedback</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ backgroundColor: '#fef9e7' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Lecturer</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Course</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Week</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Attendance</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Status</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {reports
              .filter(r => r.status === 'Pending Feedback')
              .map(report => (
                <tr key={report.id} style={{ textAlign: 'center' }}>
                  <td style={{ border: '1px solid #ddd', padding: '10px' }}>{report.lecturer}</td>
                  <td style={{ border: '1px solid #ddd', padding: '10px' }}>{report.course}</td>
                  <td style={{ border: '1px solid #ddd', padding: '10px' }}>{report.week}</td>
                  <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                    {report.studentsPresent}/{report.totalRegistered}
                  </td>
                  <td style={{ border: '1px solid #ddd', padding: '10px', color: '#e67e22' }}>
                    {report.status}
                  </td>
                  <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                    <button
                      onClick={() => alert(`Opening feedback form for ${report.course}`)}
                      style={{
                        padding: '6px 12px',
                        backgroundColor: '#27ae60',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      Add Feedback
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>

      {/* Monitoring & Rating */}
      <section style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h2>Monitoring</h2>
          <p style={{ color: '#7f8c8d' }}>
            Track lecture attendance, topic coverage, and report submission compliance across your stream.
          </p>
          <ul>
            <li>✅ 100% report submission this week</li>
            <li>⚠️ Low attendance in DB201 (38/40)</li>
            <li>✅ All topics aligned with syllabus</li>
          </ul>
        </div>

        <div style={{ flex: 1, minWidth: '300px' }}>
          <h2>Lecturer Rating</h2>
          <p style={{ color: '#7f8c8d' }}>
            Submit performance ratings for lecturers under your supervision.
          </p>
          <button
            onClick={() => alert('Rating form would open here')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#9b59b6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            ⭐ Rate Lecturer
          </button>
        </div>
      </section>
    </div>
  );
}