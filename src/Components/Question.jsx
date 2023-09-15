// Context
import Context from "../context";

// Hooks
import { useContext } from "react";

const Question = () => {
  const { question, questions, index, category } = useContext(Context);

  return (
    <div className="w-1/2 h-[640px] p-10 flex items-center justify-center flex-col">
      <h1 className="text-2xl  font-medium mb-5">
        Question {index + 1} of {questions.length}
      </h1>
      <div className="h-[300px] mb-5">
        <img
          className="h-full "
          src={require(`../Images/${category}.png`)}
          alt=""
        />
      </div>
      <h1 className="text-[30px] font-medium text-center">
        {question.question}
      </h1>
    </div>
  );
};

export default Question;
