import React, { useState } from "react";
import { Button, Row, Col, ProgressBar } from "react-bootstrap";
import { Question, QuizQuestionOption } from "../types";
import "./QuizQuestion.scss";

export interface QuizQuestionProps {
  question: Question;
  quizProgress: number;
  onSubmit: (questionId: string, selectedAnswerId: string) => void;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  quizProgress,
  onSubmit,
}) => {
  const [selectedAnswerId, setSelectedAnswer] = useState("");

  return (
    <div className="quiz-question">
      <h2 className="question-text">{question.questionText}</h2>
      <div className="options-container">
        <Row>
          {question.options.map((option: QuizQuestionOption) => {
            return (
              <Col xs={12} md={6} key={option.answerId}>
                <div
                  className={
                    option.answerId === selectedAnswerId
                      ? "option selected-option"
                      : "option"
                  }
                >
                  <p
                    className="option-text"
                    onClick={() => setSelectedAnswer(option.answerId)}
                  >
                    {option.answerText}
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>

      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <ProgressBar
            now={quizProgress}
            className="quiz-progress"
            variant="success"
          />
        </Col>
      </Row>

      <div className="submit-button-container">
        <Button
          variant="outline-success"
          size="lg"
          disabled={!selectedAnswerId}
          onClick={() => onSubmit(question.questionId, selectedAnswerId)}
        >
          Nākamais
        </Button>
      </div>
    </div>
  );
};
