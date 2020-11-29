import React from 'react';
// import poster from '../../images/nibble_poster.PNG'
// import nibbleVideo from '../../images/Nibble.mp4'
// import nibblebrand from '../../images/Nibble_White_Transparent.png'
import { FaReact, FaHtml5 } from 'react-icons/fa'
import { SiDjango } from 'react-icons/si'
import { IconContext } from 'react-icons/lib';

import {
    VideoContainer,
    VideoComponent,
    TopLine,
    ImageComponent,
    InfoContainer,
    TestContainer,
    ProjectItemContainer,
    IconContainer,
    ProjectInfoText,
    CodeIconLink,
    VideoLink,
} from './ProjectItemElements';


const ProjectItem = ({
    video_source,
    logo_source,
    containsReact,
    reactGithub,
    containsDjango,
    djangoGithub,
    containsCSS,
    cssGithub,
    project_blurb,
    project_id,
    websiteURL
}
) => {
    return (
        <>
            <ProjectItemContainer>
                <IconContext.Provider value={{ color: '#fff' }}>

                    <VideoContainer>
                        <VideoLink href={websiteURL}
                            target='_blank'
                            aria-label='Website'
                        >
                            <VideoComponent
                                repeat={true}
                                onMouseOver={event => event.target.play()}
                                onMouseOut={event => event.target.pause()}
                                src={video_source}
                                muted="muted"
                            >
                            </VideoComponent>
                        </VideoLink>
                    </VideoContainer>
                    <InfoContainer>

                        <ImageComponent src={logo_source} />
                        <TestContainer>
                            <TopLine>Featured Project {project_id}</TopLine>
                            <ProjectInfoText>
                                {project_blurb}
                            </ProjectInfoText>
                            <IconContainer>
                                <CodeIconLink
                                    shouldDisplay={containsReact}
                                    href={reactGithub}
                                    target='_blank'
                                    aria-label='Github'
                                >
                                    <FaReact />
                                </CodeIconLink>
                                <CodeIconLink
                                    shouldDisplay={containsDjango}
                                    href={djangoGithub}
                                    target='_blank'
                                    aria-label='Github'
                                >
                                    <SiDjango />
                                </CodeIconLink>
                                <CodeIconLink
                                    shouldDisplay={containsCSS}
                                    href={cssGithub}
                                    target='_blank'
                                    aria-label='Github'
                                >
                                    <FaHtml5 />
                                </CodeIconLink>
                            </IconContainer>
                        </TestContainer>
                    </InfoContainer>
                </IconContext.Provider>
            </ProjectItemContainer>
        </>
    );
};

export default ProjectItem;
