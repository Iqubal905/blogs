import Link from 'next/link';
import React from 'react';

const SingleBlog = ({blog}) => {
   const {_id, title, content, img, date, author} =  blog
   
    return (
      <>
        <div  className=' '>
        <div className='  border border-gray-300 overflow-hidden card hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2'>
<div className=' rounded overflow-hidden  transition-transform duration-300 ease-in-out transform hover:scale-105 '>
<img src={img} alt="" />
</div>
<div className=' my-8 m-8'>
    <h2 className=' font-bold text-2xl text-green-500'>{title}</h2>
<p className=' my-5'>{content.substring(0, 100)}{content.length > 100 &&  ' '+'...'}</p>
<h4 className=' font-semibold '>{author}<span><br />{date}</span></h4>
<button className='btn  float-end bg-green-500 text-white hover:bg-green-700'>
<Link href={`/blogs/${_id}`}>Details</Link>
</button>
</div>
</div>
        </div>
       
        </>
    );
};

export default SingleBlog;