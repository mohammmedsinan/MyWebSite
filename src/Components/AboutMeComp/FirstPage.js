import React from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';

export const ReUseAble = ({ color, text, IMG, DUMYTEXT }) => {
  return (
    <div style={{ display: 'flex' }} className="last-container-2">
      {IMG ? (
        IMG
      ) : (
        <ExclamationCircleFilled style={{ color: color, fontSize: '30px', padding: '0px 15px' }} />
      )}
      <div>
        <p
          style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', marginBottom: '0.1em' }}
          className="last-p-1"
        >
          {text}
        </p>
        <p style={{ color: '#f9eded' }}>
          {DUMYTEXT
            ? DUMYTEXT
            : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum`}
        </p>
      </div>
    </div>
  );
};

function FirstPage({
  children,
  headerText,
  colorHeaderText,
  HeaderTwoText,
  colorHeaderTwoText,
  mainBackgroundColor,
}) {
  return (
    <div
      className="container-comp"
      style={{
        height: '100%',
        minHeight: '100vh',
        backgroundColor: mainBackgroundColor ? mainBackgroundColor : '#579adf38',
        width: '100%',
      }}
    >
      <h1
        className="last-header-1"
        style={{
          textAlign: 'center',
          color: colorHeaderText ? colorHeaderText : 'white',
          fontSize: '40px',
          borderBottom: '3px solid #4e327d',
          padding: '10px',
        }}
      >
        {headerText ? headerText : `My job is to make your business easier`}
      </h1>

      <h2 style={{ textAlign: 'center', color: colorHeaderTwoText ? colorHeaderTwoText : 'white' }}>
        {HeaderTwoText ? HeaderTwoText : 'The services that I offer'}
      </h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          minHeight: '70vh',
          height: '100%',
        }}
        className="last-container-1"
      >
        {children}
      </div>
    </div>
  );
}

export default FirstPage;
