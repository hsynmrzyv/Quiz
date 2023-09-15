// Context
import Context from "../context";

// Hooks
import { useContext } from "react";

const Answers = () => {
  const { variants, selectAnswer, answer, checkAnswer, correct } =
    useContext(Context);

  return (
    <div className="w-1/2 p-10 flex flex-col items-center justify-center">
      <ul>
        {variants.map((variant) => {
          return (
            <li
              onClick={selectAnswer.bind(null, variant.answer)}
              key={variant.id}
              className={` p-5 border-2 shadow-sm transition-all duration-200 cursor-pointer mb-2 rounded-2xl text-xl text-center hover:shadow-xl ${
                answer === variant.answer &&
                correct === null &&
                "bg-blue-400 border-blue-600"
              } ${
                correct !== null &&
                correct &&
                answer === variant.answer &&
                "bg-green-400 border-green-600"
              } ${
                correct !== null &&
                correct === false &&
                answer === variant.answer &&
                "bg-red-400 border-red-600"
              } ${
                correct !== null &&
                variant.correct &&
                "bg-green-400 border-green-600"
              }`}
            >
              {variant.answer}
            </li>
          );
        })}
      </ul>
      <button
        onClick={checkAnswer}
        className="bg-green-500 mt-5 w-1/2 text-xl text-white p-2 rounded-xl hover:scale-110 transition-all duration-200"
      >
        Submit
      </button>
    </div>
  );
};

export default Answers;
