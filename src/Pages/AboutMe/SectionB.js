import { HeartFilled } from '@ant-design/icons';
import React from 'react';
import FirstPage, { ReUseAble } from '../../Components/AboutMeComp/FirstPage';
function SectionB() {
  return (
    <div>
      <FirstPage
        headerText={
          <span style={{ fontWeight: 'bold' }}>
            I <span style={{ color: '#ff8d79' }}>love</span> what I do
          </span>
        }
        colorHeaderText="#b1eff2"
        HeaderTwoText="I am working with passion"
        colorHeaderTwoText="#b1eff2"
        mainBackgroundColor="#544bdd6b"
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
                text="Help The customer to pick a visual identity"
                IMG={
                  <HeartFilled
                    style={{ color: '#9DF48D', fontSize: '30px', padding: '0px 15px' }}
                  />
                }
              />
              <ReUseAble
                IMG={
                  <HeartFilled
                    style={{ color: '#00B8EC', fontSize: '30px', padding: '0px 15px' }}
                  />
                }
                color="#00B8EC"
                text="Save a copy from the website if happened something wrong to the official version"
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                flexDirection: 'column',
              }}
            >
              <ReUseAble
                color="#00D2DE"
                text="I can edit the copy for eight months For Free"
                IMG={
                  <HeartFilled
                    style={{ fontSize: '30px', padding: '0px 15px', color: '#00D2DE' }}
                  />
                }
              />
              <ReUseAble
                color="#22E6B9"
                text="Support Existing 24/7"
                IMG={
                  <HeartFilled
                    style={{ fontSize: '30px', padding: '0px 15px', color: '#22E6B9' }}
                  />
                }
              />
            </div>
          </>
        }
      />
    </div>
  );
}

export default SectionB;
