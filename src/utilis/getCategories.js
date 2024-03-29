
import { getCategoriesFromDb } from "@/servicess/blogs.servicess";
import { cache } from "react";
import "server-only";

const getCategories = cache(() => {
  return getCategoriesFromDb();
});

export default getCategories;
