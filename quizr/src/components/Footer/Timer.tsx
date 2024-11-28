import { FC, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IStore } from "../../TheReduxStore";
import { finished, tick } from "../../features/timerSlice";

export const Timer: FC = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const secondsRemaining = useSelector(
    (state: IStore) => state.timer.secondsRemaining
  );
  useEffect(() => {
    if (secondsRemaining === 0) {
      dispatch(finished()); // Dispatch the finished action when the timer ends
      return;
    }

    const timer = setInterval(() => {
      dispatch(tick());
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch, secondsRemaining]);

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
    return <div>Timer not started</div>;
  }
};
