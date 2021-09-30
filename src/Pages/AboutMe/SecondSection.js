import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import FirstPage from '../../Components/AboutMeComp/FirstPage';
import SectionA from './SectionA';
import SectionB from './SectionB';
import React, { useEffect, useState } from 'react';
import { gsap, Power2 } from 'gsap';

const ArrayComponents = [<SectionA />, <SectionB />];
const constantStyle2 = {
  fontSize: '90px',
  color: 'white',
  cursor: 'pointer',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#4e327d',
};

function SecondSection() {
  const TL = gsap.timeline({ defaults: { duration: 0.6, ease: Power2 } });
  // useEffect(() => {
  //   TL.to('.tester1', { x: '84vw', boxShadow: '10px 0px 30px purple' }, 24.5);
  //   TL.to('.tester2', { x: '-84vw', boxShadow: '10px 0px 30px purple' }, 24.6);
  //   TL.to('.h1-section-5-B', { opacity: 1 }, 24.7);
  //   TL.to('.container-section5-B', { y: '-100%' });
  //   TL.to('.container-section5-B', { display: 'none' }, 25.5);
  // }, []);
  useEffect(() => {
    TL.fromTo('.arrow-1', { x: '-100vw' }, { x: '0vw', opacity: 1 });
    TL.fromTo('.arrow-2', { x: '100vw' }, { x: '0vw', opacity: 1 }, 0.1);
  }, []);
  const [CounterSwitcher, setCounterSwitcher] = useState(0);
  const [History, setHistory] = useState(null);
  const OnClickHandlerArrows = (condtion) => {
    setCounterSwitcher(condtion);
    setHistory(CounterSwitcher);

    TL.fromTo(
      '.Ender-the-Animation',
      { scale: '1', display: 'block', y: '0%', filter: 'blur(10px)' },
      { scale: '0.2', y: '-100%', display: 'none' },
    );
    TL.fromTo(
      '.Starter-the-Animation',
      { y: '-100vh', display: 'none', scale: 0.2, filter: 'blur(10px)' },
      { y: '0vh', display: 'block' },
    );
    TL.to('.Starter-the-Animation', { scale: 1, filter: 'blur(0px)' });
  };
  return (
    <div style={{ height: '100%', backgroundColor: '#4e327d', minHeight: '100vh' }}>
      {/*main scenes */}
      <div style={{ display: 'flex' }}>
        <div style={{ opacity: 0 }} className="arrow-1">
          <CaretLeftOutlined
            style={{ ...constantStyle2 }}
            onClick={() => CounterSwitcher > 0 && OnClickHandlerArrows(CounterSwitcher - 1)}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100vw' }}>
          <div style={{ width: '100%' }} className="Starter-the-Animation">
            {ArrayComponents[CounterSwitcher]}
          </div>
          <div style={{ width: '100%', display: 'none' }} className="Ender-the-Animation">
            {ArrayComponents[History]}
          </div>
        </div>
        <div style={{ opacity: 0 }} className="arrow-2">
          <CaretRightOutlined
            style={{ ...constantStyle2 }}
            onClick={() => CounterSwitcher <= 0 && OnClickHandlerArrows(CounterSwitcher + 1)}
          />
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
