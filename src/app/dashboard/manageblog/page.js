import getAllBlogs from '@/utilis/getAllBlogs';
import React from 'react';
import ManageBlog from './ManageBlog';

const ManageBlogPage =async () => {

    const blogs =await getAllBlogs()

    return (
        <div>
            <ManageBlog blogs={blogs}></ManageBlog>
        </div>
    );
};

export default ManageBlogPage;