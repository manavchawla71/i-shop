import { createContext, useContext } from "react";
import { useState } from "react";
export const CategoryContext = createContext();
export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortby, setsortby] = useState("Ascending");
  const [selectedcolor, setselectedcolor] = useState(null);
  const updateCategory = (category) => {
    setSelectedCategory(category);
  };
  return (
    <CategoryContext.Provider
      value={{
        selectedCategory,
        updateCategory,
        sortby,
        setsortby,
        selectedcolor,
        setselectedcolor,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
export function useCategory() {
  return useContext(CategoryContext);
}
