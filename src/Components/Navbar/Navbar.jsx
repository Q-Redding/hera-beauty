import React from "react";
import NavLinks from "../NavLinks/NavLinks";

import BrandLink from "../BrandLinks/BrandLink";
import CartIcon from "../Icons/CartIcon";
import HeartIcon from "../Icons/HeartIcon";
import SearchIcon from "../Icons/SearchIcon";


const Navbar = () => {
  return (
      <nav className="container mx-auto flex font-krona justify-between px-10 py-3 sticky">
          {/* Brand Name */}
          <BrandLink />

          <div className="flex items-end">
              <NavLinks className="hover:text-red-700" />

              {/* Icons */}
              <div className="flex">
                  <HeartIcon color={'#B12F4B'} />
                  <CartIcon color={'#222'}/>
                  <SearchIcon color={'#222'}/>
              </div>
          </div>
      </nav>
  );
};

export default Navbar;
