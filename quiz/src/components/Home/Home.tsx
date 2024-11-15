import { FC, ReactElement, useReducer } from "react";
import { Header } from "../Header/Header";
import { Questions } from "../Question/Questions";
import { Footer } from "../Footer/Footer";
import { Start } from "../Question/Start";
import { Action, IState } from "../../TypeDefinations";

const initialState: IState = {
  status: "start",
  questions: [],
  answer: null,
  points: 0,
  index: 0,
};

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
      return { ...state, index: state.index + 1, answer: null };

    default:
      throw new Error("Unknown action");
  }
}

export const Home: FC = (): ReactElement => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const totalQuestions = state.questions.length;
  const totalPoints = state.questions.reduce(
    (prev, curr) => prev + curr.points,
    0
  );

  return (
    <div className="h-screen bg-slate-600 gap-4 flex-col flex p-20 text-2xl justify-center">
      {state.status === "start" ? (
        ""
      ) : (
        <Header
          totalQuestions={totalQuestions}
          totalPoints={totalPoints}
          currentPoints={state.points}
          currentQuestion={state.index}
        />
      )}
      {state.status === "start" && <Start dispatch={dispatch} />}
      {state.status === "ready" && (
        <Questions state={state} dispatch={dispatch} />
      )}
      {state.status === "start" ? (
        ""
      ) : (
        <Footer
          index={state.index}
          totalQuestions={totalQuestions}
          dispatch={dispatch}
        />
      )}
    </div>
  );
};
