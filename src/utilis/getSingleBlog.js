import React from 'react';

const getSingleBlog =async (id) => {
    const res = await fetch(`/api/blogs/${id}`,{
        cache : 'no-cache'
    })
    return res.json()
};

export default getSingleBlog;