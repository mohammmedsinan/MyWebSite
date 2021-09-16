import React from 'react';
import Bushes from '../../Components/Bushes';
import { useHistory } from 'react-router-dom';
import { gsap, Power2 } from 'gsap';
import './style.css';
import Media from 'react-media';

function Home() {
  const history = useHistory();
  const TL = gsap.timeline({ defaults: { duration: 0.5 } });
  const AnimationHandler = () => {
    TL.to('.Main-Img', { scale: 6, ease: Power2.easeIn }).then((e) => history.push('/corridor'));
  };
  return (
    <Media query="(min-width: 700px)">
      {(mtaches) => {
        return (
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <div
              style={{
                width: '350px',
                height: '320px',
                position: 'absolute',
                top: '37%',
                left: '18%',
              }}
              className="TriggerSystem"
              onClick={AnimationHandler}
            ></div>
            <div
              className="Main-Img"
              style={{ transformOrigin: mtaches ? '30% 80%' : '40% 80%' }}
            ></div>
          </div>
        );
      }}
    </Media>
  );
}

export default Home;
