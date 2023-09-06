// useCategoryName.js

import { useEffect, useState } from "react";

const useCategoryName = (category) => {
  const [formattedCategory, setFormattedCategory] = useState("");

  useEffect(() => {
    const formatCategoryName = (category) => {
      // Convert the category to lowercase and replace spaces with '-'
      return category.toLowerCase().replace(/&/g, "").replace(/\s+/g, "-");
    };

    setFormattedCategory(formatCategoryName(category));
  }, [category]);

  return formattedCategory;
};

export default useCategoryName;


