import React from 'react';

export default function StudentCard({ name, rollNo, department, semester, cgpa, photo }) {
  return (
    <div className="student-card">
      <div className="card-top">
        <img src={photo} alt={name} className="student-photo" />
        <span className={`cgpa-badge ${cgpa >= 8.0 ? 'high-cgpa' : ''}`}>
          CGPA: {cgpa.toFixed(2)}
        </span>
      </div>
      <div className="card-body">
        <h3 className="student-name">{name}</h3>
        <p className="roll-number">Roll No: {rollNo}</p>
        <div className="card-details">
          <p><strong>Department:</strong> {department}</p>
          <p><strong>Semester:</strong> {semester}</p>
        </div>
      </div>
    </div>
  );
}