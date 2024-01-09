import React from 'react';
import Sidebar from './Sidebar';


const dashboardlayout = ({children}) => {
    return (
        <div className='flex mt-4 mx-8 px-8 border  border-violet-600   h-screen '>
       <div className='  border-r-4 border-red-200    h-screen'>
       <Sidebar></Sidebar>
       </div>
            {children}
           
        </div>
    );
};

export default dashboardlayout;