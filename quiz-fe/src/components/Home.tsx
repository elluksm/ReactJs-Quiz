import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  userName,
  getAvailableQuizzes,
  loadQuiz,
  availableQuizzes,
} from "../store/quizSlice";
import { Container, Button, Form } from "react-bootstrap";
import { Quiz } from "../types";

export const Home: React.FC = () => {
  const history = useHistory();
  const initialUserName = useSelector(userName);
  const quizes = useSelector(availableQuizzes);
  const dispatch = useDispatch();
  const [name, setName] = useState(initialUserName);
  const [selectedQuiz, changeSelectedQuiz] = useState("");
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    dispatch(getAvailableQuizzes());
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!userName || !selectedQuiz) {
      setValidated(true);
    } else {
      await dispatch(loadQuiz(selectedQuiz, name));
      history.push("/quiz");
    }
  };

  return (
    <Container>
      <h1>Testa uzdevums</h1>
      <Form onSubmit={handleSubmit} noValidate validated={validated}>
        <Form.Group>
          <Form.Control
            type="text"
            required
            placeholder="Ievadi savu vārdu"
            name="userName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Lūdzu ievadi savu vārdu
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="select"
            required
            value={selectedQuiz}
            onChange={(e) => changeSelectedQuiz(e.target.value)}
          >
            <option value="">Izvēlies testu</option>
            {quizes.map((quiz: Quiz) => {
              return (
                <option value={quiz.quizId} key={quiz.quizId}>
                  {quiz.name}
                </option>
              );
            })}
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Lūdzu izvēlies testu
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sākt
        </Button>
      </Form>
    </Container>
  );
};
