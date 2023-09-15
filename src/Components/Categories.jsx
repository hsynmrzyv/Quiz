// Components
import Category from "./Category";

// Hooks
import { useContext } from "react";

// Context
import Context from "../context";

const Categories = () => {
  const { categories } = useContext(Context);

  return (
    <div className="w-1/2 grid grid-cols-4 grid-rows-4 h-[640px] p-10 gap-2 ">
      {categories.map((category) => {
        return <Category key={category.id} name={category.name} />;
      })}
    </div>
  );
};

export default Categories;
