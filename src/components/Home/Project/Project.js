import React from 'react';
import aqua from '../../../images/aqua3.png'
import mobile from '../../../images/mobile-bazar.png'
import soccer from '../../../images/soccer2png.png'
import ProjectDetail from '../ProjectDetail/ProjectDetail';

const projectsData = [
    {
        title: 'Aqua Drinking Bottle Service',
        details: 'A complete MERN Stack project.',
        tools: 'HTML, CSS, React, MongoDB, NodeJS, Express,Bootstrap, Firebase, Heroku',
        img: aqua,
        github: 'https://github.com/rkrana78/aqua-client',
        demo: 'https://aqua-393de.web.app/'
    },
    {
        title: 'Mobile Bazar',
        details: 'Mobile Bazar is an e-commerce website.',
        tools: 'HTML, CSS, React, MongoDB, NodeJS, Express,Bootstrap, Firebase, Heroku',
        img: mobile,
        github: 'https://github.com/rkrana78/mobile-bazar-client',
        demo: 'https://mobile-bazar-8.web.app/'
    },
    {
        title: 'Soccer Team',
        details: 'List & details of English Premier League teams',
        tools: 'HTML, CSS, Bootstrap, JavaScript, React Js',
        img: soccer,
        github: 'https://github.com/rkrana78/soccer-team',
        demo: 'https://604a51036ad8b100d4180210--festive-clarke-b8e123.netlify.app/'
    },


]

const Project = () => {
    return (
        <div className="text-center">
            <h2 style={{color:  '#25255F'}}>My Works</h2>
           <div className="">
           <div class="row m-5 p-5">
                {
                    projectsData.map(project => <ProjectDetail project={project} key={project.title}></ProjectDetail>)
                }
            </div>
           </div>

        </div>
    );
};

export default Project;
