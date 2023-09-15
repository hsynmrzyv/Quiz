import React from "react";

const Context = React.createContext({
  categories: [],
  questions: [],
  variants: [],

  category: null,
  question: null,
  answer: null,
  correct: null,
  user: null,

  index: 0,
  score: 0,

  selectCategory: (category) => {},
  selectAnswer: (answer) => {},
  checkAnswer: () => {},
  getUser: (user) => {},
  updateScore: (score) => {},
  newGame: () => {},
});

export default Context;
