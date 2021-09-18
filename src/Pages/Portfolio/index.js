import React, { useEffect } from 'react';
import { gsap, Power4 } from 'gsap';
import './style.css';

function Portfolio() {
  let p = false;
  const TL = gsap.timeline({ defaults: { duration: 3 } });
  const TL1 = gsap.timeline({ defaults: { duration: 0.4 } });
  useEffect(() => {}, []);
  const PortfolioPreview = ({ className }) => {
    return (
      <div
        onClick={() => {
          p == false && TL1.to(`.${className}`, { scaleX: 0.001, scaleY: 0.001 });
          p == false &&
            TL1.to(`.${className}`, {
              scaleX: 1,
              scaleY: 1,
              backgroundColor: 'red',
              ease: Power4.easeIn,
            });
        }}
        className={className}
        style={{
          width: '40%',
          backgroundColor: '#29809e',
          height: '40vh',
          marginBottom: '50px',
          cursor: 'pointer',
        }}
      >
        {/* ------------------LOGIC IS HERE------------------- */}
      </div>
    );
  };
  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <div className="LOADFING-SECTION"></div>
      <div
        style={{ width: '100%', height: '100%', backgroundColor: '#341861', paddingTop: '150px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <PortfolioPreview className="a" />
          <PortfolioPreview className="b" />
          {/*---------------------------*/}
          <PortfolioPreview className="c" />
          <PortfolioPreview className="d" />
          {/*---------------------------*/}
          <PortfolioPreview className="e" />
          <PortfolioPreview className="f" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
