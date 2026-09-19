import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import StudentList from './components/StudentList';
import Footer from './components/Footer';

export default function App() {
  const initialStudents = [
    { name: 'Partha Pritam Sen', rollNo: 'TIU-BCA-2023-01', department: 'Computer Applications', semester: '4th Semester', cgpa: 7.67, photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Partha' },
    { name: 'Sneha Roy', rollNo: 'TIU-BCA-2023-02', department: 'Computer Applications', semester: '4th Semester', cgpa: 9.12, photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha' },
    { name: 'Aarav Sharma', rollNo: 'TIU-BCA-2023-03', department: 'Information Technology', semester: '4th Semester', cgpa: 8.45, photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav' },
    { name: 'Rohan Das', rollNo: 'TIU-BCA-2023-04', department: 'Computer Science', semester: '4th Semester', cgpa: 6.90, photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan' },
    { name: 'Ananya Verma', rollNo: 'TIU-BCA-2023-05', department: 'Computer Applications', semester: '4th Semester', cgpa: 8.88, photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya' }
  ];

  const [students, setStudents] = useState(initialStudents);
  const [sortOrder, setSortOrder] = useState('default');

  const handleSort = (order) => {
    setSortOrder(order);
    const sortedArray = [...students].sort((a, b) => {
      if (order === 'desc') return b.cgpa - a.cgpa;
      if (order === 'asc') return a.cgpa - b.cgpa;
      return 0;
    });
    setStudents(sortedArray);
  };

  return (
    <div className="app-wrapper">
      <Header totalStudents={students.length} developerName="Partha Pritam Sen" />

      <main className="main-content">
        <div className="controls-bar">
          <h2>Enrolled Students</h2>
          <div className="sort-controls">
            <span>Sort by CGPA:</span>
            <button className={`sort-btn ${sortOrder === 'desc' ? 'active' : ''}`} onClick={() => handleSort('desc')}>High → Low ↓</button>
            <button className={`sort-btn ${sortOrder === 'asc' ? 'active' : ''}`} onClick={() => handleSort('asc')}>Low → High ↑</button>
            <button className="reset-btn" onClick={() => { setSortOrder('default'); setStudents(initialStudents); }}>Reset</button>
          </div>
        </div>

        <StudentList students={students} />
      </main>

      <Footer author="Partha Pritam Sen" />
    </div>
  );
}