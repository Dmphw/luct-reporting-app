import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ReportForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    faculty: 'FITC', // Faculty of Information Communication Technology
    className: '',
    week: '',
    date: '',
    courseName: '',
    courseCode: '',
    lecturerName: '',
    studentsPresent: '',
    totalRegistered: '', // Should be auto-filled or entered once
    venue: '',
    scheduledTime: '',
    topic: '',
    outcomes: '',
    recommendations: ''
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.className.trim()) newErrors.className = 'Class Name is required.';
    if (!formData.week || isNaN(formData.week)) newErrors.week = 'Week must be a number.';
    if (!formData.date) newErrors.date = 'Date is required.';
    if (!formData.courseName.trim()) newErrors.courseName = 'Course Name is required.';
    if (!formData.courseCode.trim()) newErrors.courseCode = 'Course Code is required.';
    if (!formData.lecturerName.trim()) newErrors.lecturerName = 'Lecturer’s Name is required.';
    if (!formData.studentsPresent || isNaN(formData.studentsPresent)) newErrors.studentsPresent = 'Students Present must be a number.';
    if (!formData.totalRegistered || isNaN(formData.totalRegistered)) newErrors.totalRegistered = 'Total Registered must be a number.';
    if (!formData.venue.trim()) newErrors.venue = 'Venue is required.';
    if (!formData.scheduledTime) newErrors.scheduledTime = 'Scheduled Time is required.';
    if (!formData.topic.trim()) newErrors.topic = 'Topic Taught is required.';
    if (!formData.outcomes.trim()) newErrors.outcomes = 'Learning Outcomes are required.';
    if (!formData.recommendations.trim()) newErrors.recommendations = 'Recommendations are required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitError('Please fix the errors above.');
      return;
    }

    // Mock: Simulate failed submission (as shown in your screenshot)
    // In real app: send to Node.js + SQL backend
    setTimeout(() => {
      setSubmitError('Failed to submit report');
    }, 800);

    // Optional: Log data to console
    console.log('Submitted Report:', formData);
  };

  return (
    <div style={{
      maxWidth: '900px',
      margin: '40px auto',
      padding: '30px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#2c3e50' }}>
        LUCT Lecturer Reporting Form
      </h2>

      {/* Error Alert */}
      {submitError && (
        <div style={{
          backgroundColor: '#d1ecf1',
          color: '#0c5460',
          padding: '15px',
          borderRadius: '6px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span style={{ fontSize: '20px' }}>❌</span>
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label htmlFor="faculty" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Faculty Name
            </label>
            <input
              type="text"
              id="faculty"
              name="faculty"
              value={formData.faculty}
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
            {errors.faculty && <div style={{ color: 'red', marginTop: '5px' }}>{errors.faculty}</div>}
          </div>

          <div>
            <label htmlFor="week" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Week of Reporting
            </label>
            <input
              type="number"
              id="week"
              name="week"
              value={formData.week}
              onChange={handleChange}
              required
              min="1"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '16px'
              }}
            />
            {errors.week && <div style={{ color: 'red', marginTop: '5px' }}>{errors.week}</div>}
          </div>

          <div>
            <label htmlFor="className" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Class Name
            </label>
            <input
              type="text"
              id="className"
              name="className"
              value={formData.className}
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
            {errors.className && <div style={{ color: 'red', marginTop: '5px' }}>{errors.className}</div>}
          </div>

          <div>
            <label htmlFor="studentsPresent" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Actual Students Present
            </label>
            <input
              type="number"
              id="studentsPresent"
              name="studentsPresent"
              value={formData.studentsPresent}
              onChange={handleChange}
              required
              min="0"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '16px'
              }}
            />
            {errors.studentsPresent && <div style={{ color: 'red', marginTop: '5px' }}>{errors.studentsPresent}</div>}
          </div>

          <div>
            <label htmlFor="totalRegistered" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Total Registered Students
            </label>
            <input
              type="number"
              id="totalRegistered"
              name="totalRegistered"
              value={formData.totalRegistered}
              onChange={handleChange}
              required
              min="0"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '16px'
              }}
            />
            {errors.totalRegistered && <div style={{ color: 'red', marginTop: '5px' }}>{errors.totalRegistered}</div>}
          </div>

          <div>
            <label htmlFor="venue" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Venue
            </label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={formData.venue}
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
            {errors.venue && <div style={{ color: 'red', marginTop: '5px' }}>{errors.venue}</div>}
          </div>

          <div>
            <label htmlFor="date" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Date of Lecture
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
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
            {errors.date && <div style={{ color: 'red', marginTop: '5px' }}>{errors.date}</div>}
          </div>

          <div>
            <label htmlFor="scheduledTime" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Scheduled Lecture Time
            </label>
            <input
              type="time"
              id="scheduledTime"
              name="scheduledTime"
              value={formData.scheduledTime}
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
            {errors.scheduledTime && <div style={{ color: 'red', marginTop: '5px' }}>{errors.scheduledTime}</div>}
          </div>

          <div>
            <label htmlFor="courseName" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Course Name
            </label>
            <input
              type="text"
              id="courseName"
              name="courseName"
              value={formData.courseName}
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
            {errors.courseName && <div style={{ color: 'red', marginTop: '5px' }}>{errors.courseName}</div>}
          </div>

          <div>
            <label htmlFor="courseCode" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Course Code
            </label>
            <input
              type="text"
              id="courseCode"
              name="courseCode"
              value={formData.courseCode}
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
            {errors.courseCode && <div style={{ color: 'red', marginTop: '5px' }}>{errors.courseCode}</div>}
          </div>

          <div>
            <label htmlFor="lecturerName" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Lecturer’s Name
            </label>
            <input
              type="text"
              id="lecturerName"
              name="lecturerName"
              value={formData.lecturerName}
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
            {errors.lecturerName && <div style={{ color: 'red', marginTop: '5px' }}>{errors.lecturerName}</div>}
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="topic" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
            Topic Taught
          </label>
          <textarea
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
            rows="3"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
          {errors.topic && <div style={{ color: 'red', marginTop: '5px' }}>{errors.topic}</div>}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="outcomes" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
            Learning Outcomes
          </label>
          <textarea
            id="outcomes"
            name="outcomes"
            value={formData.outcomes}
            onChange={handleChange}
            required
            rows="3"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
          {errors.outcomes && <div style={{ color: 'red', marginTop: '5px' }}>{errors.outcomes}</div>}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="recommendations" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
            Recommendations
          </label>
          <textarea
            id="recommendations"
            name="recommendations"
            value={formData.recommendations}
            onChange={handleChange}
            required
            rows="3"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
          {errors.recommendations && <div style={{ color: 'red', marginTop: '5px' }}>{errors.recommendations}</div>}
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Submit Report
        </button>
      </form>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button
          onClick={() => navigate('/lecturer')}
          style={{
            padding: '8px 16px',
            backgroundColor: '#95a5a6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}