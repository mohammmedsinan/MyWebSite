import MainDoor from '../../Img/CorridorSection/MainDoor.png';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { gsap, Power2 } from 'gsap';
import Media from 'react-media';
import './style.css';

function Corridor() {
  const [Sections, setSections] = useState({
    FirstSection: false,
    SecondSection: true,
    ThirdSection: false,
    FourthSection: false,
  });
  const TL = gsap.timeline({ defaults: { duration: 0.5 } });
  const history = useHistory();
  const AnimationHandler = (className, translateX, CallBack) => {
    TL.to('.TheCorridor', {
      scale: 2.2,
      ease: Power2.easeIn,
      translateY: '-60%',
      translateX: translateX,
    }).duration(0.6);
    TL.to(`.${className}`, {
      ease: Power2.easeIn,
    }).then((e) => history.push(`/${CallBack}`));
  };
  useEffect(() => {
    TL.from('.TheCorridor', { scale: 1.4, ease: Power2.easeInOut });
  }, []);
  const ImgFunction = ({ src, width, className, translateX, CallBack, textInside, fontSize }) => {
    return (
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        className="container"
      >
        <p id={className} style={{ fontSize: fontSize }} className="neon">
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
    <div style={{ overflow: 'hidden' }}>
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
                <p>Top</p>
                <p>Down</p>
                {Sections.FirstSection && (
                  <ImgFunction
                    className="a"
                    textInside="Portfolio"
                    CallBack="Portfolio"
                    width="30vw"
                    fontSize="30px"
                  />
                )}
                {Sections.SecondSection && (
                  <ImgFunction
                    className="b"
                    textInside="Experience"
                    CallBack="Experience"
                    width="30vw"
                    fontSize="30px"
                  />
                )}
                {Sections.ThirdSection && (
                  <ImgFunction
                    className="c"
                    textInside="About Me"
                    CallBack="About-Me"
                    width="30vw"
                    fontSize="30px"
                  />
                )}
                {Sections.FourthSection && (
                  <ImgFunction
                    className="d"
                    textInside="Contact Me"
                    CallBack="Contact-Me"
                    width="30vw"
                    fontSize="30px"
                  />
                )}
              </>
            );
          }}
        </Media>
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
}
*/
