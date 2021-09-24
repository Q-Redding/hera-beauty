import React from 'react';
import ButtonLink from '../ButtonLink';
import './SecondaryBanner.css';

import skincare from '../../img/bannerImg.png';

const SecondaryBanner = () => {
    return (
        <div className="banner__secondary container flex items-center justify-between px-20 mb-10 mx-auto w-full bg-pinky">
            <div>
                <h4 className="font-krona text-3xl ml-5 mb-4">
                    Be natural, <br /> be organic, <br /> be you
                </h4>
                <ButtonLink path="/about" text="see more" className="ml-40" isMain />
            </div>
            <div className="ml-4">
                <img
                    width="300"
                    src={skincare}
                    alt="Tooth brush and a paste laying on top of a green leaf"
                />
            </div>
        </div>
    );
};

export default SecondaryBanner;