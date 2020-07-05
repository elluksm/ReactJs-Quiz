import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkAnswer, quizQuestions } from "../store/quizSlice";
import { QuizQuestion } from "./QuizQuestion";
import { Container } from "react-bootstrap";

export const Quiz: React.FC = () => {
  const history = useHistory();
  const questions = useSelector(quizQuestions);
  const dispatch = useDispatch();
  const [questionIndex, updateQuestionIndex] = useState(0);

  const onSubmit = async (questionId: string, selectedAnswerId: string) => {
    await dispatch(checkAnswer(questionId, selectedAnswerId));
    if (questionIndex >= questions.length - 1) {
      history.push("/summary");
    } else {
      updateQuestionIndex(questionIndex + 1);
    }
  };

  const quizProgress = (questionIndex / questions.length) * 100;
  return (
    <Container key={questionIndex}>
      {questions[questionIndex] && (
        <QuizQuestion
          question={questions[questionIndex]}
          quizProgress={quizProgress}
          onSubmit={onSubmit}
        />
      )}
    </Container>
  );
};
