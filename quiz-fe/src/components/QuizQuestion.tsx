import React, { useState } from "react";

export interface QuizQuestionProps {
  questionText?: string;
  options?: string[];
  onSubmit: () => void;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  questionText,
  options,
  onSubmit,
}) => {
  const [input, setInput] = useState("");

  const onOptionClick = (): void => {
    if (input) {
      // saveAndClose();
    }
    onSubmit();
  };

  return (
    <div>
      <p>Quiz Question</p>
      <button type="button" onClick={onOptionClick}>
        Save
      </button>
    </div>
  );
};
