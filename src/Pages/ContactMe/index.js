import React from 'react';
import { Button, Input } from 'antd';
import Facebook from '../../Img/Logos/Facebook.svg';
import Github from '../../Img/Logos/Github.svg';
import Twitter from '../../Img/Logos/Twitter.svg';
import Instagram from '../../Img/Logos/Instagram.svg';
import './style.css';

function index() {
  const ReUseAbleComponent = ({ IMG, LINK }) => {
    return (
      <div style={{ cursor: 'pointer' }}>
        <a href={LINK} target="_blank">
          <img src={IMG} width="100px" className="section-5-img" />
        </a>
      </div>
    );
  };
  return (
    <div
      className="section-5-div-2"
      style={{
        overflow: 'hidden',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#351a63',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div />
      <div>
        <h1 style={{ color: 'white', fontSize: '100px' }} className="section-5-h1">
          Be free to contacting me
        </h1>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '40vw',
        }}
        className="div-section-5-1"
      >
        <ReUseAbleComponent IMG={Facebook} LINK="https://www.facebook.com/mohammed.almusa.10" />
        <ReUseAbleComponent IMG={Twitter} LINK="https://twitter.com/TrainHeartent1" />
        <ReUseAbleComponent IMG={Github} LINK="https://github.com/mohammmedsinan" />
        <ReUseAbleComponent IMG={Instagram} LINK="https://www.instagram.com/_trainheartent/" />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'column',
          height: '40vh',
        }}
      >
        <Input placeholder="Input Your Name" style={{ width: '70vw', height: '6vh' }} />
        <Input placeholder="Input Your Gmail" style={{ width: '70vw', height: '6vh' }} />
        <Input placeholder="Input Your Password" style={{ width: '70vw', height: '6vh' }} />
        <Button
          style={{ color: 'white', backgroundColor: '#ac8fd3', border: 'none', width: '100px' }}
        >
          Submit
        </Button>
      </div>
      <div />
    </div>
  );
}

export default index;

{
  /*  */
}
