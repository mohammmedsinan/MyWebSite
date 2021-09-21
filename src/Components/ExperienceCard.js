import React from 'react';
import './style.css';
import { Popover } from 'antd';

function ExperienceCard({ img, HoverText, typeOfIt, color }) {
  return (
    <Popover
      title={() => (
        <span style={{ color: color, fontWeight: 'bold' }}>{HoverText.toUpperCase()}</span>
      )}
      content={() => (
        <span style={{ marginLeft: '20%', color: '#351a63', fontWeight: 'bold' }}>{typeOfIt}</span>
      )}
    >
      <div
        className="section-2-container"
        style={{
          width: '20vw',
          height: '30vh',
          backgroundColor: '#6357a0',
          margin: '30px 20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <img src={img} style={{ width: '10vw' }} className="section-2-img" />
      </div>
    </Popover>
  );
}

export default ExperienceCard;
