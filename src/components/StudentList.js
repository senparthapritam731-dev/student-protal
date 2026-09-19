import React from 'react';
import StudentCard from './StudentCard';

export default function StudentList({ students }) {
  if (!students || students.length === 0) {
    return <p className="no-data">No student records found.</p>;
  }

  return (
    <div className="student-grid">
      {students.map((student) => (
        <StudentCard
          key={student.rollNo}
          name={student.name}
          rollNo={student.rollNo}
          department={student.department}
          semester={student.semester}
          cgpa={student.cgpa}
          photo={student.photo}
        />
      ))}
    </div>
  );
}