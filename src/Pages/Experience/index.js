import React, { useEffect } from 'react';
import ExperienceCard from '../../Components/ExperienceCard';
import Reacts from '../../Img/Logos/react.svg';
import webpack from '../../Img/Logos/webpack.svg';
import Express from '../../Img/Logos/express.svg';
import Gsap from '../../Img/Logos/gsap.svg';
import javascript from '../../Img/Logos/javascript.svg';
import less from '../../Img/Logos/less.svg';
import sass from '../../Img/Logos/sass.svg';
import css from '../../Img/Logos/css.svg';
import mongodb from '../../Img/Logos/mongodb.svg';
import nodejs from '../../Img/Logos/nodejs.svg';
import typescript from '../../Img/Logos/typescript.svg';
import git from '../../Img/Logos/git.svg';
import { gsap, Power4 } from 'gsap';

function Index() {
  const TL = gsap.timeline({ defaults: { duration: 0.5 } });
  useEffect(() => {
    TL.from('.d', { scale: 4, ease: Power4.easeInOut });
  }, []);
  return (
    <div style={{ overflow: 'hidden' }}>
      <div
        className="d"
        style={{
          backgroundColor: '#351a63',
          width: '100vw',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <ExperienceCard img={Reacts} HoverText="React" typeOfIt="Frontend" color="#61dafb" />
        <ExperienceCard
          img={javascript}
          HoverText="javascript"
          typeOfIt="Frontend"
          color="#f0db4f"
        />
        <ExperienceCard
          img={typescript}
          HoverText="typescript"
          typeOfIt="Frontend"
          color="#007acc"
        />
        <ExperienceCard img={nodejs} HoverText="nodejs" typeOfIt="Backend" color="#56a245" />
        <ExperienceCard img={css} HoverText="css" typeOfIt="Frontend" color="#1b73ba" />
        <ExperienceCard img={less} HoverText="less" typeOfIt="Frontend" color="#1a3457" />
        <ExperienceCard img={sass} HoverText="sass" typeOfIt="Frontend" color="#cd6699" />
        <ExperienceCard img={mongodb} HoverText="mongodb" typeOfIt="DataBase" color="#6cac48" />
        <ExperienceCard img={Gsap} HoverText="Gsap" typeOfIt="Frontend" color="#6cac48" />
        <ExperienceCard img={webpack} HoverText="webpack" typeOfIt="Frontend" color="#bcd2f5" />
        <ExperienceCard img={Express} HoverText="Express" typeOfIt="Backend" color="#222222" />
        <ExperienceCard img={git} HoverText="git" typeOfIt="system" color="#de4c36" />
      </div>
    </div>
  );
}

export default Index;
