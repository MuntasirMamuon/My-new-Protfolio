import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Services></Services>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;