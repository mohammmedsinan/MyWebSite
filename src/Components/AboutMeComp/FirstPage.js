import React from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';

function FirstPage() {
  const ReUseAble = ({ color, text }) => {
    return (
      <div style={{ display: 'flex' }}>
        <ExclamationCircleFilled style={{ color: color, fontSize: '30px', padding: '0px 15px' }} />
        <div>
          <p style={{ color: color, fontSize: '20px' }}>{text}</p>
          <p style={{ color: 'lightgray' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum
          </p>
        </div>
      </div>
    );
  };
  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: '#579adf78',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          color: 'white',
          fontSize: '40px',
          borderBottom: '3px solid #351a63',
          padding: '10px',
        }}
      >
        My job is to make your business easier
      </h1>

      <h2 style={{ textAlign: 'center', color: 'white' }}>The service that I offer</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          height: '70vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ReUseAble color="white" text="Programming a ful website" />
          <ReUseAble color="white" text="Illustration art for the websites" />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'column',
          }}
        >
          <ReUseAble color="white" text="Hosting the website and deploy it" />
          <ReUseAble color="white" text="SEO optimized" />
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
