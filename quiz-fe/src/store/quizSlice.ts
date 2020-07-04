import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "./store";
import { Quiz, QuizQuestion } from "../types";

interface QuizState {
  userName: string;
  correctAnswersCount: number;
  availableQuizzes: Quiz[];
  quizQuestions: QuizQuestion[];
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
      action: PayloadAction<{ userName: string; quizQuestions: QuizQuestion[] }>
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

export const getAvailableQuizzes = (): AppThunk => (dispatch) => {
  //getAvailableQuizes();
  setTimeout(() => {
    dispatch(setAvailableQuizzes([]));
  }, 1000);
};

export const loadQuiz = (amount: number): AppThunk => (dispatch) => {
  //getQuizQuestions();
  setTimeout(() => {
    dispatch(startQuiz({ userName: "user", quizQuestions: [] }));
  }, 1000);
};

export const checkAnswer = (amount: number): AppThunk => (dispatch) => {
  //checkAnswer();
  setTimeout(() => {
    dispatch(addCorrectAnswer());
  }, 1000);
};

export const userName = (state: RootState) => state.quiz.userName;
export const availableQuizzes = (state: RootState) =>
  state.quiz.availableQuizzes;
export const correctAnswersCount = (state: RootState) =>
  state.quiz.correctAnswersCount;
export const quizQuestions = (state: RootState) => state.quiz.quizQuestions;

export default quizSlice.reducer;
