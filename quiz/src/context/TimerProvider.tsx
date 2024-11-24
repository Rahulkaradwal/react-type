import { FC, ReactNode, useReducer } from "react";
import TimerContext, { TimerAction, TimerState } from "./TimerContext";

interface TimerProviderProps {
  children: ReactNode;
}

const initialState: TimerState = {
  secondsRemaining: 0,
};

function timerReducer(state: TimerState, action: TimerAction): TimerState {
  switch (action.type) {
    case "tick":
      return {
        secondsRemaining: Math.max(state.secondsRemaining - 1, 0),
      };
    case "restart":
      return {
        secondsRemaining: 0,
      };
    default:
      throw new Error("Unknown action type");
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
