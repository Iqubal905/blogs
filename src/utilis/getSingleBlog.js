import React from 'react';
import getCategories from './getCategories';

const getSingleBlog =async (id) => {
    // const res = await fetch(`http://localhost:3000/api/blogs/${id}`,{
    //     cache : 'no-cache'
    // })
    //return res.json()

    const dataFromDb = await getCategories()
    const products = dataFromDb.find((comment)=> comment._id == id )
    const plainObject = JSON.parse(JSON.stringify(products));
    return plainObject
  
};

export default getSingleBlog;