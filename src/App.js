// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import StudentDashboard from './pages/student/StudentDashboard';
import LecturerDashboard from './pages/lecturer/LecturerDashboard';
import PRLDashboard from './pages/prl/PRLDashboard';
import PLDashboard from './pages/pl/PLDashboard';
// Import additional pages
import ReportForm from './pages/lecturer/ReportForm';
import Reportview from './pages/prl/Reportview';
import Coursemanagement from './pages/pl/Coursemanagement';

// Protected Route Component
const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) return <Navigate to="/login" />;
  if (!allowedRoles.includes(user.role)) return <Navigate to="/login" />;
  return children;
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Student Routes */}
          <Route
            path="/student"
            element={
              <ProtectedRoute allowedRoles={['student']}>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />

          {/* Lecturer Routes */}
          <Route
            path="/lecturer"
            element={
              <ProtectedRoute allowedRoles={['lecturer']}>
                <LecturerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/lecturer/report"
            element={
              <ProtectedRoute allowedRoles={['lecturer']}>
                <ReportForm />
              </ProtectedRoute>
            }
          />

          {/* PRL Routes */}
          <Route
            path="/prl"
            element={
              <ProtectedRoute allowedRoles={['prl']}>
                <PRLDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/prl/reports"
            element={
              <ProtectedRoute allowedRoles={['prl']}>
                <Reportview />
              </ProtectedRoute>
            }
          />

          {/* PL Routes */}
          <Route
            path="/pl"
            element={
              <ProtectedRoute allowedRoles={['pl']}>
                <PLDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pl/courses"
            element={
              <ProtectedRoute allowedRoles={['pl']}>
                <Coursemanagement />
              </ProtectedRoute>
            }
          />

          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;