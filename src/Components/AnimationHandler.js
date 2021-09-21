import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import '../Pages/Portfolio/midea.css';
import { Button } from 'antd';

function AnimationHandler() {
  const TL = gsap.timeline({ defaults: { duration: 0.7 } });
  const TL1 = gsap.timeline({ defaults: { duration: 0.7 } });
  useEffect(() => {
    TL.fromTo('.animation-h-3', { y: '-100%' }, { y: '0%', duration: 2.5 });
    TL.fromTo('.animation-h-1', { x: '100%' }, { x: '-100%', duration: 1 }, 0.6);
    TL.fromTo('.section-0-p', { y: '-100vh' }, { y: '0%', duration: 1 }, 0.7);
    TL.fromTo('.section-0-p-1', { y: '-100vh' }, { y: '0%', duration: 1 }, 1.4);
    TL.fromTo('.animation-h-2', { x: '-100%' }, { x: '100%', duration: 1 }, 1.5);
    TL.fromTo(
      '.section-0-btn',
      { y: '-100vh', opacity: '0' },
      { y: '0%', opacity: '1', duration: 0.3 },
    );
    //animation Number Two
  }, []);
  return (
    <div
      className="container-animation-h-1"
      style={{
        position: 'absolute',
        overflow: 'hidden',
        zIndex: '9999999999999999',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          backgroundColor: '#57437f',
          zIndex: '999999999999999',
          height: '300vh',
          width: '100vw',
          position: 'absolute',
          overflow: 'hidden',
        }}
        className="animation-h-3"
      />
      <div
        style={{
          position: 'absolute',
          zIndex: '9999999999999999999999999',
          display: 'flex',
          width: '100vw',
          justifyContent: 'center ',
          height: '100vh',
          flexDirection: 'column',
        }}
      >
        <p
          style={{
            textAlign: 'center',
            width: '100vw',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '25px',
          }}
          className="section-0-p"
        >
          This is a Navigation Bar or just pretend this is it
        </p>
        <p
          className="section-0-p-1"
          style={{
            textAlign: 'center',
            width: '100vw',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '25px',
          }}
        >
          If you need to navigating between The pages just Click on the door
        </p>
      </div>
      <Button
        className="section-0-btn"
        style={{
          zIndex: '999999999999999',
          marginTop: '32%',
          opacity: '0',
        }}
        onClick={() =>
          TL.reverse().then(() => {
            TL1.to('.container-animation-h-1', { display: 'none' }, 0.1);
          })
        }
      >
        Understandable
      </Button>
      <div
        className="animation-h-1"
        style={{
          backgroundColor: '#8a80a9',
          height: '40vh',
          zIndex: '9999999999999999',
          width: '100vw',
          position: 'absolute',
        }}
      />
      <div
        className="animation-h-2"
        style={{
          backgroundColor: '#8a80a9',
          height: '40vh',
          zIndex: '9999999999999999',
          width: '100vw',
          position: 'absolute',
          top: '35%',
        }}
      />
    </div>
  );
}

export default AnimationHandler;
