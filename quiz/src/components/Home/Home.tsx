import { FC, ReactElement, useReducer } from "react";
import { Header } from "../Header/Header";
import { Questions } from "../Question/Questions";
import { Footer } from "../Footer/Footer";

type Status = "start" | "loading" | "error" | "ready" | "active" | "finished";

export interface IState {
  status: Status;
  answer: number | null;
  points: number;
  index: number;
}

const initialState: IState = {
  status: "start",
  answer: null,
  points: 0,
  index: 0,
};

export type Action =
  | { type: "dataReceived" }
  | { type: "dataFailed" }
  | { type: "start" }
  | { type: "newAnswer" }
  | { type: "nextQuestion" }
  | { type: "finished" }
  | { type: "restart" }
  | { type: "tick" };

function counterReducer(state: IState, action: Action): IState {
  switch (action.type) {
    case "dataReceived":
      return { ...state, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };

    default:
      throw new Error("Unknown action");
  }
}

export const Home: FC = (): ReactElement => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="h-screen bg-slate-600 gap-4 flex-col flex p-20 text-2xl justify-center">
      <Header />
      <Questions state={state} dispatch={dispatch} />
      <Footer />
    </div>
  );
};
