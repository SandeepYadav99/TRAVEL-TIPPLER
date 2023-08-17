import React from "react";
import CategoryDetail from "@/pages/CategoryDetail/CategoryDetail";

const CategoryIds = async() => {
  const postData = await fetchPostLists();
  return (
    <CategoryDetail postData={postData}/>
  );
};

export default CategoryIds;


export const fetchPostLists =async () => {
  const data = await fetch("https://www.traveltippler.com/wp-json/wp/v2/posts");
  const responseData = await data.json();
  return responseData
}