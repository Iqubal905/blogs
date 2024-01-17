import getAllBlogs from '@/utilis/getAllBlogs';
import React from 'react';
import ManageBlog from './ManageBlog';
//import  getCategoriesFromDb  from '@/servicess/blogs.servicess';
import getCategories from '@/utilis/getCategories';

const ManageBlogPage =async () => {
const text = await getAllBlogs()

    const blogs = await getCategories()
    const plainObject = JSON.parse(JSON.stringify(blogs));

    return (
        <div>
            <ManageBlog blogs={plainObject}></ManageBlog>
        </div>
    );
};

export default ManageBlogPage;