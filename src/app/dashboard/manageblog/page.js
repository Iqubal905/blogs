
import React from 'react';
import ManageBlog from './ManageBlog';
import  {getCategoriesFromDb}  from '@/servicess/blogs.servicess';


const ManageBlogPage =async () => {


    const blogs = await getCategoriesFromDb()
    const plainObject = JSON.parse(JSON.stringify(blogs));

    return (
        <div>
            <ManageBlog blogs={plainObject}></ManageBlog>
        </div>
    );
};

export default ManageBlogPage;