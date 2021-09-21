import React from 'react';
import { gsap } from 'gsap';
import MobileSession from './MobileSession';
import TabletSession from './TabletSession';
import DesktopSession from './DesktopSession';

function index() {
  return (
    <div>
      {/* Desktop Session */}
      <DesktopSession />
      {/* Tablet Session */}
      <TabletSession />
      {/* Mobile Session */}
      <MobileSession />
    </div>
  );
}

export default index;
