// Hooks
import { useContext } from "react";

import Categories from "../Components/Categories";
import CTA from "../Components/CTA";

// Router
import { useHistory } from "react-router-dom";

// Context
import Context from "../context";

const Home = () => {
  const { user } = useContext(Context);

  const { replace } = useHistory();

  if (!user) {
    replace("/sign-in");
  }

  return (
    <>
      <Categories />
      <CTA />
    </>
  );
};

export default Home;
