// Router
import { Route, Switch } from "react-router-dom";

// Hooks
import { useEffect, useState } from "react";

// Components
import Container from "./Components/Container";
import Header from "./Components/Header";
import Main from "./Components/Main";

// Pages
import Home from "./Pages/Home";
import Game from "./Pages/Game";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Rankings from "./Pages/Rankings";

// Context
import Context from "./context";

// Supabase
import supabase from "./supabase";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [variants, setVariants] = useState([]);
  const [category, setCategory] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [correct, setCorrect] = useState(null);
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState(null);
  const [score, setScore] = useState(0);

  const getCategories = async () => {
    const { data, error } = await supabase.from("categories").select();

    if (error) {
      console.log(error);
    }

    if (data) {
      // console.log(data);
      setCategories(data);
    }
  };

  const getQuestions = async () => {
    if (!category) return;

    const { data, error } = await supabase
      .from("questions")
      .select("*")
      .eq("category", category);

    if (error) console.log(error);

    if (data) {
      // console.log(data);
      setQuestions(data);
      setQuestion(data[index]);
    }
  };

  const getVariants = async () => {
    if (!question) {
      return;
    }

    const { data, error } = await supabase
      .from("variants")
      .select("*")
      .eq("questionId", question.id);

    if (error) {
      console.log(error);
    }

    if (data) {
      setVariants(data);
    }
  };

  const getScore = async () => {
    if (!user) {
      return;
    }

    const { data, error } = await supabase
      .from("scores")
      .select("*")
      .eq("userId", user.id);

    if (data) {
      setScore(data[0].score);
    }
  };

  const selectCategory = (c) => {
    if (category === c) {
      setCategory(null);
    } else {
      setCategory(c);
    }
  };

  const selectAnswer = (a) => {
    if (answer === a) {
      setAnswer(null);
    } else {
      setAnswer(a);
    }
  };

  const newGame = () => {
    setIndex(0);
    setCategory(null);
    setVariants(null);
    setQuestions(null);
    setAnswer(null);
  };

  const checkAnswer = () => {
    const newAnswer = variants.find(
      (variant) => variant.answer === answer
    ).correct;

    if (newAnswer) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }

    setCorrect(newAnswer);

    setTimeout(() => {
      setIndex(index + 1);
      setCorrect(null);
    }, 500);
  };

  const updateScore = (s) => {
    setScore(s);
  };

  const getUser = (data) => {
    setUser(data);
  };

  const sendScore = async () => {
    if (!user) {
      return;
    }

    const { data, error } = await supabase
      .from("scores")
      .update({
        score: score,
        userId: user.id,
        fullname: user.fullname,
        username: user.username,
      })
      .eq("userId", user.id)
      .select();

    if (error) {
      console.log(error);
    }

    if (data) {
      console.log(data);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getQuestions();
  }, [category, index]);

  useEffect(() => {
    getVariants();
  }, [question]);

  useEffect(() => {
    getScore();
  }, [user]);

  useEffect(() => {
    sendScore();
  }, [score]);

  return (
    <Container>
      <Context.Provider
        value={{
          categories: categories,
          variants: variants,
          category: category,
          correct: correct,
          question: question,
          questions: questions,
          index: index,
          answer: answer,
          user: user,
          score: score,
          selectCategory: selectCategory,
          selectAnswer: selectAnswer,
          checkAnswer: checkAnswer,
          getUser: getUser,
          updateScore: updateScore,
          newGame: newGame,
        }}
      >
        <Header />
        <Main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/rankings">
              <Rankings />
            </Route>
          </Switch>
        </Main>
      </Context.Provider>
    </Container>
  );
};

export default App;
