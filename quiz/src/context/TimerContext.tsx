import { createContext } from "react";

export interface TimerAction {
  type: "tick" | "restart";
}
export interface TimerState {
  secondsRemaining: number;
}
export interface ITimerContext {
  state: TimerState;
  dispatch: React.Dispatch<TimerAction>;
}

const TimerContext = createContext<ITimerContext | null>(null);

export default TimerContext;
