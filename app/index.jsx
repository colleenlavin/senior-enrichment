import React from 'react';
import ReactDOM from 'react-dom';
import Root from './main';

console.log('in bundle')
ReactDOM.render(
  //<h1>Hello Colleen </h1>,
  <Root />,
  document.getElementById('main')
);