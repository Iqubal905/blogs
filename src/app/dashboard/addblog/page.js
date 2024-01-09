
"use client"
import React, { useState } from 'react';

const AddBlog = () => {

   
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    tags: '',
    date: '',
    img: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic here
   

const res = await fetch('http://localhost:3000/api/blogs',{
  method: "POST",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(formData)
})
const result = await res.json()
console.log(result);


  };

  return (
    <form onSubmit={handleSubmit} className=" w-3/5 mx-auto mt-2">
      <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-1">
        Title:
      </label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
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
        value={formData.author}
        onChange={handleChange}
        className="border rounded w-full py-2 px-3 mb-2"
        required
      />

      <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-1">
        Content:
      </label>
      <textarea
        id="content"
        name="content"
        value={formData.content}
        onChange={handleChange}
        rows="3"
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
        value={formData.tags}
        onChange={handleChange}
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
        value={formData.date}
        onChange={handleChange}
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
        value={formData.img}
        onChange={handleChange}
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
  );
};

export default AddBlog;
