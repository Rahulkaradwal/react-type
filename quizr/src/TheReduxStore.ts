import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./features/questionSlice";
import timerSlice from "./features/timerSlice";
import { QuestionSliceState } from "./types/Question";
import { TimerState } from "./types/Timer";

export interface IStore {
  question: QuestionSliceState;
  timer: TimerState;
}

export const store = configureStore({
  reducer: {
    question: questionSlice,
    timer: timerSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
