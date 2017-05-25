import React from 'react';

export default function Campuses (props) {

  const campuses = props.campuses;

  return (
    <div>
      <h3>Campuses</h3>
      <div key={campusId} className="list-group">
        {
          campuses.map(campus => {
            return (
              <div className="list-group-item" key={campus.id}>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}