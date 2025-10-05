import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [user] = useState(JSON.parse(localStorage.getItem('user')));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Mock enrolled classes (replace with API call in real app)
  const enrolledClasses = [
    {
      id: 1,
      course: 'Web Development',
      code: 'WD101',
      lecturer: 'Dr. Smith',
      day: 'Monday',
      time: '09:00',
      venue: 'Lab 3',
      attendance: '42/45'
    },
    {
      id: 2,
      course: 'Database Systems',
      code: 'DB201',
      lecturer: 'Ms. Lee',
      day: 'Wednesday',
      time: '11:00',
      venue: 'Room 204',
      attendance: '38/40'
    }
  ];

  // Mock ratings (students can rate lecturers)
  const [ratings, setRatings] = useState({
    'Dr. Smith': 4,
    'Ms. Lee': 5
  });

  const handleRatingChange = (lecturer, rating) => {
    setRatings({ ...ratings, [lecturer]: rating });
    // In real app: send to backend
    alert(`Thank you! Your rating for ${lecturer} has been submitted.`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        borderBottom: '2px solid #27ae60',
        paddingBottom: '10px'
      }}>
        <h1 style={{ color: '#2c3e50' }}>Student Dashboard</h1>
        <div>
          <span style={{ marginRight: '15px' }}>
            Welcome, <strong>{user?.email || 'Student'}</strong>
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

      {/* Monitoring Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2>My Classes (Monitoring)</h2>
        <p>Track your attendance, schedule, and course progress.</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ border: '1px solid #ddd', padding: '12px' }}>Course</th>
              <th style={{ border: '1px solid #ddd', padding: '12px' }}>Lecturer</th>
              <th style={{ border: '1px solid #ddd', padding: '12px' }}>Day</th>
              <th style={{ border: '1px solid #ddd', padding: '12px' }}>Time</th>
              <th style={{ border: '1px solid #ddd', padding: '12px' }}>Venue</th>
              <th style={{ border: '1px solid #ddd', padding: '12px' }}>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {enrolledClasses.map(cls => (
              <tr key={cls.id} style={{ textAlign: 'center' }}>
                <td style={{ border: '1px solid #ddd', padding: '12px' }}>{cls.course} ({cls.code})</td>
                <td style={{ border: '1px solid #ddd', padding: '12px' }}>{cls.lecturer}</td>
                <td style={{ border: '1px solid #ddd', padding: '12px' }}>{cls.day}</td>
                <td style={{ border: '1px solid #ddd', padding: '12px' }}>{cls.time}</td>
                <td style={{ border: '1px solid #ddd', padding: '12px' }}>{cls.venue}</td>
                <td style={{ border: '1px solid #ddd', padding: '12px' }}>{cls.attendance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Rating Section */}
      <section>
        <h2>Lecturer Rating</h2>
        <p>Help improve teaching quality by rating your lecturers.</p>
        {enrolledClasses.map(cls => (
          <div
            key={cls.id}
            style={{
              marginBottom: '20px',
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <h3>{cls.lecturer} — {cls.course}</h3>
            <div>
              <label>Rate this lecturer:</label>
              <div style={{ marginTop: '8px' }}>
                {[1, 2, 3, 4, 5].map(star => (
                  <span
                    key={star}
                    onClick={() => handleRatingChange(cls.lecturer, star)}
                    style={{
                      fontSize: '24px',
                      cursor: 'pointer',
                      color: star <= (ratings[cls.lecturer] || 0) ? '#f39c12' : '#ccc',
                      marginRight: '5px'
                    }}
                  >
                    ★
                  </span>
                ))}
                <span style={{ marginLeft: '10px', color: '#7f8c8d' }}>
                  ({ratings[cls.lecturer] || 0} / 5)
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Extra Credit Ready */}
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#e8f4f8', borderRadius: '6px' }}>
        <strong>💡 Extra Credit Opportunity:</strong> Implement "Search Classes" or "Export My Ratings to Excel".
      </div>
    </div>
  );
}