import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
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
} from './NavbarElements';

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
                    <NavbarContainer>
                        <NavLogo onClick={toggleHome} to='/'>ELLEN </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>

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


                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
