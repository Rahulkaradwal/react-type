import { FC, ReactNode, useReducer } from "react";
import { ITimerState, TimerAction } from "../TimerTypes";
import TimerContext from "./TimerContext";

interface TimerProviderProps {
  children: ReactNode;
}
const initialState: ITimerState = {
  secondsRemaining: 0,
  timerStatus: "",
};

function timerReducer(state: ITimerState, action: TimerAction): ITimerState {
  switch (action.type) {
    case "start":
      return { ...state, timerStatus: "active", secondsRemaining: 30 * 15 };
    case "finished": {
      return { ...state, timerStatus: "finished" };
    }
    case "tick":
      return {
        ...state,
        secondsRemaining: !state.secondsRemaining
          ? 0
          : state.secondsRemaining - 1,
        timerStatus:
          state.secondsRemaining === 0 ? "finished" : state.timerStatus,
      };

    default:
      throw new Error("Unknown Action");
  }
}

const TimerProvider: FC<TimerProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(timerReducer, initialState);
  return (
    <TimerContext.Provider value={{ state, dispatch }}>
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
