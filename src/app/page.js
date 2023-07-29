import Banner from "@/pages/Home/Banner";
import React from "react";
import Category from "@/pages/Category/Category";

export const metadata = {
  title: "Travel Tippler -",
  description: "Generated by create next app",
};

const Home =  () => {
  // const post_data = await fetchPostData();
  
  return (
    <div>
      <Banner />
      <Category />
    </div>
  );
};

export default Home;

// export const fetchPostData = async () => {
//   const respons_data = await fetch(
//     "https://www.traveltippler.com/wp-json/wp/v2/posts"
//   );
//   const data = await respons_data.json();
//   return data;
// }
