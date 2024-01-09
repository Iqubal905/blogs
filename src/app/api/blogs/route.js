

import DbConnect from "@/servicess/DbConnect";
import getAllBlogs from "@/utilis/getAllBlogs";
import getCategories from "@/utilis/getCategories";
import { NextResponse } from "next/server";

export const GET =async (request) => {



     const dataFromDb = await getCategories()
   
    return NextResponse.json(dataFromDb)
   };
   

   export const POST =  async(request) =>{
     const body = await request.json()
    
     const db = await DbConnect();
     const collection = db.collection("blogs");
  
        await collection.insertOne(body);
      
     return NextResponse.json(
         {
             message : 'added successfully'
         }
     )
        }