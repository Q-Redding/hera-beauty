import React from 'react';
import ButtonLink from '../ButtonLink';

import leaf from '../../img/leaf.png';


const Banner = () => (
    <div className="container mx-40 flex items-center mt-20 mb-10 xl:ml-40">
        <div>
            <h1 className="font-krona text-3xl mb-4">
                Hera Beauty Store
            </h1>
            <p className="text-sm mb-6">
                Reach out tribal knowledge currying favour the last person we talked to said this would be ready can you
                slack it to me? yet it just needs more cowbell.
            </p>
            <ButtonLink
                path="/about"
                text="see more"
                isMain
            />
        </div>
        <div className="ml-4 mb-10 mx-10 h-30 w-full">
            <img src={leaf} alt="Tooth brush and a paste laying on top of a green leaf" />
        </div>
    </div>
);

export default Banner;
