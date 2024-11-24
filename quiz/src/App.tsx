import { FC, ReactElement } from "react";
import Home from "./components/Home/Home";
import QuestionProvider from "./context/QuestionProvider";
import TimerProvider from "./context/TimerProvider";

const App: FC = (): ReactElement => {
  return (
    <QuestionProvider>
      <TimerProvider>
        <Home />
      </TimerProvider>
    </QuestionProvider>
  );
};

export default App;
