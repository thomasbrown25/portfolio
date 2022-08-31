import { Link } from 'react-router-dom';

import './landing.styles.css';

const Landing = () => {
    return (
        <section className='landing-section center'>
            <h1 className='landing-heading'>Software Engineer</h1>
            <img
                src={require('../../assets/images/profile.JPG')}
                alt='Thomas Brown'
                className='person-img'
            />
            <h3 className='person-name'>Thomas Brown</h3>
            <Link to={'#'} className='landing-btn'>
                Projects
            </Link>
        </section>
    );
};

export default Landing;
