import MiddlEastMap from '../../Img/AboutMe/MiddlEastMap.png';
import mongodb from '../../Img/Logos/mongodb.svg';
import express from '../../Img/Logos/express.svg';
import Reacts from '../../Img/Logos/react.svg';
import nodejs from '../../Img/Logos/nodejs.svg';
import SecondSection from './SecondSection';
import React, { useEffect } from 'react';
import { gsap, Power2 } from 'gsap';
import './style.css';

const mainStyle = { fontSize: '250px', color: 'white', textAlign: 'center', margin: '0.2rem' };

function FirstScene({
  stylesintroduction1,
  stylesintroduction2,
  stylesintroduction3,
  sectionH1_1_1,
  sectionH1_1_2,
  sectionH1_2_1,
  sectionH1_3_1,
  sectionH1_3_2,
  FirstLogoStyles,
  FirstText_styles,
}) {
  const TL = gsap.timeline({ defaults: { duration: 0.7, ease: Power2.easeInOut } });
  useEffect(() => {
    TL.fromTo('.section-3-introduction-1', { y: '-100%' }, { y: '7%' });
    TL.fromTo('.section-3-introduction-2', { y: '-100vh' }, { y: '6vh' });
    TL.fromTo('.section-3-introduction-3', { y: '-100vh' }, { y: '10vh', ease: Power2.easeInOut });
    TL.to('.section-3-container', { x: '-100%', ease: Power2.easeInOut }, 3);
    TL.to('.section-3-container', { display: 'none' }, 3);
    TL.fromTo('.section-3-h1-1', { scale: 100 }, { scale: 7, opacity: 1 });
    TL.fromTo('.section-3-h1-2', { scale: 100 }, { scale: 7, opacity: 1 });
    TL.to('.section-3-container-2', { y: '-100%' }, 5.8);
    TL.to('.section-3-container-2', { display: 'none' }, 5.9);
    TL.fromTo('.Map', { y: '100vh' }, { y: '0vh', opacity: 1 });
    TL.fromTo('.section-3-h1-3', { y: '-100vh' }, { y: '0vh', opacity: 1 });
    TL.to('.section-3-container-3', { scale: 8 }, 9);
    TL.to('.Map', { translateY: '-110px' }, 9);
    TL.to('.section-3-container-3', { opacity: 0 }, 9.8);
    TL.to('.section-3-container-3', { display: 'none' }, 9.8);
    TL.fromTo('.section-3-h1-4', { y: '-100vh' }, { y: '0vh', opacity: 1 });
    TL.fromTo('.section-3-h1-5', { y: '-100vh' }, { y: '0vh', opacity: 1 });
    TL.fromTo(
      '.blocker-animation',
      { x: '100vw', opacity: 1 },
      { x: '-100vw', opacity: 1, duration: 3 },
    );
    TL.to('.diving', { opacity: 0 }, 13);
    TL.to('.section-3-container-4', { display: 'none' }, 14);
    TL.fromTo('.imgStyles1', { y: '-100vh' }, { y: '0vh', opacity: 1 });
    TL.fromTo('.imgStyles2', { y: '-100vh' }, { y: '0vh', opacity: 1 });
    TL.fromTo('.imgStyles3', { y: '-100vh' }, { y: '0vh', opacity: 1 });
    TL.fromTo('.imgStyles4', { y: '-100vh' }, { y: '0vh', opacity: 1 });
    TL.fromTo('.section-4-p-1', { y: '-100vh' }, { y: '0vh', opacity: 1 });
    TL.fromTo('.section-4-p-2', { y: '-100vh' }, { y: '0vh', opacity: 1 });
    TL.fromTo('.section-4-p-3', { y: '-100vh' }, { y: '0vh', opacity: 1 });
    TL.fromTo('.section-4-p-4', { y: '-100vh' }, { y: '0vh', opacity: 1 });
    TL.fromTo(
      '.animation-blocker-2',
      { y: '-100vh', opacity: 1 },
      { y: '0vh', opacity: 1, duration: 2 },
    );
    TL.fromTo(
      '.animation-blocker-3',
      { y: '-100vh', opacity: 1 },
      { y: '50vh', opacity: 1, duration: 2 },
      20.5,
    );
    TL.to('.gos', { opacity: 0 }, 21.2);
    TL.to('.animation-blocker-2', { y: '-100vh', duration: 1.6 });
    TL.to('.animation-blocker-3', { y: '100vh', duration: 1.6 }, 22.3);
    TL.to('.section-3-container-5', { display: 'none' }, 23);
    TL.to('.section-3-container-6', { opacity: '1' }, 23.3);
  }, []);
  return (
    <div>
      {/* A Scene Start*/}
      <div className="section-3-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 className="section-3-introduction-1" style={{ ...mainStyle, ...stylesintroduction1 }}>
            Hello
          </h1>
          <h1 className="section-3-introduction-2" style={{ ...stylesintroduction2, ...mainStyle }}>
            ,
          </h1>
        </div>
        <h1
          className="section-3-introduction-3"
          style={{ color: 'white', textAlign: 'center', fontSize: '60px', ...stylesintroduction3 }}
        >
          I am <span style={{ color: '#ac8fd3', fontSize: '80px' }}>Mohammed</span> , Nice to meet
          you
        </h1>
      </div>
      {/* A Scene End*/}
      {/* B Scene Start*/}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          flexDirection: 'column',
        }}
        className="section-3-container-2"
      >
        <h1 className="section-3-h1-1" style={{ opacity: 0, color: '#ac8fd3', ...sectionH1_1_1 }}>
          18
        </h1>
        <h1 className="section-3-h1-2" style={{ opacity: 0, color: 'white', ...sectionH1_1_2 }}>
          is my age
        </h1>
      </div>
      {/* B Scene End*/}
      {/* C Scene Start*/}
      <div
        className="section-3-container-3"
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1
          style={{ fontSize: '60px', color: 'white', opacity: 0, ...sectionH1_2_1 }}
          className="section-3-h1-3"
        >
          I am Living there called <span style={{ color: '#ac8fd3' }}>MIDDLE EAST</span>
        </h1>
        <img src={MiddlEastMap} width="400vw" className="Map" style={{ opacity: 0 }} />
      </div>
      {/* C Scene End*/}
      {/* D Scene Start*/}
      <div className="section-3-container-4" style={{ overflow: 'hidden', position: 'relative' }}>
        <div
          className="blocker-animation"
          style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: '#ac8fd3',
            opacity: 0,
            position: 'absolute',
            zIndex: '999999',
          }}
        ></div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh',
            position: 'relative',
            overflow: 'hidden',
          }}
          className="diving"
        >
          <h1
            style={{ color: 'white', fontSize: '80px', opacity: 0, ...sectionH1_3_1 }}
            className="section-3-h1-4"
          >
            I am a <span style={{ color: '#ac8fd3' }}>FullStack</span> Developer
          </h1>
          <h1
            style={{ color: 'white', fontSize: '60px', opacity: 0, ...sectionH1_3_2 }}
            className="section-3-h1-5"
          >
            <span>, </span>
            <span style={{ color: '#339e40' }}>M</span>
            <span style={{ color: '#cc7c6e' }}>E</span>
            <span style={{ color: '#73ceec' }}>R</span>
            <span style={{ color: '#9abe48' }}>N</span>
            <p style={{ display: 'inline' }}> Stack</p>
          </h1>
        </div>
      </div>
      {/* D Scene End*/}
      {/* E Scene Start*/}
      <div className="section-3-container-5" style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          className="animation-blocker-2"
          style={{
            position: 'absolute',
            height: '50vh',
            width: '100vw',
            opacity: '0',
            zIndex: '9999999999999',
            backgroundColor: '#ac8fd3',
          }}
        />
        <div
          className="animation-blocker-3"
          style={{
            position: 'absolute',
            height: '50vh',
            width: '100vw',
            opacity: '0',
            zIndex: '9999999999999',
            backgroundColor: '#ac8fd3',
          }}
        />
        <div
          className="gos"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            height: '100vh',
          }}
        >
          <div className="img-handler-section-3">
            <img src={mongodb} className="imgStyles1" style={{ ...FirstLogoStyles }} />
            <p className="section-4-p-1" style={{ ...FirstText_styles }}>
              <span style={{ color: '#339e40' }}>M</span>ongo DB
            </p>
          </div>
          <div className="img-handler-section-3">
            <img src={express} className="imgStyles2" style={{ ...FirstLogoStyles }} />
            <p className="section-4-p-2" style={{ ...FirstText_styles }}>
              <span style={{ color: '#cc7c6e' }}>E</span>xpress
            </p>
          </div>
          <div className="img-handler-section-3">
            <img src={Reacts} className="imgStyles3" style={{ ...FirstLogoStyles }} />
            <p className="section-4-p-3" style={{ ...FirstText_styles }}>
              <span style={{ color: '#73ceec' }}>R</span>eact
            </p>
          </div>
          <div className="img-handler-section-3">
            <img src={nodejs} className="imgStyles4" style={{ ...FirstLogoStyles }} />
            <p className="section-4-p-4" style={{ ...FirstText_styles }}>
              <span style={{ color: '#9abe48' }}>N</span>ode JS
            </p>
          </div>
        </div>
      </div>
      {/* E Scene End*/}
      {/* F Scene Start*/}
      <div className="section-3-container-6" style={{ opacity: '0' }}>
        <SecondSection />
      </div>
      {/* F Scene End*/}
    </div>
  );
}

export default FirstScene;
