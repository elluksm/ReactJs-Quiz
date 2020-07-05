import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  userName,
  getAvailableQuizzes,
  loadQuiz,
  availableQuizzes,
} from "../store/quizSlice";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { Quiz } from "../types";
import "./Home.scss";

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
    <Container className="quiz-selection">
      <h1 className="heading-text">Testa uzdevums</h1>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <Form onSubmit={handleSubmit} noValidate validated={validated}>
            <Form.Group>
              <Form.Control
                type="text"
                size="lg"
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
                size="lg"
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

            <div className="submit-button-container">
              <Button variant="outline-success" size="lg" type="submit">
                Sākt
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
