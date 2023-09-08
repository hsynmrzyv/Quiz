// Router
import { Route, Switch } from "react-router-dom";

// Components
import Container from "./Components/Container";
import Header from "./Components/Header";
import Main from "./Components/Main";

// Pages
import Home from "./Pages/Home";
import Game from "./Pages/Game";

const App = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Home />
      </Main>
    </Container>
  );
};

export default App;
