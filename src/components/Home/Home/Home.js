import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Project from '../Project/Project';


const Home = () => {
    return (
        <div>
            <Header/>
           <About/>
           <Project/>
           <Contact/>
        </div>
    );
};

export default Home;