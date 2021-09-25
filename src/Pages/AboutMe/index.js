import React from 'react';
import DesktopSession from './DesktopSession';

function index() {
  return (
    <div
      style={{ backgroundColor: '#351a63', width: '100vw', height: '100vh', overflow: 'hidden' }}
    >
      {/* Desktop Session */}
      <DesktopSession />
      {/* Tablet Session */}
      {/* Mobile Session */}
    </div>
  );
}

export default index;
