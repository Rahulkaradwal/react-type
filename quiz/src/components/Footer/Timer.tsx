import { FC, ReactElement, useEffect } from "react";
// import useQuestion from "../../hooks/useQuestion";
import useTimer from "../../hooks/useTimer";

export const Timer: FC = (): ReactElement => {
  const {
    state: { secondsRemaining },
    dispatch,
  } = useTimer();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  if (secondsRemaining !== null) {
    const mins = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;

    return (
      <div className="border-2 rounded-full px-6 py-2">
        {mins < 10 && "0"}
        {mins}:{seconds < 10 && "0"}
        {seconds}
      </div>
    );
  } else {
    // Return a default value or an error message if secondsRemaining is null
    return <div>Timer not started</div>;
  }
};
