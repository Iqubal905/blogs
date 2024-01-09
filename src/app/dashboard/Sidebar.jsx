import Link from 'next/link';
import React from 'react';
import Navlink from '../computents/NavLink';


const navlink = [
  {
      path: '/dashboard', 
      title:'Dashboard'
  },
  {
      path: '/dashboard/addBlog', 
      title:'Add blog'
  },
  {
      path: '/dashboard/manageBlog', 
      title:'Manage blog'
  },
  {
      path: '/', 
      title:'Home'
  }

  
]
const Sidebar = () => {
    return (
      <div>
      <aside className='mr-10'>
     
    <ul className=' '>
       {
          navlink.map(({path, title}) => <li className='mx-2' key={path}> 
          <Navlink exact activeClassName='text-amber-500'  href={path}>{title}</Navlink>
          </li>)
       }
     </ul>
   
      </aside>
  </div>
    );
};

export default Sidebar;