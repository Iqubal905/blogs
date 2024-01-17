

import Link from 'next/link';
import React from 'react';

const ManageSingleBlog = ({blog, handleDelete }) => {
    const {_id, title, date, img, author }= blog

    return (
        <tr className='text-center '>
        <td className='border border-y-amber-200'>{date}</td>
        <td className='border border-y-amber-200 flex justify-center items-center'>
            <img className=' w-16 h-16 rounded-full' src={img} alt="" />
            </td>
        <td className='border border-y-amber-200'>{title}</td>
        <td className='border border-y-amber-200'>{author}</td>
        <td className='border border-y-amber-200'>
            <button  onClick={()=>handleDelete(_id)} className='   btn  border-pink-500  text-red-400'>Delete</button>
        </td>
        <td className='border border-y-amber-200'>
            <button  className='btn btn-info text-white'> <Link href={`/dashboard/manageblog/${_id}`}>Edit Blog</Link></button>
        </td>
             </tr>
    );
};

export default ManageSingleBlog;