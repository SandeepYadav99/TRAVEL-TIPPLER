import Banner from "@/pages/Home/Banner";
import React from "react";
import Category from "@/pages/Category/Category";

// export const metadata = {
//   title: "Travel Tippler -",
//   description: "Generated by create next app",
// };

const Home =  () => {
  

  return (
    <div className="">
      <Banner />
      <Category/>
    </div>
  );
};

export default Home;

// export const fetchCategory =async () => {
//   const data = await fetch("https://www.traveltippler.com/wp-json/wp/v2/posts");
//   const responseData = await data.json();
//   return responseData
// }