import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "./store";
import { Quiz, Question } from "../types";
import { mockQuizzes, mockQuizQuestionsPG } from "./mockData";

interface QuizState {
  userName: string;
  correctAnswersCount: number;
  availableQuizzes: Quiz[];
  quizQuestions: Question[];
}

const initialState: QuizState = {
  userName: "",
  correctAnswersCount: 0,
  availableQuizzes: [],
  quizQuestions: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new immutable state based off those changes
    setAvailableQuizzes: (state, action: PayloadAction<Quiz[]>) => {
      state.availableQuizzes = action.payload;
    },
    startQuiz: (
      state,
      action: PayloadAction<{ userName: string; quizQuestions: Question[] }>
    ) => {
      state.userName = action.payload.userName;
      state.quizQuestions = action.payload.quizQuestions;
    },
    addCorrectAnswer: (state) => {
      state.correctAnswersCount += 1;
    },
    finishQuizSession: (state) => {
      state.correctAnswersCount = 0;
    },
  },
});

export const {
  setAvailableQuizzes,
  startQuiz,
  addCorrectAnswer,
  finishQuizSession,
} = quizSlice.actions;

export const getAvailableQuizzes = (): AppThunk => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8000/api/quizes`);
    const jsonResponse = await response.json();
    dispatch(setAvailableQuizzes(jsonResponse));
  } catch (err) {
    console.log(err);
    console.log("Error loading data from server - using mock data");
    dispatch(setAvailableQuizzes(mockQuizzes));
  }
};

export const loadQuiz = (quizId: string, userName: string): AppThunk => async (
  dispatch
) => {
  try {
    const response = await fetch(`http://localhost:8000/api/quizes/${quizId}`);
    const jsonResponse = await response.json();
    dispatch(startQuiz({ userName: userName, quizQuestions: jsonResponse }));
  } catch (err) {
    console.log(err);
    console.log("Error loading data from server - using mock data");
    dispatch(
      startQuiz({ userName: userName, quizQuestions: mockQuizQuestionsPG })
    );
  }
};

export const checkAnswer = (
  questionId: string,
  selectedAnswerId: string
): AppThunk => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:8000/api/quizes/check/`,
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionId: questionId,
          answerId: selectedAnswerId,
        }),
      }
    );
    const isAnswerCorrect = await response.json();
    if (isAnswerCorrect) {
      dispatch(addCorrectAnswer());
    }
  } catch (err) {
    console.log(err);
    console.log("Error occurred - we couldn't check if answer is correct.");
  }
};

export const userName = (state: RootState) => state.quiz.userName;
export const availableQuizzes = (state: RootState) =>
  state.quiz.availableQuizzes;
export const correctAnswersCount = (state: RootState) =>
  state.quiz.correctAnswersCount;
export const quizQuestions = (state: RootState) => state.quiz.quizQuestions;
export const quizQuestionsCount = (state: RootState) =>
  state.quiz.quizQuestions.length;

export default quizSlice.reducer;
