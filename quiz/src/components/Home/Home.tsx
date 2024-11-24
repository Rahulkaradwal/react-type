import { FC, memo, ReactElement } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Start } from "../Question/Start";
import { Finished } from "../Finished/Finished";
import useQuestion from "../../hooks/useQuestion";
import Questions from "../Question/Questions";
import useTimer from "../../hooks/useTimer";
const Home: FC = (): ReactElement => {
  const {
    state: { status },
  } = useQuestion();

  const {
    state: { timerStatus },
  } = useTimer();

  return (
    <div className="h-screen bg-slate-600 gap-4 flex-col flex p-20 text-2xl justify-center">
      {timerStatus === "" ||
      status === "error" ||
      timerStatus === "finished" ? (
        ""
      ) : (
        <Header />
      )}
      {timerStatus === "" && <Start />}
      {timerStatus === "active" && <Questions />}
      {timerStatus === "finished" && <Finished />}
      {timerStatus === "active" && <Footer />}
    </div>
  );
};

export default memo(Home);
