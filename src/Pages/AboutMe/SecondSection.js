import React from 'react';
import './style.css';

const SecondSection = () => {
  const ReUseAble = ({ paragraph }) => {
    return (
      <div>
        <p style={{ color: 'white' }}>{paragraph}</p>
      </div>
    );
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <ReUseAble
        paragraph="Hello Again ,
       Now I am Full Stack Developer And full time web programming  , 
      I did Work as a FreeLancer on so much platforms  , 
      My Biggest experience was programming with a Epic Games Team "
      />
      <ReUseAble
        paragraph="
      My First Programming experience is as a Bot Developer,
      I got a Discord Badge that was given for the Bot Developers,
      My bot was used in 120 servers, I was Programming by using javascript,
      My experience is about less than one year "
      />
      <ReUseAble
        paragraph="
        Also I Have a good experience as a Game Developer ,
       I was Developing Games By using C# , I Have two games unpublished"
      />
    </div>
  );
};

export default SecondSection;
