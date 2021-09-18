import { UpCircleOutlined, DownCircleOutlined } from '@ant-design/icons';
import MainDoor from '../../Img/CorridorSection/MainDoor.png';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { gsap, Power2, Power0 } from 'gsap';
import Media from 'react-media';
import './style.css';
import './media.css';

function Corridor() {
  const [Sections, setSections] = useState(0);
  const TL = gsap.timeline({ defaults: { duration: 0.5 } });
  const TL1 = gsap.timeline({ defaults: { duration: 0.4 } });

  const history = useHistory();
  const AnimationHandler = (className, translateX, CallBack) => {
    TL.to('.TheCorridor', {
      scale: 2.2,
      ease: Power2.easeIn,
      translateY: '-60%',
      translateX: translateX,
    })
      .duration(0.6)
      .then((e) => history.push(`/${CallBack}`));
    TL.to(`.${className}`, {
      ease: Power2.easeIn,
    });
  };
  useEffect(() => {
    TL.from('.TheCorridor', { scale: 1.4, ease: Power2.easeInOut });
  }, []);
  const ImgFunction = ({
    src,
    width,
    className,
    translateX,
    CallBack,
    textInside,
    fontSize,
    translate,
  }) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        className="container"
      >
        <p
          id={className}
          style={{
            fontSize: fontSize,
            transform: translate ? 'translate(0px , 90px)' : 'translate(0px , 70px)',
          }}
          className="neon"
        >
          {textInside}
        </p>
        <img
          className={className}
          src={src ? src : MainDoor}
          style={{ width: width ? width : '12vw' }}
          onClick={() => AnimationHandler(className, translateX, CallBack)}
        />
      </div>
    );
  };
  return (
    <div style={{ backgroundColor: '#412f61', overflow: 'hidden' }}>
      <div className="Main-Container" style={{ overflow: 'hidden' }}>
        <div className="TheCorridor">
          <Media query="(min-width : 800px)">
            {(matches) => {
              return matches ? (
                <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100vw' }}>
                  <ImgFunction
                    className="a"
                    translateX="60%"
                    textInside="Portfolio"
                    CallBack="Portfolio"
                  />
                  <ImgFunction
                    className="b"
                    translateX="15%"
                    textInside="Experience"
                    CallBack="Experience"
                  />
                  <ImgFunction
                    className="c"
                    translateX="-25%"
                    textInside="About Me"
                    CallBack="About-Me"
                  />
                  <ImgFunction
                    className="d"
                    translateX="-60%"
                    textInside="Contact Me"
                    CallBack="Contact-Me"
                  />
                </div>
              ) : (
                <>
                  <div
                    style={{
                      position: 'absolute',
                      top: '0px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      height: '100vh',
                      right: '10px',
                    }}
                  >
                    <div>
                      {Sections !== 3 && (
                        <UpCircleOutlined
                          style={{ fontSize: '40px', cursor: 'pointer', color: '#4e93dc' }}
                          onClick={() => {
                            TL1.to('.simple', { y: '-970px', ease: Power0.easeIn })
                              .then(() => setSections(Sections + 1))
                              .then(() => TL1.reverse());
                          }}
                        />
                      )}
                    </div>
                    <div>
                      {Sections > 0 && (
                        <DownCircleOutlined
                          style={{ fontSize: '40px', cursor: 'pointer', color: '#4e93dc' }}
                          onClick={() => {
                            TL1.to('.simple', { y: '770px', ease: Power0.easeIn })
                              .then(() => setSections(Sections - 1))
                              .then(() => TL1.reverse());
                          }}
                        />
                      )}
                    </div>
                  </div>
                  <div className="simple">
                    {Sections === 0 && (
                      <ImgFunction
                        className="a"
                        textInside="Portfolio"
                        CallBack="Portfolio"
                        width="40vw"
                        fontSize="25px"
                        translate={true}
                      />
                    )}
                    {Sections === 1 && (
                      <ImgFunction
                        className="b"
                        textInside="Experience"
                        CallBack="Experience"
                        width="40vw"
                        fontSize="25px"
                        translate={true}
                      />
                    )}
                    {Sections === 2 && (
                      <ImgFunction
                        className="c"
                        textInside="About Me"
                        CallBack="About-Me"
                        width="40vw"
                        fontSize="25px"
                        translate={true}
                      />
                    )}
                    {Sections === 3 && (
                      <ImgFunction
                        className="d"
                        textInside="Contact Me"
                        CallBack="Contact-Me"
                        width="40vw"
                        fontSize="25px"
                        translate={true}
                      />
                    )}
                  </div>
                </>
              );
            }}
          </Media>
        </div>
      </div>
    </div>
  );
}

export default Corridor;
/*if (firstSection) {
  reset all the object and make the second = true
}else if (SecondSection) {
  reset all the object and make the Third = true
}else if (ThirdSection){
    reset all the object and make the Fourth = true
}else if (FourthSection) {
    reset all the object and make the First = true
}*/
