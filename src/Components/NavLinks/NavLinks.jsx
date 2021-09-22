import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {

    const links = [
        {
            path: '/',
            name: 'Home',
        },
        {
            path: '/search',
            name: 'Search',
        },
        {
            path: '/about',
            name: 'About',
        },
    ];

    return (
        <>
            {links.map((link, index) => (
                <NavLink
                    className="lowercase text-sm mr-8 hover:text-secondary"
                    to={link.path}
                    key={`${link.name}-${index}`}
                >
                    {link.name}
                </NavLink>
            ))}
        </>
    );
};

export default NavLinks;
