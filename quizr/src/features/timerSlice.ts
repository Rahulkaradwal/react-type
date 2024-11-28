import { createSlice } from "@reduxjs/toolkit";
import { TimerState } from "../types/Timer";

const initialState: TimerState = {
  secondsRemaining: 2 * 60,
  timerStatus: "idle",
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    tick: (state) => {
      state.secondsRemaining = Math.max(state.secondsRemaining - 1, 0);
      state.timerStatus = "active";
    },
    finished: (state) => {
      state.secondsRemaining = 0;
      state.timerStatus = "finished";
    },
    restart: (state) => {
      state.secondsRemaining = 30;
      state.timerStatus = "idle";
    },
  },
});

export const { tick, restart, finished } = timerSlice.actions;
export default timerSlice.reducer;
