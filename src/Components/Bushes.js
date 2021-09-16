import React from 'react';
import BushWIthOne from '../Img/Bushes/BushWIthOne.png';
import BushWIthTwo from '../Img/Bushes/BushWIthTwo.png';
import BushWIthThree from '../Img/Bushes/BushWIthThree.png';
import { gsap, Bounce } from 'gsap';
import Media from 'react-media';

function Bushes() {
  let DefaultStyle = {
    position: 'absolute',
    width: '100%',
    top: '52%',
    right: '20%',
    cursor: 'pointer',
  };
  const TL = gsap.timeline({ defaults: { duration: 0.8 } });
  const AnimationHider = (className, intialValue, EndValue) => {
    TL.fromTo(
      `.${className}`,
      { display: 'block', ...intialValue },
      { display: 'none', ...EndValue, ease: Bounce.easeIn },
    );
  };
  function ReUSeABle({
    IMG,
    zINdex,
    className,
    intialValue,
    EndValue,
    styles,
    defaulting = false,
    customStyle,
  }) {
    return (
      <img
        onClick={() => AnimationHider(className, intialValue, EndValue)}
        src={IMG}
        className={className}
        style={
          defaulting === false
            ? {
                ...customStyle,
                minWidth: '100%',
                height: '100vh',
                zIndex: zINdex,
                cursor: 'pointer',
                position: 'absolute',
              }
            : { ...styles }
        }
      />
    );
  }
  return (
    <div
      style={{
        position: 'absolute',
        zINdex: '10',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Media query="(min-width: 800px)">
        {(matches) => {
          return (
            matches && (
              <>
                <ReUSeABle
                  IMG={BushWIthOne}
                  className="One"
                  intialValue={{ x: 0 }}
                  EndValue={{ y: '100%' }}
                  customStyle={{ top: '220px', right: '300px' }}
                />
                <ReUSeABle
                  IMG={BushWIthTwo}
                  className="Two"
                  intialValue={{ x: 0 }}
                  EndValue={{ y: '-100%' }}
                  customStyle={{ bottom: '220px', right: '410px' }}
                />
                <ReUSeABle
                  IMG={BushWIthThree}
                  className="Three"
                  intialValue={{ x: 0 }}
                  EndValue={{ y: '100%' }}
                  customStyle={{ top: '30%', left: '37%' }}
                />
                <ReUSeABle
                  IMG={BushWIthOne}
                  className="Four"
                  intialValue={{ x: 0 }}
                  EndValue={{ y: '-100%' }}
                  customStyle={{ bottom: '30%', left: '37%' }}
                />
                <ReUSeABle
                  IMG={BushWIthThree}
                  className="Five"
                  intialValue={{ y: 0 }}
                  EndValue={{ y: '100%' }}
                  customStyle={{ top: '200px', minWidth: '100%', minHeight: '100vh' }}
                />
                <ReUSeABle
                  IMG={BushWIthTwo}
                  className="six"
                  intialValue={{ y: 0 }}
                  EndValue={{ y: '-100%' }}
                  customStyle={{ bottom: '300px', minWidth: '100%', miniHeight: '100vh' }}
                />
              </>
            )
          );
        }}
      </Media>
      <Media query="(max-width: 800px) and (min-width: 650px)">
        {(matches) => {
          return (
            matches && (
              <>
                <ReUSeABle
                  IMG={BushWIthTwo}
                  className="one"
                  intialValue={{ y: 0 }}
                  EndValue={{ y: '100%' }}
                  defaulting
                  styles={{ ...DefaultStyle }}
                />
                <ReUSeABle
                  IMG={BushWIthThree}
                  className="Two"
                  intialValue={{ y: 0 }}
                  EndValue={{ y: '-100%' }}
                  defaulting
                  styles={{ ...DefaultStyle, top: '-20%' }}
                />
                <ReUSeABle
                  IMG={BushWIthOne}
                  className="Three"
                  intialValue={{ y: 0 }}
                  EndValue={{ y: '100%' }}
                  defaulting
                  styles={{ ...DefaultStyle, right: '-45%' }}
                />
                <ReUSeABle
                  IMG={BushWIthThree}
                  className="Four"
                  intialValue={{ y: 0 }}
                  EndValue={{ y: '-100%' }}
                  defaulting
                  styles={{ ...DefaultStyle, top: '-20%', right: '-45%' }}
                />
                <ReUSeABle
                  IMG={BushWIthThree}
                  className="Six"
                  intialValue={{ y: 0 }}
                  EndValue={{ y: '-100%' }}
                  defaulting
                  styles={{ ...DefaultStyle, top: '0%', right: '-35%', width: '150%' }}
                />
              </>
            )
          );
        }}
      </Media>
      <Media query="(max-width: 649px) and (min-width: 250px)">
        {(matches) => {
          return (
            matches && (
              <>
                <ReUSeABle
                  IMG={BushWIthOne}
                  className="one"
                  intialValue={{ y: 0 }}
                  EndValue={{ y: '100%' }}
                  defaulting
                  styles={{ position: 'absolute', width: '220%', bottom: '-100px', left: '-38%' }}
                />
                <ReUSeABle
                  IMG={BushWIthThree}
                  className="two"
                  intialValue={{ y: 0 }}
                  EndValue={{ y: '-100%' }}
                  defaulting
                  styles={{ position: 'absolute', width: '250%', top: '-120px', left: '-55%' }}
                />
                <ReUSeABle
                  IMG={BushWIthThree}
                  className="Three"
                  intialValue={{ y: 0 }}
                  EndValue={{ y: '-100%' }}
                  defaulting
                  styles={{ position: 'absolute', width: '250%', top: '15%', left: '-60%' }}
                />
              </>
            )
          );
        }}
      </Media>
    </div>
  );
}

export default Bushes;
