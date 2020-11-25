import React, { useState } from 'react';
import { Button } from '../ButtonElements';

import {
  HomeContainer,
  HomeBg,
  HomeContent,
  HomeH1,
  HomeP,
  HomeBtnWrapper,
  ArrowForward,
  ArrowRight
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
        <HomeP>
          Hello my name is
        </HomeP>
        <HomeH1>Ellen Marinko</HomeH1>
        <HomeP>
          I am Data Scientist & junior Developer based in Perth, Western Australia.
        </HomeP>
        <HomeBtnWrapper>
          <Button
            to='contact'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='false'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Contact {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HomeBtnWrapper>
      </HomeContent>
    </HomeContainer>
  );
}

export default HomeSection;
