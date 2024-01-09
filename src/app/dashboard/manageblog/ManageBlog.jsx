
"use client"
import React, { useState, useTransition } from 'react';
import ManageSingleBlog from './ManageSingleBlog';
import { useRouter } from 'next/navigation';



const ManageBlog = ({blogs}) => {

  const [isPending, startTransition] = useTransition()
  const [loading, setLoading] = useState(false)
  const isLoading = isPending || loading
  const router = useRouter();

    const handleDelete =async (id)=>{
           setLoading(true)
        try  {
          const res = await fetch(
           `http://localhost:3000/api/blogs/${id}`,{
             method: "DELETE",
          })
          const result = await res.json()
          setLoading(false)
          startTransition(()=>{
            router.refresh()
        })
          console.log(result);
        
       
         }catch(error){
           console.log(error);
         }
        
        }



    return (
<div>      
<table className=  {`  table  table-fixed w-full  ${isLoading ? "opacity-50" : "opacity-100"}`}>
    <thead>
      <tr className=' w-full '>
      <th className=' px-8 border  border-red-300'>Date </th>
    <th className=' m-2 border  border-red-300'>Img </th>
    <th className='m-2 border  border-red-300'>Title </th>
    <th className='m-2 border  border-red-300'>Author </th>
    <th className='m-2 border  border-red-300'>Delete </th>
    <th className='m-2 border  border-red-300'>Edit Blog </th>
     </tr>
</thead>

<tbody>
{blogs?.map((blog)=> (
             <ManageSingleBlog  blog={blog} key={blog._id}   handleDelete={handleDelete}></ManageSingleBlog>
         ))}
  </tbody>
   </table>


</div>
    );
};

export default ManageBlog;