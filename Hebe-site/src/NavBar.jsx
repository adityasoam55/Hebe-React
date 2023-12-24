import React from 'react';
import { BsHandbag } from 'react-icons/bs';
import { IoPersonOutline } from 'react-icons/io5';
import { TfiSearch } from 'react-icons/tfi';

function NavBar() {
  return (
    <div className='box-border'>
      <span className="text-neutral-300 text-xs text-center font-thin p-2 flex flex-wrap justify-center max-md:px-5">
        $6 EXPRESS COURIER. FREE SHIPPING FOR ORDERS $200+. GIFTED HEBE TOTE BAG
        WITH PURCHASES $250+.
      </span>

      <div className="w-screen bg-gray-400 text-white flex items-center justify-between max-md:justify-center max-md:font-extrabold py-7 px-6">
        <div className="pl-2 text-3xl font-bold">Hebe</div>

        <div className="max-md:hidden flex flex-wrap justify-center text-center text-sm gap-8 px-2 hover:cursor-pointer">
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
        <div className="max-md:hidden flex gap-6 text-2xl pr-2 hover:cursor-pointer">
          <a href=""><IoPersonOutline /></a>
          <a href=""><TfiSearch /></a>
          <a href=""><BsHandbag /></a>
        </div>

      </div>

    </div>
  );
}

export default NavBar;
