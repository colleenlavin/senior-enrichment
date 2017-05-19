import React from 'react';
import Students from './Students'

export default function Student (props) {

  const student = props.selectedStudent;

  return (
    <div className="student">
      <div>
        <h3>{ student.name }</h3>
        <img src={ student.imageUrl } className="img-thumbnail"/>
      </div>
      {/*<SongsContainer songs={album.songs} />*/}
      
    </div>
  );
}