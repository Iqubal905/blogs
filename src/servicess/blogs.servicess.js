import "server-only";
import DbConnect from "./DbConnect";

export const getCategoriesFromDb = async () => {
  const db = await DbConnect();
  const categoriesCollection = db.collection("blogs");
  return categoriesCollection.find().toArray();
};
