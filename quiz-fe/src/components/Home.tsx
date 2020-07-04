import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getAvailableQuizzes,
  loadQuiz,
  availableQuizes,
} from "../store/quizSlice";

export const Home: React.FC = () => {
  const history = useHistory();
  const quizes = useSelector(availableQuizes);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const onSubmit = (): void => {
    if (input) {
      // saveAndClose();
    }
    history.push("/quiz");
  };

  return (
    <div>
      <p>Home</p>
      <button type="button" onClick={onSubmit}>
        Save
      </button>
    </div>
  );
};
