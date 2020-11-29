import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

import { Spring } from 'react-spring/renderprops';

import resume from '../../images/resume.pdf'
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu,
    NavBtn,
    NavBtnLink,
    NavContentGroup,
    ImageSmallLogo,
} from './NavbarElements';

import ellen_small_picture from '../../images/ellen_small.PNG'


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>

                <Nav scrollNav={scrollNav}>
                    <NavbarContainer scrollNav={scrollNav}>

                        <NavLogo scrollNav={scrollNav} onClick={toggleHome} to='/'>
                            <ImageSmallLogo src={ellen_small_picture} />
                        </NavLogo>


                        <MobileIcon onClick={toggle}>
                            <FaBars size={40} />
                        </MobileIcon>


                        <Spring
                            from={{ opacity: 0, marginTop: -5000 }}
                            to={{ opacity: 1, marginTop: 0 }}
                        >
                            {props => (
                                <div style={props}>
                                    <NavContentGroup>
                                        <NavMenu>
                                            <NavItem>
                                                <NavLinks
                                                    to='about'
                                                    smooth={true}
                                                    duration={500}
                                                    spy={true}
                                                    exact='true'
                                                    offset={-80}
                                                > About </NavLinks>
                                            </NavItem>
                                            <NavItem>
                                                <NavLinks
                                                    to='work'
                                                    smooth={true}
                                                    duration={500}
                                                    spy={true}
                                                    exact='true'
                                                    offset={-80}
                                                >  Portfolio </NavLinks>
                                            </NavItem>

                                            <NavItem>
                                                <NavLinks
                                                    to='contact'
                                                    smooth={true}
                                                    duration={500}
                                                    spy={true}
                                                    exact='true'
                                                    offset={-80}
                                                > Contact </NavLinks>
                                            </NavItem>
                                        </NavMenu>
                                        <NavBtn>
                                            <NavBtnLink href={resume} > Resume</NavBtnLink>
                                        </NavBtn>
                                    </NavContentGroup>

                                </div>
                            )}
                        </Spring>

                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
