
import getAllBlogs from '@/utilis/getAllBlogs';
import wait from '@/utilis/wait';
import React from 'react';

import SingleBlog from './SingleBlog';
import Link from 'next/link';
import getCategories from '@/utilis/getCategories';

const BlogPage = async() => {

    await wait()
    const dataFromDb = await getCategories()

    const blogsData = await getAllBlogs()
   const firstBlog =  dataFromDb.find((blog, index)=> index === 0)  
   
    return (
        <div>
             <div
      className=" py-20   "
      style={{
        backgroundImage: 'url("https://media.istockphoto.com/id/963438020/photo/surreal-plants-background.webp?b=1&s=170667a&w=0&k=20&c=tycWywCsSK6AxPUl8XKxV7TRALzzZ2PtfPanSlca4k8=")', // Replace with your actual image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // This is the key property for fixing the background image
       
      }}
    >
        <div className=' absolute  p-20   z-0   top-0 left-0 right-0 bg-black  opacity-50  text-white'>

        </div>
         
          <div className=' absolute  z-20 right-0 left-0'>
          <h2 className=' text-center text-3xl font-bold text-white  '>Blogs</h2>
          </div>
            </div>

           <div className='  grid grid-cols-3 gap-4  px-24 mt-20'>
         <div className='  col-span-2'>
<div className='  border border-gray-300 overflow-hidden card hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2'>
<div className=' rounded overflow-hidden  transition-transform duration-300 ease-in-out transform hover:scale-105 '>
<img src={firstBlog.img} alt="" />
</div>
<div className=' my-8 m-8'>
    <h2 className=' font-bold text-2xl text-green-500'>{firstBlog.title}</h2>
<p className=' my-5'>{firstBlog.content}</p>
<h4 className=' font-semibold '>{firstBlog.author}<span><br />{firstBlog.date}</span></h4>
<button className='btn  float-end bg-green-500 text-white hover:bg-green-700'>
<Link href={`/blogs/${firstBlog._id}`}>Details</Link>
</button>
</div>
</div>
       
        <div className=' grid grid-cols-2 mt-20'>
        {
             dataFromDb.map((blog)=><SingleBlog blog={blog} key={blog._id}></SingleBlog>)  
            }
        </div>
         </div>
         <div>
<h2>sidebar</h2>
         </div>
           </div>
            
        </div>
    );
};

export default BlogPage;