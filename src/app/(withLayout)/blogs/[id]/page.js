import getSingleBlog from '@/utilis/getSingleBlog';
import Link from 'next/link';
import React from 'react';

const SinglePageBlog = async({params}) => {
    const singleBlogData = await getSingleBlog(params.id)
    const {_id, content, author, date, title, img} = singleBlogData
  
    return (
        <div>
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

           <div className='    px-24 mt-20'>
         <div className='  '>
<div className='  border border-gray-300 overflow-hidden card hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2'>
<div className=' rounded flex justify-center overflow-hidden  transition-transform duration-300 ease-in-out transform hover:scale-105 '>
<img src={img} alt="" />
</div>
<div className=' my-8 m-8'>
    <h2 className=' font-bold text-2xl text-green-500'>{title}</h2>
<p className=' my-5'>{content}</p>
<h4 className=' font-semibold '>{author}<span><br />{date}</span></h4>

</div>
</div>
       
      
         </div>
     
           </div>
            
        </div>
        </div>
    );
};

export default SinglePageBlog;