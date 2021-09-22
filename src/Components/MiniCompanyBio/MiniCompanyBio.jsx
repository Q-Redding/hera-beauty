import React from 'react';

import banner_img from '../../img/skincare2.png';

const MiniCompanyBio = () => (

        <div className="bg-light-grey pt-20 mb-20">
            <div className="container mx-auto pt-20 pb-10 flex items-center">
                <div className="mr-4">
                    <img src={banner_img} alt="Supplies for makeup" />
                </div>
                <div>
                    <h2 className="font-krona text-3xl mb-4">Hera Beauty Motto</h2>
                    <p className="text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolor voluptate suscipit.</p>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae distinctio nostrum at.</p>
                </div>
            </div>
        </div>

)

export default MiniCompanyBio;