import React from 'react';
import { Link } from 'react-router-dom';

import links from '../../data/footerLinks.json';

import BrandLink from '../BrandLinks/BrandLink';
import FacebookIcon from '../Icons/FacebookIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import InstagramIcon from '../Icons/InstagramIcon';

const Footer = () => {


    return (
        <footer className="bg-green text-platinum flex justify-between p-8">
            <BrandLink classes="text-melon pl-4 inline-block" />

            <div className="flex justify-between mx-auto">
                {links.map(item => (
                    <div className="flex flex-col flex-wrap mr-10" key={item.title}>
                        <h6 className="font-krona text-sm">{item.title}</h6>
                        <div>
                            {item.links.map(link => (
                                <Link
                                    to={link.path}
                                    key={link.name}
                                    className="lowercase text-sm block hover:text-melon"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative">
                <p className="text-accent inline-block align-text-bottom text-sm mt-40 mr-10">
                    Copyright &copy; 2021 Hera Site Created by Quenton
                </p>
            </div>
            <div className="text-yellow pr-4">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="block mb-4 hover:text-blue-400"
                >
                    <FacebookIcon />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="block mb-4 hover:text-blue-400"
                >
                    <TwitterIcon />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-yellow-600 block mb-4"
                >
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
