import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkAnswer, quizQuestions } from "../store/quizSlice";
import { QuizQuestion } from "./QuizQuestion";

export const Quiz: React.FC = () => {
  const history = useHistory();
  const questions = useSelector(quizQuestions);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const onSubmit = (): void => {
    if (input) {
      // saveAndClose();
    }
    history.push("/summary");
  };

  return (
    <div>
      <p>Quiz</p>
      <QuizQuestion onSubmit={onSubmit} />
    </div>
  );
};
