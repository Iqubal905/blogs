import React from 'react';

const getSingleBlog =async (id) => {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`,{
        cache : 'no-cache'
    })
    return res.json()
};

export default getSingleBlog;