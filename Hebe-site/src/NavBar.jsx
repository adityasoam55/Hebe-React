import React from 'react';
import { BsHandbag } from 'react-icons/bs';
import { IoPersonOutline } from 'react-icons/io5';
import { TfiSearch } from 'react-icons/tfi';

function NavBar() {
  return (
    <div>
      <span className="text-xs text-center p-2 flex flex-wrap justify-center">
        $6 EXPRESS COURIER. FREE SHIPPING FOR ORDERS $200+. GIFTED HEBE TOTE BAG
        WITH PURCHASES $250+.
      </span>
      <div className="w-screen bg-gray-400 text-white flex items-center justify-between py-7 px-6">
        <div className="pl-2 text-3xl">Hebe</div>
        <div className="flex flex-wrap justify-center text-center text-sm gap-8 px-2">
          <a className="hover:underline underline-offset-8" href="">
            SHOP
          </a>
          <a className="hover:underline underline-offset-8" href="">
            BRANDS
          </a>
          <a className="hover:underline underline-offset-8" href="">
            MY GIRLFRIENDS BACK
          </a>
          <a className="hover:underline underline-offset-8" href="">
            STAF EDIT
          </a>
        </div>
        <div className="flex gap-6 text-2xl pr-2">
          <IoPersonOutline />
          <TfiSearch />
          <BsHandbag />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
