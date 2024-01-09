'use client'

import { afterLoginNavData, beforeLoginNavData } from '@/data/navData';
import { list } from 'postcss';
import React from 'react';
import NavLink from './NavLink';
import useAuth from '@/hooks/useAuth';

const Navbar = () => {
    const {user, logout} = useAuth()
    console.log(user);
const navData = user? afterLoginNavData : beforeLoginNavData

const handleLogOut = async()=>{
 await  logout()
}

    return (
        <div>
          <div className="navbar   px-20  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 bg- w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {
        navData.map(({path, title})=><li key={path} className=' mx-auto  mx-2'>
             <NavLink  exact={path == '/'} activeClassName=" bg-gray-700 p-2 rounded-full text-white " href={path}>{title}</NavLink>
        </li>)
     }
      </ul>
    </div>
    <a className="btn btn-ghost text-white text-xl">Blogs Page</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className=" menu-horizontal  text-white ">
     {
        navData.map(({path, title})=><li key={path} className=' mx-2'>
             <NavLink  exact={path == '/'} activeClassName=" bg-gray-700 p-2 rounded-full text-white " href={path}>{title}</NavLink>
        </li>)
     }
   {
    user &&   <li onClick={handleLogOut}>
    <button>Logout</button>
     </li>
   }
    </ul>
    
  </div>
 
  <div className="navbar-end">
  <div className="w-10 rounded-full">
          <img className=' rounded-full' alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;