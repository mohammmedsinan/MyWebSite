import React from 'react';
import FirstScene from './FirstScene';
import Media from 'react-media';
import './Media.css';

function index() {
  return (
    <div
      style={{ backgroundColor: '#351a63', width: '100vw', height: '100vh', overflowX: 'hidden' }}
    >
      {/* Desktop Session */}
      <Media query="(max-width:2560px)">
        {(matches) => {
          return matches && <FirstScene scale_h1="7" />;
        }}
      </Media>
      {/* Tablet Session */}

      {/* Mobile Session <Mobile />*/}
      <Media query="(max-width:820px)">
        {(matches) => {
          return matches && <FirstScene scale_h1="4" />;
        }}
      </Media>
      <Media query="(max-width:520px)">
        {(matches) => {
          return matches && <FirstScene scale_h1="2" />;
        }}
      </Media>
    </div>
  );
}

export default index;
