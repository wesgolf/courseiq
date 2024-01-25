import '../Unauthorized Styles/navbar.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [deviceType, setDeviceType] = useState('desktop');
    const [tabletState, setTabletState] = useState(false)

    const handleResize = () => {
        const width = window.innerWidth;
        if (width < 768) {
            setDeviceType('mobile');
        } else if (width >= 768 && width < 1182) {
            setDeviceType('tablet');
        } else {
            setDeviceType('desktop');
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {deviceType === 'mobile' && (
                // Mobile layout
                <div className="navbargrid-mobile">
                        <h1><a href='/'>Course IQ</a></h1>
                    <FontAwesomeIcon icon={faBars} className='navbar-bars-mobile' />
                </div>
            )}

            {deviceType === 'tablet' && (
                // Tablet layout
                <div className="navbargrid-tablet">
                    <div>
                        <h1><a href='/'>Course IQ</a></h1>
                    </div>
                    <div className='loginregistercontainer'>
                        <ul>
                            <li className='click'><a href="/login">Login</a></li>
                            <li className='click reg'><a href='/register'>Sign Up for Free</a></li>
                        </ul>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBars} className='navbar-bars' onClick={() => setTabletState(!tabletState)}/>
                    </div>
                </div>
            )}
            {deviceType === 'desktop' && (
                // Desktop layout
                <div className="navbargrid-desktop">
                    <div>
                        <h1><a href='/'>Course IQ</a></h1>
                    </div>
                    <div>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/features'>Features</a></li>
                            {/* Additional menu items */}
                            <li><a href='/blog'>Blog</a></li>
                            <li><a href='/contact'>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='loginregistercontainer'>
                        <ul>
                            <li className='click'><a href="/login">Login</a></li>
                            <li className='click reg'><a href='/register'>Sign Up for Free</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}