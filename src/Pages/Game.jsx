// Components
import Question from "../Components/Question";
import Answers from "../Components/Answers";
import PlayAgain from "../Components/PlayAgain";

// Context
import Context from "../context";

// Hooks
import { useContext } from "react";

// Router
import { useHistory } from "react-router-dom";

const Game = () => {
  const { user, index, questions } = useContext(Context);

  const { replace } = useHistory();

  if (!user) {
    replace("/");
    return;
  }

  return (
    <>
      {questions.length > index && (
        <>
          <Question />
          <Answers />
        </>
      )}
      {questions.length === index && <PlayAgain />}
    </>
  );
};

export default Game;
