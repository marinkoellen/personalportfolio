import React from 'react';
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import ProjectItem from '../ProjectItem';
import { ProjectsContainer } from './ProjectsElements'
import {
  ProjectOne,
  ProjectTwo,
  ProjectThree,
  ProjectFour
} from './Data'
import './swiper.css';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



const Projects = () => {
  console.log(ProjectOne)
  return (
    <>
      <ProjectsContainer id='work'>


        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={
            {
              el: '.swiper-pagination',
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
              },
            }
          }
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}

        >
          <SwiperSlide>
            <ProjectItem {...ProjectOne} />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectItem {...ProjectTwo} />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectItem {...ProjectThree} />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectItem {...ProjectFour} />
          </SwiperSlide>
          <div class="swiper-pagination"></div>

        </Swiper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
