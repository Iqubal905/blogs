// import getAllBlogs from '@/utilis/getAllBlogs';
import React from 'react';
import ManageBlog from './ManageBlog';
import { getCategoriesFromDb } from '@/servicess/blogs.servicess';

const ManageBlogPage =async () => {

    // const blogs =await getAllBlogs()
    const blogs = await getCategoriesFromDb()
    return (
        <div>
            <ManageBlog blogs={blogs}></ManageBlog>
        </div>
    );
};

export default ManageBlogPage;