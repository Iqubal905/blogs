import Update from '@/app/computents/Update';
import getSingleBlog from '@/utilis/getSingleBlog';
import React from 'react';

const EditPage = async({params}) => {
   
  const updateData =await getSingleBlog(params.id)
  

  
  return  <Update    updateData={updateData}/>
};

export default EditPage;