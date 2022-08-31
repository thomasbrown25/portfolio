import { Link } from 'react-router-dom';
import './footer-link.styles.css';

const FooterLink = ({ to, icon }) => {
    return (
        <Link to={to} className='social-media-link'>
            <i className={icon}></i>
        </Link>
    );
};

export default FooterLink;
