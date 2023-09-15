// Components
import Question from "../Components/Question";
import Answers from "../Components/Answers";

// Router
import { useHistory } from "react-router-dom";

// Hooks
import { useContext } from "react";

// Context
import Context from "../context";

const Game = () => {
  const { user } = useContext(Context);

  const { replace } = useHistory();

  if (!user) {
    replace("/sign-in");
    return;
  }

  return (
    <>
      <Question />
      <Answers />
    </>
  );
};

export default Game;
