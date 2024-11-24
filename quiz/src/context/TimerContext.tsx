import { createContext } from "react";
import { ITimerState, TimerAction } from "../TimerTypes";

export interface ITimerContext {
  state: ITimerState;
  dispatch: React.Dispatch<TimerAction>;
}

const TimerContext = createContext<ITimerContext | null>(null);

export default TimerContext;
