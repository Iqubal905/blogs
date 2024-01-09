"use client"
import className from '@/utilis/className'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({children, href, exact=false, activeClassName, ...props}) => {
  
    const path = usePathname()
    const active = exact ? path == href : path.startsWith(href)
    const classes  = className(props.className, active && activeClassName)
    
    if(classes){
        props.className = classes
    }
    return (
        
       <Link  className=' ' href={href} {...props}>
       {children}
       </Link>
    );
};

export default Navlink;