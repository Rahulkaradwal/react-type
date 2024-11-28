import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuestionSliceState, IQuestion } from "../types/Question";
import { AppDispatch } from "../TheReduxStore";

const initialState: QuestionSliceState = {
  status: "",
  questions: [],
  answer: null,
  points: 0,
  index: 0,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    startQuiz(state: QuestionSliceState) {
      state.status = "start";
    },
    loadQuestions(
      state: QuestionSliceState,
      action: PayloadAction<IQuestion[]>
    ) {
      state.status = "active";
      state.questions = action.payload;
    },
    dataFailed(state: QuestionSliceState) {
      state.status = "error";
    },

    newAnswer(state: QuestionSliceState, action) {
      const question = state.questions[state.index];
      state.answer = action.payload;
      state.points =
        action.payload === question.correctOption
          ? state.points + question.points
          : state.points;
    },
    nextQuestion(state: QuestionSliceState) {
      state.index += 1;
      state.answer = null;
    },
    finished(state: QuestionSliceState) {
      state.status = "finished";
    },
    restart(state: QuestionSliceState) {
      state.status = "active";
      state.answer = null;
      state.points = 0;
      state.index = 0;
    },
  },
});

export const {
  dataFailed,
  newAnswer,
  nextQuestion,
  finished,
  loadQuestions,
  restart,
} = questionSlice.actions;

export default questionSlice.reducer;

export function loadQuestionsThunk() {
  return async function (dispatch: AppDispatch) {
    try {
      const response = await fetch("http://localhost:3001/questions");
      const questions = await response.json();
      dispatch(questionSlice.actions.loadQuestions(questions));
    } catch {
      dispatch(questionSlice.actions.dataFailed());
    }
  };
}
