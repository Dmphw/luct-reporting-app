// src/pages/pl/Coursemanagement.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Coursemanagement() {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Web Development', code: 'WD101', lecturer: 'Dr. Kgosi' },
    { id: 2, name: 'Database Systems', code: 'DB201', lecturer: 'Ms. Naile' },
    { id: 3, name: 'Financial Accounting',code:'DBFA2105',lecturer:'Miss. Rammeleke'}
  ]);

  const [newCourse, setNewCourse] = useState({ name: '', code: '', lecturer: '' });
  const navigate = useNavigate();

  const handleAdd = () => {
    if (newCourse.name && newCourse.code) {
      setCourses([...courses, { ...newCourse, id: courses.length + 1 }]);
      setNewCourse({ name: '', code: '', lecturer: '' });
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <h2>Course Management</h2>
      
      <h3>Add New Course</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '20px' }}>
        <input
          placeholder="Course Name"
          value={newCourse.name}
          onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
        />
        <input
          placeholder="Course Code"
          value={newCourse.code}
          onChange={(e) => setNewCourse({ ...newCourse, code: e.target.value })}
        />
        <input
          placeholder="Lecturer Name"
          value={newCourse.lecturer}
          onChange={(e) => setNewCourse({ ...newCourse, lecturer: e.target.value })}
        />
        <button onClick={handleAdd} style={{ gridColumn: 'span 3' }}>Add Course</button>
      </div>

      <h3>Current Courses</h3>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Code</th>
            <th>Lecturer</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.code}</td>
              <td>{c.lecturer}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => navigate('/pl')} style={{ marginTop: '20px' }}>
        Back to Dashboard
      </button>
    </div>
  );
}