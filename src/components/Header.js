import React from 'react';

export default function Header({ totalStudents, developerName }) {
  return (
    <header className="portal-header">
      <div className="header-container">
        <h1>Student Information Portal</h1>
        <p className="portal-sub">
          Developer: <span>{developerName}</span> | Total Enrolled: <strong>{totalStudents}</strong>
        </p>
      </div>
    </header>
  );
}