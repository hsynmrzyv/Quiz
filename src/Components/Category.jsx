// Context
import Context from "../context";

// Hooks
import { useContext } from "react";

const Category = (props) => {
  const { selectCategory, category } = useContext(Context);

  return (
    <button
      onClick={() => selectCategory(props.name)}
      title={props.name}
      className={`rounded-full border-2 bg-white overflow-hidden flex flex-col items-center justify-center ${
        props.name === category ? "opacity-100 border-green-500" : "opacity-50"
      }`}
    >
      <img
        src={require(`../Images/${props.name}.png`)}
        className="h-1/2 w-1/2"
        alt=""
      />
    </button>
  );
};

export default Category;
