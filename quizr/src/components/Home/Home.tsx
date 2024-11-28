// import { FC, memo, ReactElement } from "react";

// import { useSelector } from "react-redux";
// import { IStore } from "../../TheReduxStore";
// import Header from "../Header/Header";
// import { Start } from "../Question/Start";
// import Questions from "../Question/Questions";
// import Footer from "../Footer/Footer";
// import { Finished } from "../Finished/Finished";
// const Home: FC = (): ReactElement => {
//   const status = useSelector((state: IStore) => state.question.status);
//   const timerStatus = useSelector((state: IStore) => state.timer.timerStatus);
//   return (
//     <div className="h-screen bg-slate-600 gap-4 flex-col flex p-20 text-2xl justify-center">
//       {status !== "" && timerStatus === "active" && <Header />}
//       {status === "" && <Start />}
//       {status === "active" && timerStatus === "active" && <Questions />}
//       {status === "finished" && <Finished />}
//       {status === "active" && <Footer />}
//     </div>
//   );
// };

// export default memo(Home);

import { FC, memo, ReactElement } from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../TheReduxStore";
import Header from "../Header/Header";
import { Start } from "../Question/Start";
import Questions from "../Question/Questions";
import Footer from "../Footer/Footer";
import { Finished } from "../Finished/Finished";

const Home: FC = (): ReactElement => {
  const status = useSelector((state: IStore) => state.question.status);
  const timerStatus = useSelector((state: IStore) => state.timer.timerStatus);

  return (
    <div className="h-screen bg-slate-600 gap-4 flex-col flex p-20 text-2xl justify-center">
      {/* Render Header for all statuses except the initial state */}
      {status !== "" && <Header />}

      {/* Render Start for the initial state */}
      {status === "" && <Start />}

      {/* Render Questions when the quiz is active and the timer is running */}
      {status === "active" && timerStatus === "active" && <Questions />}

      {/* Render Finished when the quiz is complete */}
      {status === "finished" && <Finished />}

      {/* Render Footer for active quiz state */}
      {status === "active" && <Footer />}
    </div>
  );
};

export default memo(Home);
