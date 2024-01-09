"use client"

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const Update = ({updateData}) => {
    const {title, content, img, date, tags, author, _id} = updateData
    const router = useRouter()
    const [message, setMessage] = useState('')
    const [isPending, startTransition] = useTransition()
     const [loading, setLoading] = useState(false)
     const isLoading = isPending || loading

    const handleSubmit =async (e)=>{
        e.preventDefault()
         const form = e.target
         const author = form.author.value
         const date = form.date.value
         const tags = form.tags.value
         const content = form.content.value
         const title = form.title.value
         const img = form.img.value
         const updataData = {title, author, content, tags, date, img}
         console.log(updataData);
       
        
         try  {
            setLoading(true)
            const res = await fetch(
             `http://localhost:3000/api/blogs/${_id}`,{
               method: "PATCH",
         headers:{
           "content-type": "application/json"
         },
         body : JSON.stringify(updataData)
         
            })
            const result = await res.json()
            console.log(result);
             setMessage(result.message)
             setLoading(false)
            startTransition(()=>{
                router.refresh()
            })

            router.push('/dashboard/manageBlog')
           }catch(error){
             console.log(error);
           }


        }


    return (
        <div className= {`border-collapse w-full  ${isLoading ? "opacity-50" : "opacity-100"}`}>
        <div className="">
            <h2 className=" text-5xl ">{message}</h2>
        </div>
<form onSubmit={handleSubmit} className="w-3/5 mx-auto mt-2">
      <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-1">
        Title:
      </label>
      <input
        type="text"
        id="title"
        name="title"
        defaultValue={title}
       
        className="border rounded w-full py-2 px-3 mb-2"
        required
      />

      <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-1">
        Author:
      </label>
      <input
        type="text"
        id="author"
        name="author"
        defaultValue={author}
       
        className="border rounded w-full py-2 px-3 mb-2"
        required
      />

      <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-1">
        Content:
      </label>
      <textarea
        id="content"
        name="content"
        defaultValue={content}
      
        rows="4"
        className="border rounded w-full py-2 px-3 mb-2"
        required
      ></textarea>

      <label htmlFor="tags" className="block text-gray-700 text-sm font-bold mb-1">
        Tags (comma-separated):
      </label>
      <input
        type="text"
        id="tags"
        name="tags"
        defaultValue={tags}
   
        className="border rounded w-full py-2 px-3 mb-2"
        required
      />

      <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-1">
        Date:
      </label>
      <input
        type="date"
        id="date"
        name="date"
        defaultValue={date}
    
        className="border rounded w-full py-2 px-3 mb-2"
        required
      />

      <label htmlFor="img" className="block text-gray-700 text-sm font-bold mb-1">
        Image URL:
      </label>
      <input
        type="text"
        id="img"
        name="img"
        defaultValue={img}
 
        className="border rounded w-full py-2 px-3 mb-4"
        required
      />

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Submit
      </button>
    </form>

        {/* <form onSubmit={handleSubmit} >
        <input
                className=' w-full mb-2 p-2  focus:outline-none border border-red-200'
                type="text"
               placeholder='title'
               name='title'
               defaultValue={title}
            />
             <button  className=' bg-red-600 text-white'>
            Submit
        </button>
        </form> */}
            
        </div>
    );
};

export default Update;