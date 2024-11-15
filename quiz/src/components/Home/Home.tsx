import { FC, ReactElement, useReducer } from "react";
import { Header } from "../Header/Header";
import { Questions } from "../Question/Questions";
import { Footer } from "../Footer/Footer";
import { Start } from "../Question/Start";
import { IQuestion } from "../../TypeDefinations";

type Status = "start" | "loading" | "error" | "ready" | "active" | "finished";

export interface IState {
  status: Status;
  answer: number | null;
  points: number;
  index: number;
  questions: IQuestion[];
}

const initialState: IState = {
  status: "start",
  questions: [],
  answer: null,
  points: 0,
  index: 0,
};

export type Action =
  | { type: "start" }
  | { type: "dataReceived"; payload: IQuestion[] }
  | { type: "dataFailed" }
  | { type: "newAnswer"; payload: number }
  | { type: "nextQuestion" }
  | { type: "finished" }
  | { type: "restart" }
  | { type: "tick" };

function counterReducer(state: IState, action: Action): IState {
  switch (action.type) {
    case "start":
      return { ...state, status: "ready" };
    case "dataReceived":
      return { ...state, status: "ready", questions: action.payload };
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
      return { ...state, index: state.index + 1 };

    default:
      throw new Error("Unknown action");
  }
}

export const Home: FC = (): ReactElement => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="h-screen bg-slate-600 gap-4 flex-col flex p-20 text-2xl justify-center">
      {state.status === "start" ? "" : <Header />}
      {state.status === "start" && <Start dispatch={dispatch} />}
      {state.status === "ready" && (
        <Questions state={state} dispatch={dispatch} />
      )}
      {state.status === "start" ? "" : <Footer dispatch={dispatch} />}
    </div>
  );
};
