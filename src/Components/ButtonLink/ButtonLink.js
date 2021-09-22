import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ path, text, isMain }) => (
    <Link
        to={path}
        className={`inline-block rounded-full font-bold font-krona text-xs hover:bg-secondary hover:text-platinum ${
            isMain ? 'bg-melon py-4 px-10' : 'bg-green text-white py-2 px-4'
        }`}
    >
        {text}
    </Link>
);

export default ButtonLink;
