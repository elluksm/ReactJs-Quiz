import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  finishQuizSession,
  userName,
  correctAnswersCount,
  quizQuestionsCount,
} from "../store/quizSlice";
import { Container, Button } from "react-bootstrap";
import "./Summary.scss";

export const Summary: React.FC = () => {
  const history = useHistory();
  const user = useSelector(userName);
  const correctAnswers = useSelector(correctAnswersCount);
  const questionsCount = useSelector(quizQuestionsCount);
  const dispatch = useDispatch();

  const onSubmit = (): void => {
    dispatch(finishQuizSession());
    history.push("/");
  };

  return (
    <Container className="summary">
      <h2>Paldies, {user}!</h2>
      <p className="summary-text">
        Tu atbildēji pareizi uz {correctAnswers} no {questionsCount}{" "}
        jautājumiem.
      </p>

      <div className="submit-button-container">
        <Button variant="outline-success" size="lg" onClick={onSubmit}>
          Uz sākumu
        </Button>
      </div>
    </Container>
  );
};
