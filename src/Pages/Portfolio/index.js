import Second from '../../Img/Portfolio/Second.jpg';
import Thierd from '../../Img/Portfolio/Thierd.jpg';
import { GithubOutlined } from '@ant-design/icons';
import First from '../../Img/Portfolio/First.jpg';
import { gsap, Power4 } from 'gsap';
import { Button } from 'antd';
import React, { useEffect } from 'react';
import './style.css';
import './midea.css';

function Portfolio() {
  const TL1 = gsap.timeline({ defaults: { duration: 0.4 } });
  const TL = gsap.timeline({ defaults: { duration: 0.5 } });
  useEffect(() => {
    TL.from('.dudes', { scale: 2, ease: Power4.easeInOut });
  }, []);
  const PortfolioPreview = ({
    className,
    expand = false,
    IMG,
    ProjectName,
    explain,
    github,
    website,
  }) => {
    return (
      <div
        onClick={() => {
          TL1.to(`.${className}`, { scaleX: 0.001, scaleY: 0.001 });
          expand === false && TL1.to(`#${className}`, { display: 'none' });
          expand === true && TL1.to(`#${className}`, { display: 'block' });
          TL1.to(`.${className}`, {
            scaleX: 1,
            scaleY: 1,
            ease: Power4.easeIn,
          });
          expand = !expand;
        }}
        className={className}
        style={{
          width: '40vw',
          backgroundColor: '#FCEAFF',
          height: '40vh',
          marginBottom: '50px',
          cursor: 'pointer',
          overflow: 'hidden',
          borderRadius: '10px',
          boxShadow: '0px 0px 20px #7d53c2',
          maxHeight: '310px',
          maxWidth: '570px',
        }}
      >
        <img src={IMG} id={className} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: '10px 40px',
          }}
        >
          <h1
            style={{ textAlign: 'center', color: '#341861', fontWeight: 'bold' }}
            className="h1-section-one"
          >
            {ProjectName}
          </h1>
          {!explain ? (
            <p style={{ color: 'gray' }} className="p-section-one">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>
          ) : (
            <p style={{ color: 'gray' }}>{explain}</p>
          )}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                minWidth: '11vw',
              }}
              href={github}
              target="blank"
              className="a-section-one"
            >
              <span style={{ color: '#341861' }}>The Source Code</span>
              <GithubOutlined style={{ color: '#341861', fontSize: '30px' }} />
            </a>
            <Button className="btn-section-one">
              <a href={website} target="blank">
                See the website live
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <div className="LOADFING-SECTION"></div>
      <div style={{ width: '100%', height: '100%', backgroundColor: '#351a63' }} className="dudes">
        <p
          style={{
            textAlign: 'center',
            fontSize: '40px',
            color: 'white',
            fontWeight: 'bolder',
            padding: '30px 0px',
          }}
        >
          My last current work
        </p>
        <div
          style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}
          className="Container"
        >
          <PortfolioPreview
            className="q"
            IMG={First}
            ProjectName="Ant Desgin Project"
            website="https://mohammmedsinan.github.io/antd-re-build/"
            github="https://github.com/mohammmedsinan/antd-src-code"
          />
          <PortfolioPreview
            className="w"
            IMG={Second}
            ProjectName="Tracker Clone"
            website="https://mohammmedsinan.github.io/react-app-re-build/"
            github="https://github.com/mohammmedsinan/Src-code-tracker"
          />
          {/*---------------------------*/}
          <PortfolioPreview
            className="e"
            IMG={Thierd}
            ProjectName="Green Tree"
            website="https://mohammmedsinan.github.io/Re-Build-W"
            github="https://github.com/mohammmedsinan/Re-Build-W"
          />
          <PortfolioPreview className="r" IMG={First} ProjectName="Ant Desgin Project" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
