import { FC, memo, ReactNode, useMemo, useReducer } from "react";
import QuestionContext from "./QuestionContext";
import { Action, IState } from "../TypeDefinations";

interface QuestionProviderProps {
  children: ReactNode;
}

const initialState: IState = {
  status: "start",
  questions: [],
  answer: null,
  points: 0,
  index: 0,
  secondsRemaining: 0,
};

function counterReducer(state: IState, action: Action): IState {
  switch (action.type) {
    case "start":
      return { ...state, status: "ready" };
    case "dataReceived":
      return {
        ...state,
        status: "ready",
        questions: action.payload,
        secondsRemaining: state.questions.length * 30,
      };
    case "dataFailed":
      return { ...state, status: "error" };
    case "newAnswer": {
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "finished":
      return { ...state, status: "finished" };

    default:
      throw new Error("Unknown action");
  }
}

const QuestionProvider: FC<QuestionProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const totalQuestions = state.questions.length;
  const totalPoints = state.questions.reduce(
    (prev, curr) => prev + curr.points,
    0
  );

  const value = useMemo(
    () => ({
      state,
      totalPoints,
      totalQuestions,
      dispatch,
    }),
    [state, totalPoints, totalQuestions]
  );

  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
};
export default memo(QuestionProvider);
