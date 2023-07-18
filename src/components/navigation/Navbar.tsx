import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

type Props = {};

function Navbar({}: Props) {
  const [navbar, setNavbar] = useState<boolean>(false);
  const viewMobileNav = () => {
    setNavbar(navbar ? false : true);
  };
  return (
    <div className="w-full  bg-secondary-superlight px-4">
      <div className="flex h-24 flex-row items-center max-w-7xl w-full mx-auto">
        <div className="flex flex-1">consultancy</div>
        <div className="md:flex hidden flex-row items-center space-x-6">
          <p>About Us</p>
          <p>Offer</p>
          <p>Our Team</p>
          <p>Blog</p>
          <p>Contact</p>
          <div className="flex bg-secondary-original px-4 py-2 font-semibold">
            Make an appointment
          </div>
        </div>
        <div onClick={viewMobileNav} className="md:hidden flex">
          <Bars3Icon height={20} width={20} />
        </div>
      </div>
      {navbar && (
        <div className="md:hidden flex flex-col space-y-6 pb-4">
          <p>About Us</p>
          <p>Offer</p>
          <p>Our Team</p>
          <p>Blog</p>
          <p>Contact</p>
         <div className="flex w-full flex-col items-center">
         <div className="flex bg-secondary-original text-center px-4 py-2 font-semibold">
            Make an appointment
          </div>
         </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
