import React from 'react';
import './ProjectDetail.css'

const ProjectDetail = (props) => {
    const { title, details, img, github, demo } = props.project;
    return (
            <div className="col-md-3 ml-2 pt-4 project container">
                <a href={demo} target='_blank'><img style={{ height: '110px' }} src={img} className="" alt="..." /></a>
                <h4 className="mt-3" >{title}</h4>
                <p >{details}</p>
                <a href={demo}className="btn btn-success mr-4" target='_blank'>Live</a>
                <a href={github}className="btn btn-success" target='_blank'>Github</a>

            </div>
       
    );
};

export default ProjectDetail;