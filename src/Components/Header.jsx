// Router
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-10">
      <Link to="/">
        <h1 className="font-caveat text-3xl">Quizlet</h1>
      </Link>
    </header>
  );
};

export default Header;
