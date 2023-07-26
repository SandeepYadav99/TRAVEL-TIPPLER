"use client";
const formatCategory = (category) => {
  // Split the category string by '-' and capitalize each word
  const words = category?.split("-").map((word) => {
    return word?.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the words back together with a space
  return words.join(" ");
};

export default formatCategory;
