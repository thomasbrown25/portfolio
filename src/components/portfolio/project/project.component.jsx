import { Link } from 'react-router-dom';

import './project.styles.css';

const Project = ({ name, technologies, url, image }) => {
    return (
        <div className='project center'>
            <div className='project-text'>
                <h2 className='project-name'>{name}</h2>
                <h4 className='project-technologies'>{technologies}</h4>
            </div>
            <img src={image} alt='projects' className='project-img' />
            <Link to={url} className='project-link'>
                Go to website
            </Link>
        </div>
    );
};

export default Project;
