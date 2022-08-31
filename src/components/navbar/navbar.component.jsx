import { useRef, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './navbar.styles.css';

const Navbar = () => {
    const navRef = useRef();

    useEffect(() => {
        const nav = navRef.current;
        nav.addEventListener('scroll', () => {
            console.log(nav);
            if (window.scrollY >= nav.offsetTop) {
                console.log('sticky');
                nav.classList.add('stick');
            } else {
                nav.classList.remove('sticky');
            }
        });
    }, []);
    return (
        <nav ref={navRef} className='navbar center'>
            <Link to={'/'} className='nav-link'>
                Home
            </Link>
            <Link to={'/'} className='nav-link'>
                About
            </Link>
            <Link to={'/'} className='nav-link'>
                Portfolio
            </Link>
            <Link to={'/'} className='nav-link'>
                Contact
            </Link>
        </nav>
    );
};

export default Navbar;
