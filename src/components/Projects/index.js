import React from 'react';
import Project1 from '../../images/NibbleProject.PNG';
import Project2 from '../../images/ComparalistProject.PNG';
import Project3 from '../../images/CSSProject.PNG';


import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP
} from './ProjectsElements';

const Projects = () => {
  return (
    <ProjectsContainer id='work'>
      <ProjectsH1>Portfolio</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={Project1} />
          <ProjectsH2>Nibble</ProjectsH2>
          <ProjectsP>
            Crowd funding project in React & Django
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Project2} />
          <ProjectsH2>Comparalist</ProjectsH2>
          <ProjectsP>
            Group project comparing items in React & Django
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Project3} />
          <ProjectsH2>Original CSS Portfolio</ProjectsH2>
          <ProjectsP>
            First project in CSS only.
          </ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
