import { FC, ReactElement } from "react";
import { Header } from "../Header/Header";
import { Questions } from "../Question/Questions";
import { Footer } from "../Footer/Footer";
import { Start } from "../Question/Start";
import { Finished } from "../Finished/Finished";
import useQuestion from "../../hooks/useQuestion";

export const Home: FC = (): ReactElement => {
  const { state, totalPoints, totalQuestions, dispatch } = useQuestion();

  return (
    <div className="h-screen bg-slate-600 gap-4 flex-col flex p-20 text-2xl justify-center">
      {state.status === "start" ||
      state.status === "error" ||
      state.status === "finished" ? (
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
      {state.status === "finished" && (
        <Finished dispatch={dispatch} points={state.points} />
      )}
      {state.status === "start" ||
      state.status === "error" ||
      state.status === "finished" ? (
        ""
      ) : (
        <Footer
          index={state.index}
          secondsRemaining={state.secondsRemaining}
          totalQuestions={totalQuestions}
          dispatch={dispatch}
        />
      )}
    </div>
  );
};
