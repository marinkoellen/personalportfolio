import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import { Spring } from 'react-spring/renderprops'

import ellen_picture from '../../images/Ellen_Cursive_White_Transparent.png'

import {
  HomeContainer,
  HomeBg,
  HomeContent,
  HomeH1,
  HomeP,
  HomeBtnWrapper,
  Arrowdonward,
  Arrowdown
} from './HomeElements';

function HomeSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HomeContainer id='home'>
      <HomeBg>
        {/* <ImgBg playsInline autoPlay loop muted src={Video} type='video/mp4' /> */}
      </HomeBg>
      <HomeContent>

        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 1000, duration: 700 }}
        >
          {props => (
            <div style={props}>
              <HomeP>
                Hi, my name is
              </HomeP>
            </div>
          )}
        </Spring>

        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 1700, duration: 700 }}
        >
          {props => (
            <div style={props}>
              <HomeH1 src={ellen_picture} />
            </div>
          )}
        </Spring>

        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 2400, duration: 700 }}
        >
          {props => (
            <div style={props}>
              <HomeP>
                I am Data Scientist & junior Developer based in Perth, Western Australia.
              </HomeP>
            </div>
          )}
        </Spring>

        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 3000, duration: 700 }}
        >
          {props => (
            <div style={props}>
              <HomeBtnWrapper>
                <Button
                  to='contact'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  primary='true'
                  dark='true'
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                >
                  Contact {hover ? <Arrowdonward /> : <  Arrowdown />}
                </Button>
              </HomeBtnWrapper>
            </div>
          )}
        </Spring>


      </HomeContent>
    </HomeContainer>
  );
}

export default HomeSection;
