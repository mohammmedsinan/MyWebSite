import React from 'react';
import FirstScene from './FirstScene';
import Media from 'react-media';

function index() {
  return (
    <div
      style={{ backgroundColor: '#351a63', width: '100vw', height: '100vh', overflow: 'hidden' }}
    >
      {/* Desktop Session */}
      <Media query="(min-width:1440px)">
        {(matches) => {
          return matches && <FirstScene />;
        }}
      </Media>
      {/* Tablet Session */}
      <Media query="(max-width:700px)">
        {(matches) => {
          return (
            matches && <FirstScene stylesintroduction1={{ fontSize: '10px', color: 'white' }} />
          );
        }}
      </Media>
      {/* Mobile Session <Mobile />*/}
    </div>
  );
}

export default index;
