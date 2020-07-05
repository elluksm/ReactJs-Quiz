import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Question, QuizQuestionOption } from "../types";

export interface QuizQuestionProps {
  question: Question;
  questionCount: number;
  onSubmit: (questionId: string, selectedAnswerId: string) => void;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  questionCount,
  onSubmit,
}) => {
  const [selectedAnswerId, setSelectedAnswer] = useState("");

  return (
    <div>
      <p>{question.questionText}</p>
      {question.options.map((option: QuizQuestionOption) => {
        return (
          <p
            key={option.answerId}
            onClick={() => setSelectedAnswer(option.answerId)}
          >
            {option.answerText}
          </p>
        );
      })}
      <Button
        variant="primary"
        disabled={!selectedAnswerId}
        onClick={() => onSubmit(question.questionId, selectedAnswerId)}
      >
        Nākamais
      </Button>
    </div>
  );
};
