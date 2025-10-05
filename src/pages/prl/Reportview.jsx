// src/pages/prl/Reportview.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Reportview() {
  const navigate = useNavigate();

  // Mock reports (replace with API later)
  const reports = [
    { id: 1, lecturer: 'Dr. Smith', course: 'Web Dev', week: 5, status: 'Pending' },
    { id: 2, lecturer: 'Ms. Lee', course: 'DB Systems', week: 5, status: 'Reviewed' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Reports for Assessment</h2>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Lecturer</th>
            <th>Course</th>
            <th>Week</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(report => (
            <tr key={report.id}>
              <td>{report.lecturer}</td>
              <td>{report.course}</td>
              <td>{report.week}</td>
              <td>{report.status}</td>
              <td><button>View & Feedback</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate('/prl')} style={{ marginTop: '20px' }}>
        Back to Dashboard
      </button>
    </div>
  );
}