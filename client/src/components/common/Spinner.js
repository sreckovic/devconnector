import React from 'react';
import spinner from './spinner.gif';

export default () => {
  return (
    <div>
      <img src={spinner} style={{widht: '200px', maring: 'auto', display: 'block'}} alt="Loading..." />
    </div>
  );
};
