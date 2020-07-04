export interface Quiz {
  id: string;
  name: string;
}

export interface QuizQuestion {
  id: string;
  questionText: number;
  options: QuizQuestionOption[];
}

export interface QuizQuestionOption {
  id: string;
  optionText: number;
}
