export interface Quiz {
  quizId: string;
  name: string;
}

export interface Question {
  questionId: string;
  questionText: string;
  options: QuizQuestionOption[];
}

export interface QuizQuestionOption {
  answerId: string;
  answerText: string;
}
