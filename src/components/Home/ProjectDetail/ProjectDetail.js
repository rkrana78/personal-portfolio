import React from 'react';

const ProjectDetail = (props) => {
    const { title, details, img, github, demo } = props.project;
    return (

        <div className="d-flex justify-content-center text-center">
            <div className="col-md-12  p-4">
                <a href={demo} target='_blank'><img style={{ height: '150px' }} src={img} className="" alt="..." /></a>
                <h4 className="mt-3" >{title}</h4>
                <p >{details}</p>

                <a href={github}className="btn btn-success">Github</a>

            </div>
        </div>

    );
};

export default ProjectDetail;