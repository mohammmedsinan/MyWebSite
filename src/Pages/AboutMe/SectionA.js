import React from 'react';
import FirstPage, { ReUseAble } from '../../Components/AboutMeComp/FirstPage';

function SectionA() {
  return (
    <div>
      <FirstPage
        mainBackgroundColor="#579adf73"
        children={
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0px 20px',
              }}
            >
              <ReUseAble
                color="#9DF48D"
                text="Programming a full website"
                DUMYTEXT="Building Website with any technologies that chose from the customer "
              />
              <ReUseAble color="#00B8EC" text="Illustration art for the websites" />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                flexDirection: 'column',
              }}
            >
              <ReUseAble color="#00D2DE" text="Hosting the website and deploy it" />
              <ReUseAble color="#22E6B9" text="SEO optimized" />
            </div>
          </>
        }
      />
    </div>
  );
}

export default SectionA;
