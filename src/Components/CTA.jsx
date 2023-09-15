// Context
import Context from "../context";

// Hooks
import { useContext } from "react";

// Router
import { Link, useHistory } from "react-router-dom";

const CTA = () => {
  const { category } = useContext(Context);

  const { replace } = useHistory();

  const playGameHandler = () => {
    if (!category) {
      alert("Please select a category");
    } else {
      replace("/game");
    }
  };

  return (
    <div className="w-1/2 flex items-center justify-center flex-col">
      <h1 className="text-[50px] font-caveat font-bold">Quizlet</h1>
      <p className="text-lg">Master the Art of Learning</p>
      <div className="h-20 my-2">
        <img
          src={require("../Images/Brain.png")}
          alt=""
          className="h-full w-full"
        />
      </div>

      <button
        onClick={playGameHandler}
        className="bg-red-200 p-2 rounded-md hover:scale-110 transition-all duration-200"
      >
        Play
      </button>

      {category && (
        <p className="mt-5 text-sm">
          Your category is:
          <span className="font-bold text-green-500"> {category}</span>
        </p>
      )}
      {!category && <p className="mt-5 text-sm">Please select a category</p>}
    </div>
  );
};

export default CTA;
