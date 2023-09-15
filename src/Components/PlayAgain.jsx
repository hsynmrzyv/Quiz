// Hooks
import { useContext } from "react";

// Context
import Context from "../context";

// Router
import { Link } from "react-router-dom";

const PlayAgain = () => {
  const { score, newGame } = useContext(Context);

  return (
    <div className="min-h-[300px] w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-5">Game Over</h1>
      <p>
        Your score is: <span className="text-green-500 text-lg">{score}</span>
      </p>
      <div className="flex gap-2 mt-5">
        <Link to="/">
          <button
            onClick={newGame}
            className="bg-green-400 text-white p-2 rounded hover:scale-105 transition-all duration-200"
          >
            Play Again
          </button>
        </Link>
        <Link to="/rankings">
          <button className="bg-green-400 text-white p-2 rounded hover:scale-105 transition-all duration-200">
            Rankings
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PlayAgain;
