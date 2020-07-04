import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  finishQuizSession,
  userName,
  correctAnswersCount,
} from "../store/quizSlice";

export const Summary: React.FC = () => {
  const history = useHistory();
  const user = useSelector(userName);
  const correctAnswers = useSelector(correctAnswersCount);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const onSubmit = (): void => {
    if (input) {
      // saveAndClose();
    }
    history.push("/home");
  };

  return (
    <div>
      <p>Summary</p>
      <p>{user}</p>
      <p>{correctAnswers}</p>
      <button type="button" onClick={onSubmit}>
        Uz sākumu
      </button>
    </div>
  );
};
