import React, { useEffect } from 'react';
import { gsap, Power2 } from 'gsap';

const constantStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '100%',
  backgroundColor: 'purple',
};
function SecondSection() {
  const TL = gsap.timeline({ defaults: { duration: 1.6, ease: Power2 } });
  // useEffect(() => {
  //   TL.to('.tester1', { x: '84vw', boxShadow: '10px 0px 30px purple' }, 24);
  //   TL.to('.tester2', { x: '-84vw', boxShadow: '10px 0px 30px purple' }, 24.1);
  //   TL.to('.h1-section-5-B', { opacity: 1 }, 24.2);
  //   TL.to('.container-section5-B', { y: '-100%' });
  // }, []);
  useEffect(() => {
    TL.to('.tester1', { x: '84vw', boxShadow: '10px 0px 30px purple' });
    TL.to('.tester2', { x: '-84vw', boxShadow: '10px 0px 30px purple' }, 0.1);
    TL.to('.h1-section-5-B', { opacity: 1 }, 0.7);
    TL.to('.container-section5-B', { y: '-100%', duration: 1 }, 2);
  }, []);
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#351a63' }}>
      <div
        className="container-section5-B"
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <div className="tester1" style={{ ...constantStyle }} />
        <h1 className="h1-section-5-B" style={{ color: 'white', opacity: 0, fontSize: '50px' }}>
          My job is to make your business easier
        </h1>
        <div className="tester2" style={{ ...constantStyle }} />
      </div>
    </div>
  );
}

export default SecondSection;
