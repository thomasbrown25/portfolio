import FooterLink from './footer-link/footer-link.component';

import './footer.styles.css';

const Footer = () => {
    return (
        <footer className='footer-section center'>
            <div className='social-media'>
                <FooterLink
                    to={'https://github.com/thomasbrown25'}
                    icon='fab fa-github-square'
                />
                <FooterLink to={'#'} icon='fab fa-facebook-square' />
                <FooterLink to={'#'} icon='fab fa-instagram-square' />
            </div>
            <p className='copyright'>
                Copyright &copy; Thomas Brown. All Rights Reserved
            </p>
        </footer>
    );
};

export default Footer;
