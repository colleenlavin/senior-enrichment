import React from 'react';

export default function Students (props) {

  const students = props.students;

  return (
    <div>
      <h3>Students</h3>
      <div className="list-group">
        {
          students.map(student => {
            return (
              <div className="list-group-item" key={student.id}>
                 <Link to={`/students/${student.id}`}>{ student.name }</Link>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}