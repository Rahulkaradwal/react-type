import { FC, ReactElement } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Start } from "../Question/Start";
import { Finished } from "../Finished/Finished";
import useQuestion from "../../hooks/useQuestion";
import Questions from "../Question/Questions";

export const Home: FC = (): ReactElement => {
  const {
    state: { status },
  } = useQuestion();

  return (
    <div className="h-screen bg-slate-600 gap-4 flex-col flex p-20 text-2xl justify-center">
      {status === "start" || status === "error" || status === "finished" ? (
        ""
      ) : (
        <Header />
      )}
      {status === "start" && <Start />}
      {status === "ready" && <Questions />}
      {status === "finished" && <Finished />}
      {status === "start" || status === "error" || status === "finished" ? (
        ""
      ) : (
        <Footer />
      )}
    </div>
  );
};
