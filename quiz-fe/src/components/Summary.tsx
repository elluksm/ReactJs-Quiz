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
    <Container>
      <p>Paldies, {user}!</p>
      <p>
        Tu atbildēji pareizi uz {correctAnswers} no {questionsCount}{" "}
        jautājumiem.
      </p>
      <Button variant="primary" onClick={onSubmit}>
        Uz sākumu
      </Button>
    </Container>
  );
};
