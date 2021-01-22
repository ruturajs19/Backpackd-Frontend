import React from 'react';

import './Avatar.css';

const Avatar = props => {
  return (
    <div data-test={`avatar-container-${props.name}`} className={`avatar ${props.className}`} style={props.style}>
      <img
        data-test={`avatar-image-${props.name}`}
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
