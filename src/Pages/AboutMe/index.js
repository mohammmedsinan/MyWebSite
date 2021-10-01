import React, { useEffect } from 'react';
import SecondSection from './SecondSection';
import FirstScene from './FirstScene';
import Media from 'react-media';
import './Media.css';
import { gsap } from 'gsap';

function index() {
  return (
    <div style={{ backgroundColor: '#351a63' }}>
      <div
        style={{ backgroundColor: '#351a63', width: '100vw', height: '100vh', overflow: 'hidden' }}
        className="the-parent-container"
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
      <SecondSection />
    </div>
  );
}

export default index;
