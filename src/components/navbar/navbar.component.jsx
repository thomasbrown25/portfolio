import { useState } from 'react';
import { useRef, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './navbar.styles.css';

const Navbar = () => {
    const navRef = useRef();

    // const [navOffsetTop, setNavOffsetTop] = useState(0);

    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         const navbarRef = navRef.current;
    //         if (navOffsetTop === 0) setNavOffsetTop(navbarRef.offsetTop);
    //         // console.log(window.scrollY, navbarRef.offsetTop);
    //         // if (window.scrollY >= navbarRef.offsetTop) {
    //         //     console.log('setting it');
    //         //     setNavOffsetTop(navbarRef.offsetTop);
    //         // }

    //         if (navOffsetTop !== 0 && window.scrollY >= navOffsetTop) {
    //             navbarRef.classList.add('sticky');
    //         } else {
    //             console.log(navOffsetTop);
    //             navbarRef.classList.remove('sticky');
    //         }
    //     });
    // }, []);

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
