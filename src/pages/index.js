import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HomeSection from '../components/HomeSection'
import InfoSection from '../components/InfoSection';
import ContactSection from '../components/ContactSection';

import Projects from '../components/Projects';

import {
    AboutMeData
} from '../components/InfoSection/Data';

import {
    ContactUsFormData
} from '../components/ContactSection/Data';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    //Toggles whether the side bar pops out or not from the side
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HomeSection />
            <InfoSection {...AboutMeData} />
            <Projects />
            <ContactSection {...ContactUsFormData} />


        </>
    )
}



export default Home