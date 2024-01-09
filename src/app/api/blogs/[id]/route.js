import db from "@/db.json"
import DbConnect from "@/servicess/DbConnect";
import getCategories from "@/utilis/getCategories";
import { ObjectId } from "mongodb";

import { NextResponse } from "next/server";

export const GET = async(request, {params}) => {
console.log(params);
    const dataFromDb = await getCategories()
    const products = dataFromDb.find((comment)=> comment._id == params.id )

   
    if(products){
        return NextResponse.json(products)
    }
    return NextResponse.json(
        {
            message: 'no found'
        },
        {
            ststus: '404'
        },

    )
   };
   
   export const DELETE =  async(request, {params}) =>{
    const id = params.id
    console.log(id);
    const db = await DbConnect();
  const collection = db.collection("blogs");
        
  await collection.deleteOne({ _id: new ObjectId(id) });
   
    
  
    return NextResponse.json(
        {
            message: "delete successfully"
        }
    )
       }



        
   export const PATCH =  async(request, {params}) =>{
    const body = await request.json()
    const db = await DbConnect();
    const collection = db.collection("blogs");
    await collection.updateOne({ _id: new ObjectId(params.id) }, { $set: body });
   
    return NextResponse.json(
        {
            message: "update successfully"
        }
    )
       }
   